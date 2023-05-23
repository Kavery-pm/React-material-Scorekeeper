import { useState } from 'react'
import Box from '@mui/material/Box';
import './App.css'
import ScoreKeeper from './ScoreKeeper/Scorekeeper';

function App() {
 

  return (
   <Box sx={{border:'1px solid white',  width: '300', height:'100vh', backgroundColor: '#5A4CDC', opacity: [0.9, 0.8, 0.7]
  }}>
    <h1>ScoreKeeper</h1>
    <ScoreKeeper/>
   </Box>
  )
}

export default App
