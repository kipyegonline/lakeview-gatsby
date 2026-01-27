import React from "react"
import { ReactSlider } from "./carousel/Carousel"
import Intro from "./intro/Intro"
import { UpcomingEvents } from "../Home/events/Events"
import { LinearProgress } from "@mui/material"
import { calendarEvents } from "./events/events2026"
const Home = ({
  carosel = [],
  images = [],

  churcharea,
  events = [],
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
      <ReactSlider images={images} />
    </div>

    <Intro
      churcharea={churcharea}
      fast={fast}
      getDate={getDate}
      selected={selected}
    />
    <div className="my-2 py-2">{loader && <LinearProgress />}</div>

    {!!calendarEvents.length && <UpcomingEvents events={calendarEvents} />}
  </div>
)
export default Home
