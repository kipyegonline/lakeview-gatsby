import React from "react"
import {
  Box,
  TableContainer,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  CircularProgress,
} from "@material-ui/core"
import TodayIcon from "@material-ui/icons/Today"
import Layout from "../components/layout"
import fastwrapper from "../images/assets/img/2021/fastingwide.png"
const bg = {
  background: `url(${fastwrapper})`,
  width: "100%",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "local",
  backgroundSize: "cover",
  objectFit: "cover",
  backgroundPosition: "top ",
  height: 400,
}
export default function PrayerAndFasting() {
  const [fasts, setFasts] = React.useState([])

  let url2 = `./server/fasting.php?getfasts=true`
  const fetchData = async (url, callback) => {
    try {
      let fast = await fetch(url)
      fast = await fast.json()

      callback(fast)
    } catch (error) {
      callback([])
    }
  }
  React.useEffect(() => {
    if (fasts.length) return
    setTimeout(() => {
      fetchData(url2, setFasts)
    }, 2000)
  }, [])
  const spinner = (
    <div className="p-4  text-red mx-auto my-auto" style={bg}>
      <CircularProgress color="primary" size="3rem" />
      <Typography variant="h4" className="text-white">
        Loading...
      </Typography>
    </div>
  )
  return (
    <Layout>
      <Box className="py-2 m-2">
        <Typography align="center" className="purp" variant="h5">
          21 days of prayer and Fasting
        </Typography>
        {fasts.length ? (
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Day</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>title</TableCell>
                  <TableCell>Prayer item(s)</TableCell>
                  <TableCell>Message</TableCell>
                  <TableCell>Verse(s)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {fasts.map(item => (
                  <FastsTable {...item} key={item.id} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          spinner
        )}
      </Box>
    </Layout>
  )
}
const checkDate = date => new Date().getDate() === new Date(date).getDate()
const FastsTable = ({ id, date, title, subtitle, message, verse }) => (
  <TableRow
    hover
    style={{ borderBottom: "1px solid red" }}
    selected={checkDate(date)}
  >
    <TableCell>
      {id} {checkDate(date) ? <TodayIcon color="secondary" /> : <TodayIcon />}
    </TableCell>
    <TableCell>{new Date(date).toDateString()}</TableCell>
    <TableCell>{title}</TableCell>
    <TableCell>{subtitle}</TableCell>
    <TableCell>{message}</TableCell>
    <TableCell>{verse}</TableCell>
  </TableRow>
)

const faux = [...Array(20)].map((item, i) => ({
  date: new Date("2021", "0", String(11 + i)),
  title: "Rooted",
  subtitle: "Live",
  message: "21 days of fasting and prayer",
  id: i + 1,
  verse: "John 14:14",
}))
