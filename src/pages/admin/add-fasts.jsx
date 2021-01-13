import {
  CircularProgress,
  TextField,
  Button,
  FormControl,
  Card,
  Typography,
} from "@material-ui/core"
import React from "react"
import $ from "jquery"
import Layout from "../../components/layout"
export default function AddFasts() {
  const [isReal, setReal] = React.useState(false)
  React.useEffect(() => {
    const email = prompt("Enter email to continue?")
    if (email === "vinnykipx@gmail.com") setReal(true)
  }, [])
  return (
    <div>
      <Layout>
        {isReal ? (
          <Fasts />
        ) : (
          <div className="text-center mx-auto my-3 p-4">
            <CircularProgress color="primary" size="3rem" />
            <p className="alert alert-danger">
              You cannot access this section!
            </p>
          </div>
        )}
      </Layout>
    </div>
  )
}

const Fasts = () => {
  const [fast, setFast] = React.useState({})
  const [spinner, setSpinner] = React.useState(false)
  const form = React.useRef(null)
  const handleChange = e => {
    if (e.target.value) {
      setFast({ ...fast, [e.target.id]: e.target.value })
    }
  }
  const handleSubmit = e => {
    e.preventDefault()
    const { title, date, message, subtitle, verse } = fast
    if (title && date && message && subtitle && verse) {
      setSpinner(true)
      $.ajax({
        url: "../../server/fasting.php?add-fast=true",
        dataType: "json",
        type: "post",
        cache: false,
        data: fast,
      })
        .then(res => {
          setSpinner(false)
          console.log(res, "res")
          setTimeout(() => {
            setFast({})

            form.current.reset()
          }, 3000)
        })
        .catch(error => {
          setSpinner(false)
          console.log("error", error)
        })
    } else {
      alert("Missing values!!!")
    }
  }
  return (
    <Card className="m-4 p-4">
      <form
        style={{ maxWidth: 400, border: "1px solid purple", padding: 16 }}
        className="p-3"
        ref={form}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6" align="center" className="p-2">
          Add fasting information.....
        </Typography>
        <TextField
          type="date"
          style={{ width: "100%" }}
          className=" w-100 my-1"
          id="date"
          helperText="Choose date"
          fullwidth
          onChange={handleChange}
        />
        <TextField
          type="text"
          style={{ width: "100%" }}
          className=" w-100 my-1"
          id="title"
          label="Title"
          fullwidth
          onChange={handleChange}
        />
        <TextField
          type="text"
          style={{ width: "100%" }}
          label="Verse"
          className=" my-1"
          id="verse"
          fullwidth
          onChange={handleChange}
        />
        <FormControl style={{ width: "100%" }}>
          <TextField
            multiline
            rows={4}
            className="  my-1"
            label="Enter sub-title"
            id="subtitle"
            variant="outlined"
            onChange={handleChange}
          />
        </FormControl>

        <TextField
          type="text"
          style={{ width: "100%" }}
          className="my-1"
          label="Enter message"
          multiline
          rows={4}
          id="message"
          variant="filled"
          fullwidth
          onChange={handleChange}
        />
        {spinner && (
          <div className="p-2 m-2 text-center">
            <CircularProgress color="primary" size="3rem" />
          </div>
        )}
        <Button
          variant="contained"
          type="submit"
          color="primary"
          className="w-100 my-3"
          disabled={spinner}
        >
          Add Fast
        </Button>
      </form>
    </Card>
  )
}
