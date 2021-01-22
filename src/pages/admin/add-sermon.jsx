import React from "react"
import axios from "axios"
import { v4 } from "uuid"
import {
  Button,
  Grid,
  Typography,
  Divider,
  FormHelperText,
  Box,
  CircularProgress,
} from "@material-ui/core"
import AdminLayout, { useInput, UseTextField } from "./adminLayout"

export default function AddSermon() {
  const [sdate, resetDate] = useInput("")
  const [stitle, resetTitle] = useInput("")
  const [sspeaker, resetSPeaker] = useInput("")
  const [stheme, resetTheme] = useInput("")
  const [sreading, resetReading] = useInput("")
  const [smessage, resetMessage] = useInput("")
  const [errmsg, setError] = React.useState("")
  const [success, setSuccess] = React.useState("")
  const [spinner, setSpinner] = React.useState(false)
  const form = React.useRef(null)

  const style = { width: "100%" }

  const handleSubmit = e => {
    e.preventDefault()

    const { value: title } = stitle
    const { value: speaker } = sspeaker
    const { value: theme } = stheme
    const { value: reading } = sreading
    const { value: message } = smessage
    const { value: date } = sdate
    console.log(date, title, speaker, theme, reading, message)
    if (!date.trim()) {
      setError("Kindly select the date of the sermon")
      setTimeout(() => setError(""), 3000)
    } else if (!title.trim()) {
      setError("Enter the title of the sermon")
      setTimeout(() => setError(""), 3000)
    } else if (!speaker.trim()) {
      setError("Enter the speaker of the sermon")
      setTimeout(() => setError(""), 3000)
    } else if (!message.trim()) {
      setError("Enter message of the sermon")
      setTimeout(() => setError(""), 3000)
    } else if (
      date.length > 4 &&
      message.length > 5 &&
      title.length > 3 &&
      speaker.length > 5
    ) {
      setError("")
      //send to server side
      setSpinner(true)
      axios
        .post("../../server/sermon.php?addsermon=true", {
          date,
          title,
          speaker,
          theme,
          reading,
          message,
          altId: v4(),
        })
        .then(res => {
          setSpinner(false)
          const { data } = res
          if (data.status === 200) {
            setSuccess(res.msg)
            resetTitle()
            resetSPeaker()
            resetTheme()
            resetDate()
            resetMessage()
            resetReading()
            setTimeout(() => setSuccess(""), 3000)
          } else {
            throw new Error(res.msg)
          }
        })
        .catch(error => {
          console.log(error, "err")
          setError(error.message)
        })
        .finally(() => {
          setSpinner(false)
          setTimeout(() => setError(""), 3000)
        })
    } else {
      setError("Ensure all fields have details")
      setTimeout(() => setError(""), 3000)
    }
  }
  return (
    <AdminLayout>
      <Grid
        container
        spacing={2}
        justify="space-between"
        alignItems="flex-start"
        className="p-4 "
      >
        <Grid>
          <form
            onSubmit={handleSubmit}
            style={{ maxWidth: 400, padding: 16, width: "100%" }}
            ref={form}
          >
            <Typography variant="h5" align="center">
              Add sermon details below.
            </Typography>
            <UseTextField
              props={{
                ...sdate,
                type: "date",
                helperText: !!!sdate.value ? "Enter sermon date" : "",
                error: !!!sdate.value,
                variant: "filled",
                id: "date",
              }}
            />
            <UseTextField
              props={{
                ...stitle,
                label: "Enter sermon title",
                style,
                variant: "outlined",
                id: "sermonTitle",
              }}
            />

            <UseTextField
              props={{
                ...sspeaker,
                label: "Enter sermon speaker",
                style,
                variant: "outlined",
                id: "sermonspeaker",
              }}
            />
            <UseTextField
              props={{
                ...stheme,
                label: "Enter sermon theme",
                style,
                variant: "outlined",
                id: "sermonTheme",
              }}
            />
            <UseTextField
              props={{
                ...sreading,
                label: "Enter sermon reading",
                style,
                variant: "outlined",
                id: "sermonReading",
              }}
            />

            <UseTextField
              props={{
                ...smessage,
                label: "Enter message",
                style,
                multiline: true,
                rows: 5,
                variant: "filled",
                id: "sermonMessage",
              }}
            />
            <Box className="p-1">
              {errmsg && <FormHelperText error>{errmsg}</FormHelperText>}
              {success && (
                <Typography className="text-success">{success}</Typography>
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
              disabled={spinner}
              style={style}
            >
              Add Sermon
            </Button>
          </form>
          <Divider />
        </Grid>
        <Grid item></Grid>
      </Grid>
    </AdminLayout>
  )
}
