import React from "react"
import {
  Grid,
  Container,
  Typography,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Avatar,
  Paper,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core"

import delo from "../../images/assets/img/pstdelton.jpg"
import jp from "../../images/assets/img/newlcc/jp_psd.jpg"
import rachael from "../../images/assets/img/newlcc/IMG-20200813-WA0000.jpg"
import harry from "../../images/assets/img/newlcc/harry.jpg"
import sam from "../../images/assets/img/newlcc/sam.jpg"
import logoG from "../../images/assets/img/logoG.jpg"

const useStyles = () =>
  makeStyles({
    avatarSize: {
      height: 200,
      width: 200,
    },
  })
const classes = useStyles()
const PStaff = () => {
  return (
    <Container className="p-2 my-2" id="pastoralcenter">
      <Typography variant="h5" className="text-center text-uppercase my-2">
        Pastorate{" "}
      </Typography>

      <Grid container>
        {pastors.map((pastor, i) => (
          <Pastor key={i} {...pastor} />
        ))}
      </Grid>
    </Container>
  )
}

const Pastor = ({ name, title, pic, des }) => (
  <Grid item xs={12} md={4} lg={4} style={{ width: "33%", margin: "1rem 0" }}>
    <Card>
      {pic ? <CardMedia component="img" src={pic} /> : <Avatar />}
      <CardHeader
        title={<Typography variant="h6">{name}</Typography>}
        subheader={<Typography variant="body1">{title}</Typography>}
      />
      <CardContent>
        <Typography>{des}</Typography>
      </CardContent>
    </Card>
  </Grid>
)
export default PStaff

const pastors = [
  {
    name: "Rev. Delton Orgeness",
    title: "Senior pastor",
    pic: delo,
    des: null,
  },
  {
    name: "Pastor John Paul Mugendi",
    title: "Assistant pastor",
    pic: jp,
    des: " Discipleship and Youth Ministry.",
  },
  {
    name: "Pastor Rachel Ngetich",
    title: "pastor",
    pic: rachael,
    des: " Children,Missions, Evangelism and Compassion.",
  },
]