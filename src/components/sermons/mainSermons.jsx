import React from "react"
import { DatePicker } from "antd"
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  ListItemIcon,
  ListItem,
  List,
  Typography,
  ButtonGroup,
  Button,
} from "@material-ui/core"

import moment from "moment"

function MainSermons({ sermons, month }) {
  const { curmonth, setMonth } = month
  return (
    <Box>
      <MonthPicker curmonth={curmonth} setMonth={setMonth} />
      {sermons.slice(0, 4).map(sermon => (
        <Sermon key={sermon.id} {...sermon} />
      ))}

      <MonthPicker curmonth={curmonth} setMonth={setMonth} />
    </Box>
  )
}
export default MainSermons

export const Sermon = ({
  title,
  id,
  date,
  reading,
  speaker,
  theme,
  message,
}) => (
  <Card>
    <CardHeader
      title={<Typography variant="h5">{title}</Typography>}
      subheader={
        <Typography variant="subtitle2">
          {moment(date).format("MMMM Do YYYY")}
        </Typography>
      }
    />

    <CardContent className="mx-2 px-2">
      <Typography variant="subtitle1">Speaker: {speaker}</Typography>
      <Typography variant="subtitle1">Readings: {reading}</Typography>
      {message.split("*").map((msg, i) => (
        <Typography
          key={i}
          style={{ textIndent: 15, fontWeight: "normal" }}
          variant="body1"
        >
          {msg}
        </Typography>
      ))}
    </CardContent>
  </Card>
)
const MonthPicker = ({ setMonth, curmonth }) => {
  const months = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]
  return (
    <ButtonGroup
      style={{ display: "flex", flexWrap: "wrap", margin: "10px 0" }}
    >
      {[...Array(12)].map((item, i) => (
        <Button
          key={i}
          className="mx-1 my-1"
          variant="contained"
          color={i === curmonth ? "secondary" : "primary"}
          disabled={i > new Date().getMonth()}
          onClick={() => setMonth(i)}
        >
          {months[i]}
        </Button>
      ))}
    </ButtonGroup>
  )
}
