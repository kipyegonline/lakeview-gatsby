import React from "react"
import axios from "axios"
import moment from "moment"
import { DatePicker, Space } from "antd"
import {
  TableContainer,
  Box,
  Button,
  Table,
  TableHead,
  TableRow,
  TableBody,
  Typography,
  TableCell,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
} from "@material-ui/core"
import AdminLayout, { PaginationMaker } from "./adminLayout"
import ErrorIcon from "@material-ui/icons/Error"
import { Sermon } from "../../components/sermons/mainSermons"
const pep = [...Array(20)].map((item, i) => ({
  id: i + 1,
  title: "Jules",
  date: new Date("2021", "01", i + 1),
  message: "Ay, Dios Mios",
  reading: "Mark 10:10",
  speaker: "Vince",
}))
/* disable eslint */
export default function Sermons() {
  const [sermons, setSermons] = React.useState([])
  const [sermon, setSermon] = React.useState({})
  const [spinner, setSpinner] = React.useState(false)
  const [loaded, setLoaded] = React.useState("")
  const fetchSermons = async () => {
    setSpinner(true)
    try {
      const { data } = await axios.get(
        "../../server/sermon.php?fetchsermons=true"
      )
      if (Array.isArray(data)) {
        setTimeout(() => {
          setSpinner(false)
          setSermons(data)
        }, 2000)
      } else {
        throw new Error("There are no sermons at the moment. Check back soon")
      }
    } catch (error) {
      setSpinner(false)
      // setSermons(pep)
      setLoaded(error.message)
    }
  }
  const deleteSermon = id => {
    if (window.confirm("Delete Sermon")) {
      fetch(`../../server/sermon.php?deletesermon=true&sermonId=${id}`)
        .then(res => res.json())
        .then(data => {
          setSermons(sermons.filter(sermon => sermon.id !== id))
        })
        .catch(error => console.log(error.message))
    }
  }
  const showView = id => {
    setSermon(sermons.find(sermon => sermon.id === id))
  }
  React.useEffect(() => {
    fetchSermons()
  }, [])
  const Spinner = (
    <div className="text-center p-4 mx-auto my-4">
      <CircularProgress color="primary" size="3rem" />
    </div>
  )
  const ErrorMsg = (
    <div className="mx-auto p-2">
      <Typography>
        {" "}
        <ErrorIcon color="secondary" />
        {loaded ? loaded : "There are no sermons"}
      </Typography>
    </div>
  )

  return (
    <AdminLayout>
      <ViewSermon sermon={sermon} />
      <Box>
        <Typography align="center" variant="h6">
          Sermons
        </Typography>

        {!!sermons.length ? (
          <SermonTable
            sermons={sermons}
            deleteSermon={deleteSermon}
            handleView={showView}
          />
        ) : spinner ? (
          Spinner
        ) : (
          ErrorMsg
        )}
      </Box>
    </AdminLayout>
  )
}

const SermonTable = ({
  sermons = [],
  deleteSermon = f => f,
  handleView = f => f,
}) => {
  const [current, setCurrent] = React.useState(0)

  const perpage = sermons.length > 10 ? 10 : sermons.length
  const start = current * perpage,
    end = current * perpage + perpage
  const pages = Math.ceil(sermons.length / perpage)
  const handleChange = (e, p) => {
    setCurrent(p - 1)
  }
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Speaker</TableCell>
            <TableCell>Reading</TableCell>
            <TableCell>Message</TableCell>
            <TableCell>View </TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sermons
            ?.slice(start, end)

            ?.map((sermon, index) => (
              <SermonT
                key={sermon.id}
                {...sermon}
                index={start + index}
                handleView={() => handleView(sermon.id)}
                handleDelete={() => deleteSermon(sermon.id)}
              />
            ))}
        </TableBody>
      </Table>
      {sermons.length > 10 && (
        <PaginationMaker
          count={pages}
          page={current + 1}
          handleChange={handleChange}
        />
      )}
    </TableContainer>
  )
}

const SermonT = ({
  index,
  title,
  date,
  message,
  reading,
  speaker,
  handleDelete,
  handleView,
}) => (
  <TableRow>
    <TableCell>{index + 1}.</TableCell>
    <TableCell>{moment(date).format("MMM Do YYYY")}</TableCell>
    <TableCell>{title}</TableCell>
    <TableCell>{speaker}</TableCell>
    <TableCell>{reading}</TableCell>
    <TableCell>{message?.slice(0, 50)}</TableCell>
    <TableCell>
      <Button size="small" color="primary" onClick={handleView}>
        View
      </Button>
    </TableCell>
    <TableCell>
      <Button size="small" color="secondary" onClick={handleDelete}>
        Delete
      </Button>{" "}
    </TableCell>
  </TableRow>
)
const ViewSermon = ({ sermon }) => {
  const [isOpen, setOpen] = React.useState(!!sermon.id)
  React.useEffect(() => {
    setOpen(!!sermon.id)
  }, [sermon])

  return (
    <Dialog
      open={isOpen}
      onClose={() => setOpen(false)}
      fullWidth
      maxWidth="md"
    >
      <DialogTitle>{sermon?.title || ""}</DialogTitle>
      <DialogContent dividers>
        {!!sermon?.id !== undefined && <Sermon {...sermon} />}
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setOpen(false)}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}
