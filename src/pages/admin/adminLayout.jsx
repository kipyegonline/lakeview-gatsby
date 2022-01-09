import React from "react"
import axios from "axios"
import { Link, navigate } from "gatsby"
import ArrowIcon from "@material-ui/icons/ArrowRight"
import {
  Grid,
  List,
  ListItem,
  Typography,
  TextField,
  ListItemIcon,
  CircularProgress,
  Box,
} from "@material-ui/core"
import Layout from "../../components/layout"
import Admin from "./index"
import { Pagination, PaginationItem } from "@material-ui/lab"

export default function AdminLayout({ children }) {
  const [isLoggedIn, setLoggedIn] = React.useState(undefined)
  const [user, setUser] = React.useState({})
  const [visits, setVisit] = React.useState({})
  const activeStyle = { color: "red" }
  const handleLogOut = () => {
    localStorage.removeItem("local-user-token")
    window.location.pathname = "/admin/"
  }
  // fetch user statistics
  const fetchStats = async () => {
    try {
      const { data } = await axios.get("../../server/sermon.php?webstats=true")
      if ("month" in data) setVisit(data)
    } catch (error) {}
  }
  React.useEffect(() => {
    let luser = JSON.parse(localStorage.getItem("local-user-token"))

    if (luser !== null) {
      setLoggedIn(true)
    } else {
      setLoggedIn(false)
      navigate("/admin")
    }
  }, [user?.altId])
  React.useEffect(() => {
    if (visits.month === undefined) fetchStats()
  }, [visits?.month])
  const spinner = (
    <Box className="p-4 mx-auto my-4">
      <Typography className="text-center">
        <CircularProgress color="primary" fontSize="2rem" />
      </Typography>
    </Box>
  )
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
          md={3}
          lg={3}
          style={{
            background: "purple",
            color: "white",
            margin: "20,0",
            padding: 16,
          }}
        >
          <Typography className="font-weight-bold p-2 alert alert-info">
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
          <ListItem divider button color="primary" className="bg-red-500 p-2">
            <div>
              <Typography>Website Visits</Typography>
              <p>Today :{visits?.today}</p>
              <p>This week:{visits?.week}</p>
              <p>This month :{visits?.month}</p>
              <p>
                {new Date().getFullYear()} :{visits?.month}
              </p>
            </div>
          </ListItem>
        </Grid>
        <Grid item xs={12} md={9} lg={9}>
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
  return isLoggedIn ? admin : isLoggedIn === undefined ? spinner : <Admin />
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
