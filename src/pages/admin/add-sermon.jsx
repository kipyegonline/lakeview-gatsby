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
  const [mainSermon, setSermon] = React.useState([])
  const form = React.useRef(null)

  const style = { width: "100%" }
  const handleMessage = () => {
    const message = smessage.value.trim()
    if (message) {
      setSermon([...mainSermon, message])
      resetMessage()
    }
  }
  const handleSermon = () => {
    if (window.confirm("Clear sermon?")) {
      setSermon([])
    }
  }

  const handleSubmit = e => {
    e.preventDefault()

    const { value: title } = stitle
    const { value: speaker } = sspeaker
    const { value: theme } = stheme
    const { value: reading } = sreading
    const { value: message } = smessage
    const { value: date } = sdate

    if (!date.trim()) {
      setError("Kindly select the date of the sermon")
      setTimeout(() => setError(""), 3000)
    } else if (!title.trim()) {
      setError("Enter the title of the sermon")
      setTimeout(() => setError(""), 3000)
    } else if (!speaker.trim()) {
      setError("Enter the speaker of the sermon")
      setTimeout(() => setError(""), 3000)
    } else if (!mainSermon.length) {
      setError("Enter message of the sermon")
      setTimeout(() => setError(""), 3000)
    } else if (
      date.length > 4 &&
      mainSermon.length > 0 &&
      title.length > 3 &&
      speaker.length > 5
    ) {
      setError("")
      //send to server sideeee
      setSpinner(true)

      axios
        .post("../../server/sermon.php?addsermon=true", {
          date,
          title,
          speaker,
          theme,
          reading,
          message: mainSermon.join("*"),
          altId: v4(),
        })
        .then(res => {
          setSpinner(false)
          const { data } = res
          if (data.status === 200) {
            setSuccess(data.msg)

            setTimeout(() => {
              setSuccess("")
              resetTitle()
              resetSPeaker()
              resetTheme()
              resetDate()
              resetMessage()
              resetReading()
              setSermon([])
            }, 3000)
          } else {
            throw new Error(res.msg)
          }
        })
        .catch(error => {
          console.log(error, "err")
          error.message
            ? setError(error.message)
            : setError(
                "Error adding sermon. check internet connection and try again."
              )
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
        className="p-2 "
      >
        <Grid xs={12} md={6} lg={6} item>
          <form
            onSubmit={handleSubmit}
            style={{
              maxWidth: 600,
              padding: 16,
              width: "100%",
              margin: ".25rem auto",
            }}
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
                label: "Enter sermon theme (optional)",
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
                label: "Copy-paste the  paragraphs of the message",
                style,
                multiline: true,
                rows: 5,
                variant: "filled",
                id: "sermonMessage",
              }}
            />
            <Button
              color="secondary"
              variant="outlined"
              onClick={handleMessage}
            >
              Add paragraph
            </Button>
            {!!mainSermon.length && (
              <FormHelperText>
                {mainSermon.length} paragraph(s) added
              </FormHelperText>
            )}
            <Box className="p-1">
              {!!errmsg && <FormHelperText error>{errmsg}</FormHelperText>}
              {!!success && (
                <Typography className="alert alert-success">
                  {success}
                </Typography>
              )}
            </Box>
            {spinner && (
              <Box className="text-center mx-auto p-2 m-2">
                <CircularProgress color="primary" size="3rem" />
              </Box>
            )}
            {!!mainSermon.length && (
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={spinner}
                style={style}
              >
                Publish Sermon
              </Button>
            )}
            <Divider />
          </form>
        </Grid>
        <Grid xs={12} md={6} lg={6} item>
          <Box className="p-2">
            {!!mainSermon.length && (
              <Typography variant="h6">Sermon message Preview</Typography>
            )}
            {mainSermon.map((sermon, i) => (
              <Typography
                key={i}
                variant="subtitle2"
                style={{ textIndent: 15, fontWeight: "normal" }}
              >
                {sermon}
              </Typography>
            ))}
            {!!mainSermon.length && (
              <Button
                color="secondary"
                variant="contained"
                size="small"
                className="mt-2"
                onClick={handleSermon}
              >
                Clear Sermon
              </Button>
            )}
          </Box>
        </Grid>
      </Grid>
    </AdminLayout>
  )
}
