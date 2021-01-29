import React from "react"
import axios from "axios"
import { v4 } from "uuid"
import DatePicker from "react-datepicker"
import {
  Button,
  Grid,
  TextField,
  Typography,
  Box,
  FormHelperText,
  CircularProgress,
} from "@material-ui/core"
import AddIcon from "@material-ui/icons/Add"
import AdminLayout, { useInput, UseTextField } from "./adminLayout"

export default function AddEvent() {
  const [eventName, resetEvent] = useInput("")
  const [eventDate, resetEventDate] = useInput("")
  const [eventVenue, resetVenue] = useInput("")
  const [eventDetails, resetDetails] = useInput("")
  const [errmsg, setError] = React.useState("")
  const [success, setSuccess] = React.useState("")
  const [spinner, setSpinner] = React.useState(false)

  const style = { width: "100%" }
  const handleSubmit = e => {
    e.preventDefault()
    const { value: event } = eventName
    const { value: date } = eventDate
    const { value: venue } = eventVenue
    const { value: details } = eventDetails
    if (!event.trim()) {
      setError("Kindly add event name")
      setTimeout(() => setError(""), 3000)
    } else if (new Date(date) < new Date() || !date.trim()) {
      new Date(date) < new Date()
        ? setError("Kindly select a date in future")
        : setError("Kindly select the date of the event")
      setTimeout(() => setError(""), 3000)
    } else if (!details.trim()) {
      setError("Kindly enter event details")
      setTimeout(() => setError(""), 3000)
    } else if (event.length > 3 && date.length > 4 && details.length > 5) {
      console.log(event, details, date, venue)
      setSpinner(true)
      axios
        .post("../../server/sermon.php?addevent=true", {
          event,
          details,
          date,
          venue,
          altId: v4(),
        })
        .then(res => {
          const { data } = res
          if (data.status === 200) {
            setSuccess(data.msg)
            resetEventDate()
            resetEvent()
            resetVenue()
            resetDetails()
            setTimeout(() => setSuccess(""), 3000)
          } else {
            throw new Error(res.msg)
          }
        })
        .catch(error => setError(error.message))
        .finally(() => {
          setSpinner(false)
          setTimeout(() => setError(""), 3000)
        })
    } else {
      setError("Kindly add information to the input fields")
      setTimeout(() => setError(""), 3000)
    }
  }
  return (
    <AdminLayout>
      <Grid
        container
        spacing={2}
        justify="flex-start"
        alignItems="flex-start"
        className="p-2 "
      >
        <Grid item>
          <form style={{ maxWidth: 500 }} onSubmit={handleSubmit}>
            <Typography variant="h5" align="center">
              Add upcoming event
            </Typography>
            <UseTextField
              props={{
                ...eventName,
                label: "Enter event name",
                variant: "outlined",
              }}
            />
            <UseTextField
              props={{
                ...eventDate,
                type: "datetime-local",
                helperText: "Enter event date/time",
                variant: "outlined",
              }}
            />
            <UseTextField
              props={{
                ...eventVenue,
                label: "Enter event venue",
                variant: "outlined",
              }}
            />
            <UseTextField
              props={{
                ...eventDetails,
                label: "Enter event details",
                multiline: true,
                variant: "filled",
                rows: 3,
              }}
            />
            <Box className="p-1">
              {!!errmsg && <FormHelperText error>{errmsg}</FormHelperText>}
              {!!success && (
                <Typography className="alert alert-success my-2">
                  {success}
                </Typography>
              )}
            </Box>
            {spinner && (
              <Box className="text-center mx-auto p-2 m-2">
                <CircularProgress color="primary" size="3rem" />
              </Box>
            )}
            <Button
              variant="contained"
              color="primary"
              type="submit"
              style={{ width: "100%" }}
              startIcon={<AddIcon />}
            >
              Add Event
            </Button>
          </form>
        </Grid>
      </Grid>
    </AdminLayout>
  )
}
