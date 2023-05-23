import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
const ScoreKeeper = () => {
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
        sx={{ width: "50ch", color: "black",m:'10px',justifyContent:'center' }}
      />
      <Button variant="contained">Generate Score Board</Button>
    </Box>
  );
};
export default ScoreKeeper;
