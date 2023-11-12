import * as React from 'react';
import { Box } from '@mui/system';
import './SidePannel.css';
// import Button from '@mui/material/Button';

export default function SidePannel() {
  const [open, setOpen] = React.useState(true);
  function handleClick() {
    setOpen(!open);
    console.log(open);
    console.log(`${open ? 30 : 0}%`);
  }
  return (
    // <Box className="SidePannel" component="section"></Box>
    <Box className="Pannel" component="section" sx={{
      width: `${25}%`,
      height: '100%',
      borderRadius: 0,
      bgcolor: '#FFFFFF',
      borderLeft: 3,
      borderColor: '#D3D3D3',
      }}>
      {/* This is a section container */}
      {/* <Button variant="contained" onClick={handleClick}>Close Pannel</Button> */}
    </Box>
  );
}

function SideBar(){
  return (
    <Box className="Pannel" component="section" sx={{
      width: '30%',
      height: '100%',
      borderRadius: 0,
      bgcolor: '#FFFFFF',
      }}>
      This is a section container
    </Box>
  )
}