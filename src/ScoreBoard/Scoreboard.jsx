/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { blue } from '@mui/material/colors';
// import { deepOrange} from '@mui/material/colors';
const Scoreboard = ({ playerNumbers }) => {
  const [open, setOpen] = useState(true);
  const winningScore = useRef(5);
 const [winScore, setwinScore] = useState(10);
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
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <TextField
        id="outlined"
        label="Enter winning Score"
        variant="filled"
        value={winScore}
     onChange={(event)=>{setwinScore(event.target.value)}}
        sx={{ width: "50ch", color: "white",m:'20px',justifyContent:'center' }}
      />
      
 <p>Winning score{winScore}</p>
      {scoreBoard.map((item, idx) => (
        <Stack
          direction="horizontal"
          spacing={1}
          sx={{ marginTop: "30px", marginLeft: "20px" }}
          key={idx}
        >
          <div style={{ marginLeft: "80px" }}>
           
            <Chip
              label={`player${idx + 1}`}
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
            {item>=winScore && item!==0 &&
              <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
              sx={{color:'white'}}
            >
              <DialogTitle id="alert-dialog-title">
              CONGRATS
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                 `player {idx+1} is the winner`
                </DialogContentText>
              </DialogContent>
              <DialogActions>
              
                <Button onClick={handleClose} autoFocus>
                 OK
                </Button>
              </DialogActions>
            </Dialog>
            }
          </div>
        </Stack>
      ))}
    </>
  );
};
export default Scoreboard;
