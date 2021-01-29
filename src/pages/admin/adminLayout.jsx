import React from "react"
import { Link, navigate } from "gatsby"
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
import Admin from "./index"
import { Pagination, PaginationItem } from "@material-ui/lab"

export default function AdminLayout({ children }) {
  const [isLoggedIn, setLoggedIn] = React.useState(false)
  const [user, setUser] = React.useState({})
  const activeStyle = { color: "red" }
  const handleLogOut = () => {
    localStorage.removeItem("local-user-token")
    window.location.pathname = "/admin/"
  }
  React.useEffect(() => {
    let luser = JSON.parse(localStorage.getItem("local-user-token"))
    luser?.altId !== undefined ? setLoggedIn(true) : setLoggedIn(false)
    setUser(luser)
  }, [])
  const admin = (
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
          <Typography className="font-weight-bold">
            Admin Area({user?.username})
          </Typography>
          <List alignItems="flex-start">
            <ListItem divider>
              <ListItemIcon>
                <ArrowIcon />
              </ListItemIcon>
              <Link
                activeStyle={activeStyle}
                to="/admin/add-sermon"
                className="nav-ad"
              >
                Add Sermon
              </Link>
            </ListItem>
            <ListItem divider>
              <ListItemIcon>
                <ArrowIcon />
              </ListItemIcon>
              <Link
                activeStyle={activeStyle}
                to="/admin/add-event"
                className="nav-ad"
              >
                Add Event
              </Link>
            </ListItem>
            <ListItem divider>
              <ListItemIcon>
                <ArrowIcon />
              </ListItemIcon>
              <Link
                activeStyle={activeStyle}
                to="/admin/sermons"
                className="nav-ad"
              >
                View Sermons
              </Link>
            </ListItem>

            <ListItem divider>
              <ListItemIcon>
                <ArrowIcon />
              </ListItemIcon>
              <Link
                activeStyle={activeStyle}
                to="/admin/events"
                className="nav-ad"
              >
                View events
              </Link>
            </ListItem>
            <ListItem divider>
              <ListItemIcon>
                <ArrowIcon />
              </ListItemIcon>
              <Link
                activeStyle={activeStyle}
                to="/admin/add-fasts"
                className="nav-ad"
              >
                Add prayer and fasting
              </Link>
            </ListItem>
            <ListItem divider button color="primary">
              <ListItemIcon>
                <ArrowIcon />
              </ListItemIcon>
              <Link to="/admin/" className="nav-ad" onClick={handleLogOut}>
                Log out
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
        .nav-ad:hover,
        .nav-ad:active {
          color: inherit;
        }
      `}</style>
    </Layout>
  )
  return isLoggedIn ? admin : <Admin />
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

export const PaginationMaker = ({ count, page, defaultPage, handleChange }) => (
  <Pagination
    color="primary"
    onChange={handleChange}
    count={count}
    page={page}
    defaultPage={defaultPage}
  />
)
