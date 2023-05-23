/* eslint-disable react/prop-types */
import { useState } from "react";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { borderRadius } from "@mui/system";
// import { deepOrange} from '@mui/material/colors';
const Scoreboard = ({playerNumbers})=>{
    console.log(typeof playerNumbers)
    const [scoreBoard, setscoreBoard] = useState(new Array(+playerNumbers).fill(0));
   
    console.log(new Array(+playerNumbers).fill(0))
return (
    <>
    {scoreBoard.map((item,idx)=>(

    <Stack direction="horizontal" spacing={1} sx={{marginTop:'30px'}} key={idx}>
    <Chip label={`player${idx}`} size="small"sx={{width:'100px',height:'50px'}} color="success" />
    <Button variant="contained" color="success"sx={{width:'70px',borderRadius:'20px'}} >
+1
</Button>
    </Stack>
)

)
}
</> 
)

}
export default Scoreboard;