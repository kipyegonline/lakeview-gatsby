import React from "react"
import { ReactSlider } from "./carousel/Carousel"
import Intro from "./intro/Intro"
import { UpcomingEvents } from "../Home/events/Events"
import { LinearProgress, Typography, Box } from "@material-ui/core"
const Home = ({
  carosel = [],
  events = [],
  churcharea,
  fast = {},
  getDate = f => f,
  fetchEvent = f => f,
  selected,
  loader = false,
}) => (
  <div className="p-2">
    {/*<Carousel carosel={carosel} />*/}
    <div style={{ maxHeight: 403, overflow: "hidden" }}>
      {" "}
      <ReactSlider carousels={carosel} />
    </div>

    <Intro
      churcharea={churcharea}
      fast={fast}
      getDate={getDate}
      selected={selected}
    />
    <div className="my-2 py-2">{loader && <LinearProgress />}</div>

    {!!events.length && (
      <UpcomingEvents events={events} fetchEvent={fetchEvent} />
    )}
    {/*!!!events.length && (
      <Box className="my-2 py-2">
        <Typography classNama="py-4 ">
          No Events found for selected month.{" "}
          <span
            style={{ color: "blue", marginLeft: 5 }}
            onClick={() => fetchEvent(new Date().getMonth() + 1)}
          >
            Reload
          </span>
        </Typography>
      </Box>
    )*/}
  </div>
)
export default Home
