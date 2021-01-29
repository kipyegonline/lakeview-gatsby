import React from "react"
import {
  Typography,
  List,
  ListItem,
  ListItemIcon,
  Avatar,
  Grid,
  Box,
  CardHeader,
  Card,
  CardMedia,
  ListItemText,
  CircularProgress,
} from "@material-ui/core"
import Facebook from "@material-ui/icons/Facebook"
import YouTube from "@material-ui/icons/YouTube"
import IG from "@material-ui/icons/Instagram"
import Twitter from "@material-ui/icons/Twitter"
import MainSermons from "./mainSermons"
import onlineWorship from "../../images/assets/img/online_worship.jpg"
import { Error } from "@material-ui/icons"
let url =
  "https://www.youtube.com/watch?v=_ZP9z9SgIqg&origin=http://lakeviewagc.net"

const ifremae = `<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`
//autoplay=1
// "&cc_load_policy=1"

const EmbedYouTube = ({ sermons, loaded, month }) => (
  <div className="mx-2">
    <Typography variant="h5" className="text-center p-1 my-2">
      Our Sermons
    </Typography>
    <Grid container alignItems="flex-start" justify="center">
      <Grid item xs={12} sm={12} md={3} lg={3}>
        <Typography variant="h6">Our online platforms</Typography>
        <List>
          <ListItem
            button
            selected
            className="my-2 w-100"
            onClick={() =>
              window.open(
                "https://www.facebook.com/Lakeview-AGC-Nakuru-355976284540480"
              )
            }
          >
            <ListItemIcon>
              <Avatar>
                <Facebook color="primary" size="medium" fontSize="large" />
              </Avatar>
            </ListItemIcon>
            <ListItemText primary="Lakeview AGC" />
          </ListItem>
          <ListItem
            button
            selected
            className="my-2 w-100"
            onClick={() =>
              window.open(
                "https://www.youtube.com/channel/UCVzXXOTTs7PLfh5wjB3KB9g"
              )
            }
          >
            <ListItemIcon>
              <Avatar>
                <YouTube color="secondary" fontSize="large" />
              </Avatar>
            </ListItemIcon>
            <ListItemText primary="Lakeview AGC" />
          </ListItem>
          <ListItem
            button
            selected
            className="my-2 w-100"
            onClick={() => window.open("https://twitter.com/lakeviewagc")}
          >
            <ListItemIcon>
              <Avatar>
                <Twitter color="primary" fontSize="large" />
              </Avatar>
            </ListItemIcon>
            <ListItemText primary="Lakeview AGC" />
          </ListItem>
          <ListItem
            button
            selected
            className="my-2 w-100"
            onClick={() =>
              window.open("https://www.instagram.com/lakeviewagcnakuru/")
            }
          >
            <ListItemIcon>
              <Avatar>
                <IG color="error" fontSize="large" />
              </Avatar>
            </ListItemIcon>
            <ListItemText primary="Lakeview AGC" />
          </ListItem>
        </List>
        <Card>
          <CardMedia image={onlineWorship} component="img" height={300} />
        </Card>
      </Grid>
      <Grid item sm={12} md={9} lg={9} className="my-2 ">
        {sermons.length ? (
          <MainSermons sermons={sermons} month={month} />
        ) : !!loaded ? (
          <Box className="p-4 mx-auto my-auto">
            <Typography align="center">
              {" "}
              <Error color="secondary" className="mr-2" />
              {loaded}
            </Typography>
          </Box>
        ) : (
          <div className=" p-4 mx-auto my-4 text-center">
            <CircularProgress color="primary" size="3rem" />
          </div>
        )}
      </Grid>
    </Grid>
  </div>
)
function resizeMap() {
  let w = document.documentElement.clientWidth
  if (w <= 480) {
    return [300, 450]
  } else if (w <= 768) {
    return [600, 350]
  } else {
    return [w - 500, 450]
  }
}
export default EmbedYouTube
