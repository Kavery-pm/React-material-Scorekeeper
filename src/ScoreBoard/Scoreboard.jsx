/* eslint-disable react/prop-types */
import { useState } from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
// import { deepOrange} from '@mui/material/colors';
const Scoreboard = ({ playerNumbers }) => {
  console.log(typeof playerNumbers);
  const [scoreBoard, setscoreBoard] = useState(
    new Array(+playerNumbers).fill(0)
  );
  const incrementScoreHandler = (idx) => {
    setscoreBoard((previousScore) => {
      return previousScore.map((score, index) => {
        if (index === idx) return score + 1;
        else return score;
      });
    });
  };
  console.log(new Array(+playerNumbers).fill(0));
  return (
    <>
      {scoreBoard.map((item, idx) => (
        <Stack
          direction="horizontal"
          spacing={1}
          sx={{ marginTop: "30px", marginLeft: "20px" }}
          key={idx}
        >
          <div style={{ marginLeft: "80px" }}>
            <Chip
              label={`player${idx}`}
              size="small"
              sx={{ width: "100px", height: "50px", marginRight: "20px",backgroundColor:'#000080',color:'white' }}
             
            />
            <Button
              variant="contained"
             
              sx={{ width: "70px", borderRadius: "20px", marginRight: "20px" ,backgroundColor:'#000080'}}
              onClick={incrementScoreHandler.bind(this, idx)}
            >
              +1
            </Button>
            <label>
              Score:<span style={{ fontSize: "20px" }}> &nbsp;{item}</span>
            </label>
          </div>
        </Stack>
      ))}
    </>
  );
};
export default Scoreboard;
