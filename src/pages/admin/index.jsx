import React from "react"
import {
  Box,
  FormControl,
  Input,
  InputLabel,
  Paper,
  Typography,
  Button,
} from "@material-ui/core"
import Layout from "../../components/layout"

const style = { display: "block", width: "100%" }
export default function Index() {
  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <Layout>
      <Paper className="mx-auto my-auto p-4" style={{ maxWidth: 500 }}>
        <form
          onSubmit={handleSubmit}
          style={{ maxWidth: 400, border: "1px solid yellow" }}
          className="p-4"
        >
          <Typography>Admin section.....</Typography>
          <FormControl style={style}>
            <InputLabel>Enter email address....</InputLabel>
            <Input type="email" fullWidth />
          </FormControl>
          <FormControl style={style}>
            <InputLabel>Enter password....</InputLabel>
            <Input type="password" fullWidth />
          </FormControl>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            className="mt-2 "
            style={style}
          >
            Log in
          </Button>
        </form>
      </Paper>
    </Layout>
  )
}
