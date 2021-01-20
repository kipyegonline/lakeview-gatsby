import React from "react"
import { Grid } from "@material-ui/core"
import AdminLayout from "./adminLayout"

export default function AddSermon() {
  return (
    <AdminLayout>
      <Grid
        container
        spacing={2}
        justify="space-between"
        alignItems="flex-start"
      >
        <Grid></Grid>
        <Grid></Grid>
      </Grid>
    </AdminLayout>
  )
}
