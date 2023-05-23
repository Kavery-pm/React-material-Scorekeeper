import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useRef } from "react";
import Scoreboard from "../ScoreBoard/Scoreboard";
import { useState } from "react";
const ScoreKeeper = () => {
const numberOfPlayers = useRef('')
const [generateScoreBoard, setgenerateScoreBoard] = useState(false);
const generatePlayerBoard =()=>{
    console.log(numberOfPlayers.current.value);
    setgenerateScoreBoard(true);
}
  return (
    <Box
      component="form"
      sx={{
        border: "1px solid black",
        margin: "20px 20px",
        height: "100px",
        backgroundColor: "#CCE5FF",
        
        p: "20px",
      }}
    >
      <TextField
        id="outlined"
        label="Enter the number of players"
        variant="outlined"
        inputRef={numberOfPlayers}
     
        sx={{ width: "50ch", color: "black",m:'10px',justifyContent:'center' }}
      />
      <Button variant="contained" onClick={generatePlayerBoard}>Generate Score Board</Button>
      <div>
        {
            generateScoreBoard &&  <Scoreboard playerNumbers={numberOfPlayers.current.value}/>
        }
       
      </div>
    </Box>
  
  );
};
export default ScoreKeeper;
