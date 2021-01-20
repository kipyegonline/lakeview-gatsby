import React from "react"
import { Link } from "gatsby"
import { Grid, List, ListItem, Typography } from "@material-ui/core"
import Layout from "../../components/layout"

export default function AdminLayout({ children }) {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={2}
          lg={2}
          style={{ background: "red", margin: "20,0", padding: 16 }}
        >
          <Typography>Admin Area</Typography>
          <List>
            <ListItem>
              <Link to="/admin/add-sermon">Add Sermon</Link>
            </ListItem>
            <ListItem>
              <Link to="/admin/">Add Event</Link>
            </ListItem>
            <ListItem>
              <Link to="/admin/add-fasts">Add Message from pastor</Link>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={10} lg={10}>
          {children}
        </Grid>
      </Grid>
    </Layout>
  )
}
