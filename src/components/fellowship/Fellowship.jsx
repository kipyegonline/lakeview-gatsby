import React from "react"
import {
  Table,
  TableContainer,
  TableRow,
  TableHead,
  TableCell,
  Paper,
  Typography,
  Grid,
  Box,
  TableBody,
} from "@material-ui/core"

export default class Fellowship extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      estate: [],
      searched: false,
      search: [],
      keyword: "",
      selected: 0,
      random: "Lakeview AGC",
    }
    this.colors = [
      "primary",
      "secondary",
      "light",
      "warning",
      "danger",
      "success",
      "info",
    ]
    this.chooseBg = this.chooseBg.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleHover = this.handleHover.bind(this)
    this.keyword = React.createRef()
    this.current = 0
  }
  componentDidMount() {
    this.setState({ estate })
  }
  componentWillUnmount() {}
  chooseBg(bg) {
    return bg[Math.floor(Math.random() * bg.length)]
  }

  handleSubmit(e) {
    e.preventDefault()
    const search = capitalize(this.keyword.current.value)
    if (search.trim().length === 0) return
    this.setState({
      searched: true,
      search: estate.filter(state => state.estate.includes(search)),
      keyword: search,
    })
  }

  handleClick() {
    this.setState({ searched: false })
  }

  randomize(arr) {
    if (this.current > arr.length - 1) {
      this.current = 0
    }
    this.setState({ random: arr[this.current].estate })
    this.current++
  }
  handleHover(index) {
    this.setState({ selected: index })
  }

  render() {
    const { estate, selected, searched, search, keyword, random } = this.state

    return (
      <>
        <Grid className="mx-auto mb-1 ">
          <Box className="p-1 mx-auto">
            <Typography variant="h5" className="text-center">
              Home Fellowships and Bible Study
            </Typography>
            <Typography variant="body2" className="p-2">
              {" "}
              Welcome to home fellowship and discipleship, Bible study takes
              place every wednesday from 5.00 pm in various estates within
              Nakuru.
            </Typography>
          </Box>
        </Grid>
        <Grid>
          <Typography className="text-center p-2"> Estate list</Typography>
          <Paper elevation={10}>
            <TableContainer className="table-repsonsive p-4">
              <Table
                className="table table-hover "
                size="small"
                padding="checkbox"
              >
                <TableHead>
                  <TableCell>#</TableCell>
                  <TableCell>Estate</TableCell>
                  <TableCell>Host</TableCell>
                  <TableCell>Contact</TableCell>
                </TableHead>
                <TableBody>
                  {estate.map((est, i) => (
                    <TableList
                      key={i}
                      {...est}
                      selected={selected}
                      handleHover={() => this.handleHover(i)}
                      index={i}
                    />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </>
    )
  }
}

function capitalize(word) {
  let newword = []
  word = word.split(" ")
  for (let i = 0; i < word.length; i++) {
    word[i] = word[i].slice(0, 1).toUpperCase() + word[i].slice(1)
    newword.push(word[i])
  }
  return newword.join(" ")
}

const TableList = ({ estate, leader, phone, selected, index, handleHover }) => (
  <TableRow hover onMouseOver={handleHover} selected={index === selected}>
    <TableCell>{index + 1}</TableCell>
    <TableCell align="left">{estate}</TableCell>
    <TableCell align="left">{leader}</TableCell>
    <TableCell align="left">
      <b>{phone}</b>
    </TableCell>
  </TableRow>
)

const estate = [
  {
    estate: "Abongolola",
    leader: "Margret Komen",
    phone: "0722728391",
  },
  {
    estate: "Freehold/Afraha ",
    leader: "Margret Siele ",
    phone: "0723407650",
  },

  {
    estate: "Kenlands/Shabab",
    leader: "Rachael Ngetich",
    phone: "0721406155",
  },

  {
    estate: "Kabachia (phase i) ",
    leader: "Jennifer Githaiga ",
    phone: "0725171227",
  },
  {
    estate: "Kabachia (phase ii )",
    leader: "Karen Wanderi ",
    phone: "0735186846",
  },

  {
    estate: "Lanet/Pipeline/Stem ",
    leader: "Stella Muluvi",
    phone: "0721391273",
  },
  {
    estate: "London/Milimani Apartments ",
    leader: "Philip Korir",
    phone: "0722601155",
  },
  {
    estate: "Milimani ",
    leader: "Margret Wachira",
    phone: "0722657375",
  },

  {
    estate: " Milimani - Showground",
    leader: "Richard Kalya",
    phone: "0722666953",
  },
  {
    estate: "Naka A",
    leader: "Betty Akala ",
    phone: "0722983240",
  },
  {
    estate: " Naka B ",
    leader: "Lukas Korir ",
    phone: "0722605723",
  },
  {
    estate: "Naka C",
    leader: "Diana Maritim",
    phone: "0723863689",
  },
  {
    estate: " Nakuru Blankets Free Area",
    leader: "Prof. Jackson Kitetu",
    phone: "0721592737",
  },
  {
    estate: "Nakuru High  region",
    leader: "Risper Kiptoo",
    phone: "0721845106",
  },
  {
    estate: "Section 58 (phase i & ii) ",
    leader: "Pst Delton Orgeness",
    phone: "0726907931",
  },
  {
    estate: " Section 58 (phase iii)",
    leader: "Mrs Tagi ",
    phone: "0720601022",
  },
  {
    estate: "St Marys ",
    leader: "Andrew Lusaka ",
    phone: "0722313280",
  },
  {
    estate: "Teachers ",
    leader: " Ann Kemboi ",
    phone: "0722691633",
  },
  {
    estate: "Ufanisi YMCA ",
    leader: "Miriam Tonui ",
    phone: "0721688702",
  },
  {
    estate: "Teachers",
    leader: "John Gathii ",
    phone: "0721297585",
  },
  {
    estate: " Ufanisi YMCA ",
    leader: "Oswald Midamba",
    phone: "0723588703",
  },
  {
    estate: " White House Bismark",
    leader: "",
    phone: "",
  },
  {
    estate: "Young Couples",
    leader: "Albert Mmbasu ",
    phone: "0721986613",
  },
  {
    estate: "Young Professionals",
    leader: "",
    phone: "",
  },
]
