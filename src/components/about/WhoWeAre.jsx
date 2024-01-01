import React from "react"
import {
  Grid,
  Card,
  Paper,
  CardMedia,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core"

import { AboutNav } from "./About"
import church from "../../images/assets/img/backimage.jpg"
import frontchurch from "../../images/assets/img/2022/IMG-20220112-WA0009.jpg"

export const WhoWeAreTab = () => {
  const today = new Date().getDay() % 2 === 0
  return (
    <Grid className="mb-3">
      <Paper>
        <Typography variant="h5" className="p-2 my-2 text-center">
          Lakeview Africa Gospel Church-Section 58,Nakuru.
        </Typography>
        <CardMedia
          src={today ? church : frontchurch}
          component="img"
          height={250}
          className="w-100 "
        />
      </Paper>
      <Grid>
        <Grid>
          <Typography variant="h5" className="text-center">
            Who We are
          </Typography>
          <Typography variant="body1" className="p-2 my-2">
            Lakeview Africa Gospel Church is a christian based church situated
            in Nakuru, a house of prayer for all people, with a mission of
            spreading the gospel of Jesus Christ to all people across Nakuru
            County and beyond. We are part of a large and diverse Africa Gospel
            Church congregation in Kenya.
          </Typography>
        </Grid>
        <Grid>
          <Typography variant="h5" className="text-center">
            Our Mission
          </Typography>
          <Typography variant="body1" className="p-2 my-2">
            To fulfill the Great commandment of the Lord Jesus Christ according
            to the Great Plan.
          </Typography>
          <Typography variant="subtitle1" className="p1">
            {" "}
            Mark 12:30-31; <br /> Mathew 28:19-20; <br /> Acts 1:8
          </Typography>
          <Purpose />
        </Grid>
      </Grid>
    </Grid>
  )
}
//purpose
export const Purpose = () => (
  <Box className="mb-3">
    <Typography variant="h5" className="text-center">
      Our Purpose
    </Typography>
    <List>
      <ListItem dense>
        <ListItemText
          primary="To proclaim the Gospel of Jesus Christ to all who are and who are
               saved."
        />
      </ListItem>
      <ListItem dense>
        <ListItemText
          primary="To nurture the spiritual, physical and mental life of its members
               through preaching the word of God, Prayers, fellowship and
               communion."
        />
      </ListItem>
      <ListItem dense>
        <ListItemText
          primary=" To enable its members to identify, develop and use their
               spiritual gifts to serve both in and out of church."
        />
      </ListItem>
      <ListItem dense>
        <ListItemText
          primary="To witness through word and deed, undertake projects and
               programmes that lessen and free the people from the bondage of
               sin, poverty and disease."
        />
      </ListItem>
    </List>
  </Box>
)
