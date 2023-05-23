import { Box } from "@mui/material";
import TextField from '@mui/material/TextField';

const ScoreKeeper = ()=>{
return (
    <Box   component="form" sx={{border:'1px solid black',margin:'20px 20px', height:'100px',backgroundColor:'#CCE5FF',display:'flex',p:'20px'}}>
<TextField id="outlined" label="Enter the number of players" variant="outlined"    sx={{ m: 1, width: '50ch',color:'black' }}/>
    </Box>
)
}
export default ScoreKeeper;