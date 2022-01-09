/*
image size
large 843 X 403, medium: 674 *300, small; 300 X 100*/
import churcharea from "../images/assets/img/churcharea.jpg"
import slide1 from "../images/assets/img/2022/slide1_lg.jpg"
import slide1md from "../images/assets/img/2022/slide1_md.jpg"
import slide1sm from "../images/assets/img/2022/slide1_sm.jpg"
import slide2 from "../images/assets/img/2022/slide2_lg.jpg"
import slide2md from "../images/assets/img/2022/slide2_lg.jpg"
import slide2sm from "../images/assets/img/2022/slide2_sm.jpg"
import slide3 from "../images/assets/img/2022/slide3_lg.jpg"
import slide3md from "../images/assets/img/2022/slide3_md.jpg"
import slide3sm from "../images/assets/img/2022/slide3_sm.jpg"
import slide4 from "../images/assets/img/2022/slide4_lg.jpg"
import slide4md from "../images/assets/img/2022/slide4_md.jpg"
import slide4sm from "../images/assets/img/2022/slide4_sm.jpg"
import slide5 from "../images/assets/img/2022/slide5_lg.jpg"
import slide5md from "../images/assets/img/2022/slide5_md.jpg"
import slide5sm from "../images/assets/img/2022/slide5_sm.jpg"
import slide6 from "../images/assets/img/2022/slide6_lg.jpg"
import slide6md from "../images/assets/img/2022/slide6_md.jpg"
import slide6sm from "../images/assets/img/2022/slide6_sm.jpg"
import slide7 from "../images/assets/img/2022/slide7_lg.jpg"
import slide7md from "../images/assets/img/2022/slider7_md.jpg"
import slide7sm from "../images/assets/img/2022/slider7_sm.jpg"
import slide8 from "../images/assets/img/2022/slider8_lg.jpg"
import slide9 from "../images/assets/img/2022/slider9_lg.jpg"
import slide10 from "../images/assets/img/2022/slider_10.jpg"

const day = new Date().getDay() % 2 === 0

export const smallSlides = [
  day ? churcharea : slide8,
  day ? slide2 : slide5,
  day ? slide6 : slide7,
  day ? slide9 : slide10,
]

export const carosel = [
  {
    pic: slide1,
    picMd: slide1md,
    picSm: slide1sm,
    caption: "Theme of the Year: 1 John 2:3",
    active: true,
  },
  {
    pic: slide6,
    picMd: slide6md,
    picSm: slide6sm,
    caption: "Thanks Giving  Sunday Service",
    active: false,
  },
  {
    pic: slide2,
    picMd: slide2md,
    picSm: slide2sm,
    caption: "Lakeview AGC Ladies-Thanks Giving",
    active: false,
  },

  {
    pic: slide3,
    picMd: slide3md,
    picSm: slide3sm,
    caption: "Lakeview AGC Youths",
    active: false,
  },
  {
    pic: slide4,
    picMd: slide4md,
    picSm: slide4sm,
    caption: "Lakeview AGC Men",
    active: false,
  },
  {
    pic: slide7,
    picMd: slide7md,
    picSm: slide7sm,
    caption: "Fellowship Sunday",
    active: false,
  },
]
