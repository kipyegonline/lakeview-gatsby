import React from "react"
import axios from "axios"
import { DatePicker, Space } from "antd"
import moment from "moment"
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

/* disable eslint */
export default function Events() {
  const [events, setEvents] = React.useState([])
  const [event, setEvent] = React.useState({})
  const [spinner, setSpinner] = React.useState(false)
  const [loaded, setLoaded] = React.useState("")
  const fetchEvents = async () => {
    setSpinner(true)
    try {
      const { data } = await axios.get(
        "../../server/sermon.php?fetchevents=true"
      )
      if (Array.isArray(data)) {
        setTimeout(() => {
          setSpinner(false)
          setEvents(data)
        }, 2000)
      } else {
        throw new Error(
          "There are no events at the moment. add events on the tab"
        )
      }
    } catch (error) {
      setSpinner(false)
      //setEvents(pep)
      setLoaded(error.message)
    }
  }
  const deleteEvent = id => {
    if (window.confirm("Delete event?")) {
      fetch(`../../server/sermon.php?deleteEvent=true&eventId=${id}`)
        .then(res => res.json())
        .then(data => {
          setEvents(events.filter(event => event.id !== id))
        })
        .catch(error => console.log(error.message))
    }
  }

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
        {loaded ? loaded : "Error events"}
      </Typography>
    </div>
  )

  return (
    <AdminLayout>
      <Box>
        <Typography align="center" variant="h6">
          Events ({events?.length})
        </Typography>

        {!!events.length ? (
          <EventsTable events={events} deleteEvent={deleteEvent} />
        ) : spinner ? (
          Spinner
        ) : (
          ErrorMsg
        )}
      </Box>
    </AdminLayout>
  )
}

const EventsTable = ({ events, deleteEvent }) => {
  const [current, setCurrent] = React.useState(0)

  const perpage = events.length > 10 ? 10 : events.length
  const start = current * perpage,
    end = current * perpage + perpage
  const pages = Math.ceil(events.length / perpage)
  const handleChange = (e, p) => {
    setCurrent(p - 1)
  }

  return (
    <TableContainer>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Event</TableCell>
            <TableCell>Details</TableCell>
            <TableCell>Venue</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {events
            .slice(start, end)

            .map((event, index) => (
              <EventT
                key={event.id}
                {...event}
                index={start + index}
                handleDelete={() => deleteEvent(event.id)}
              />
            ))}
        </TableBody>
      </Table>
      {events.length > 10 && (
        <PaginationMaker
          count={pages}
          className="my-2 p-2"
          page={current + 1}
          handleChange={handleChange}
          defaultPage={current + 1}
        />
      )}
    </TableContainer>
  )
}

const EventT = ({
  index,
  date,
  event,
  details,
  venue,
  handleDelete = f => f,
}) => (
  <TableRow>
    <TableCell>{index + 1}.</TableCell>
    <TableCell>{moment(date).format("MMM do YYYY")}</TableCell>
    <TableCell>{event}</TableCell>
    <TableCell>{details}</TableCell>
    <TableCell>{venue}</TableCell>

    <TableCell>
      <Button size="small" color="secondary" onClick={handleDelete}>
        Delete
      </Button>{" "}
    </TableCell>
  </TableRow>
)
