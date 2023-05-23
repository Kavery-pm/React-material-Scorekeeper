/* eslint-disable react/prop-types */
import { useState } from "react";

const Scoreboard = ({playerNumbers})=>{
    console.log(typeof playerNumbers)
    const [scoreBoard, setscoreBoard] = useState(new Array(+playerNumbers).fill(0));
   
    console.log(new Array(+playerNumbers).fill(0))
return (
    <div>
        <h1>hello</h1>
    </div>
)
}
export default Scoreboard;