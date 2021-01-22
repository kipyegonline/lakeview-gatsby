import React from "react"
import { Link } from "gatsby"
import ArrowIcon from "@material-ui/icons/ArrowRight"
import {
  Grid,
  List,
  ListItem,
  Typography,
  TextField,
  ListItemIcon,
} from "@material-ui/core"
import Layout from "../../components/layout"

export default function AdminLayout({ children }) {
  return (
    <Layout>
      <Grid
        container
        spacing={2}
        className="my-2"
        justify="flex-start"
        alignItems="space-evenly"
      >
        <Grid
          item
          xs={12}
          md={2}
          lg={2}
          style={{
            background: "purple",
            color: "white",
            margin: "20,0",
            padding: 16,
          }}
        >
          <Typography align="center" className="font-weight-bold">
            Admin Area
          </Typography>
          <List alignItems="flex-start">
            <ListItem divider>
              <ListItemIcon>
                <ArrowIcon />
              </ListItemIcon>
              <Link to="/admin/add-sermon" className="nav-ad">
                Add Sermon
              </Link>
            </ListItem>
            <ListItem divider>
              <ListItemIcon>
                <ArrowIcon />
              </ListItemIcon>
              <Link to="/admin/add-event" className="nav-ad">
                Add Event
              </Link>
            </ListItem>
            <ListItem divider>
              <ListItemIcon>
                <ArrowIcon />
              </ListItemIcon>
              <Link to="/admin/add-fasts" className="nav-ad">
                Add Message from pastor
              </Link>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={10} lg={10}>
          {children}
        </Grid>
      </Grid>
      <style jsx>{`
        .nav-ad {
          text-decoration: none;
          color: inherit;
          cursor: pointer;
        }
      `}</style>
    </Layout>
  )
}

export const useInput = initialValue => {
  const [value, setValue] = React.useState(initialValue)

  return [
    { value, onChange: e => setValue(e.target.value) },

    () => setValue(initialValue),
  ]
}
export const UseTextField = ({ props }) => {
  return <TextField {...props} fullWidth className="my-2" />
}
