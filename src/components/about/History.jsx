import React from "react"
import $ from "jquery"
import {
  Grid,
  Card,
  CardMedia,
  Box,
  Typography,
  Paper,
} from "@material-ui/core"
import Church from "../../images/assets/img/churcharea.jpg"
const History = () => {
  function slideToggle(e) {
    $("#brief").slideToggle(2000)
  }
  return (
    <Grid className="mb-5">
      <Box>
        <Typography variant="h5" className="text-center my-2 p-2">
          Brief History of Lakeview AGC
        </Typography>
        <CardMedia
          src={Church}
          title="Church area"
          component="img"
          height={200}
        />
      </Box>
      <Paper>
        <Typography variant="body1" className="pb-2 px-1 pt-2 mx-3 my-2">
          <strong>Lakeview Africa Gospel Church</strong> has been in existence
          for the last{"  "}
          {new Date().getFullYear() - 1978} years with the sole purpose of
          sharing the light of the gospel of the Lord Jesus in Nakuru and
          beyond. It is one of the 1,600 congregations of Africa Gospel Church
          in Kenya
        </Typography>
        <Typography variant="body1" className="pb-2 px-1 mx-2 my-2">
          Its first service was conducted on <strong>March 26th, 1978</strong>{" "}
          in a rented room in Afraha Social Hall, it was then called Nakuru Town
          Church. The church eventually relocated to its own new sanctuary in
          Section 58 facing Lake Nakuru hence christened “Lakeview Africa Gospel
          Church”. The small sanctuary came to service on{" "}
          <strong> 21st July, 1985, </strong> unveiled by President Daniel Arap
          Moi (Then second president of the Republic of Kenya). The ever
          expanding congregation necessitated for expansion of the church
          accommodation space; the church eventually established a bigger
          sanctuary which was once again launched by President Daniel Arap Moi
          on <strong>6th October, 2002.</strong>
        </Typography>
        <Typography variant="body1" className="pb-2 px-1 mx-2 my-2">
          Planted by Isaac and Susana Saoshiro missionaries with IGM (Immanuel
          General Mission) from Japan, Lakeview AGC is now run fully by local
          leadership thus giving its members a sense of ownership of the church.
          The Local church council (LCC) governs the policies and strategies
          that upholds the church’s vision and mission.
        </Typography>
        <Typography variant="body1" className="pb-2 px-1 mx-2 my-2">
          To date, Lakeview Church has grown tremendously to what it is today,
          tailored to meet all your family and individual needs in a holistic
          way. The church has also established Lakeview Academy, a Christian
          based academic institution, offering quality education for
          kindergarten students and promoting God fearing generation imparted
          with spiritual values.
        </Typography>
        <Typography variant="body1" className="pb-2 mb-3 px-1 mx-2 my-2">
          {" "}
          The church continues to evangelize the gospel of Jesus Christ all over
          Nakuru County both as a whole church and outside through our devoted
          missions and evangelism ministries. The church has ministries
          committed to spreading the gospel through fellowship and
          companionship.
        </Typography>
      </Paper>
    </Grid>
  )
}
export default History
