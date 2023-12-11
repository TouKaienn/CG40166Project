import * as React from 'react';
import { Box } from '@mui/system';
import './SidePannel.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormatPaintIcon from '@mui/icons-material/FormatPaint';
import { Button } from '@mui/material';
import { ScubaDivingRounded } from '@mui/icons-material';


// import Button from '@mui/material/Button';

export default function SidePannel() {
  const [content, setContent] = React.useState('lego');
  const [style, setStyle] = React.useState('None');
  const handleContentChange = (event) => {
    setContent(event.target.value);
  };
  const handleStyleChange = (event) => {
    setStyle(event.target.value);
  };
  const showPreview = (event) => {
    console.log(content);
  };


  function load_js()
   {
      var head= document.getElementsByTagName('head')[0];
      var script= document.createElement('script');
      script.src= 'index.js';
      head.appendChild(script);
   }

  function handleClick() {
    // alert('You clicked me!');
    // document.getElementById('dirUrl').value = './data/lego_sunflower'
    console.log(content)
    console.log(style)
    var viewspace = document.getElementById('viewspace')
    var base_src = "http://localhost:3000/index copy.html?dir="
    if (style == 'None') {
      base_src += './data/'+content
    }
    else {
      base_src += './data/'+content+'_'+style
      var Preview = document.getElementById('Preview')
      Preview.setAttribute('src','./data/styles/'+style+'.jpg')
    }
    viewspace.setAttribute('src',base_src)
    // document.getElementById('dirUrl').setAttribute('value','./data/lego_sunflower')
    // load_js('index.js')
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
      <FormControl fullWidth sx={{width:`${75}%`,position:'absolute',top:20,left:`${12.5}%`}}>
      <InputLabel id="Content-label">Content</InputLabel>
        <Select
          labelId="Content-label"
          id="Content"
          value={content}
          label="Content"
          onChange={handleContentChange}>
          
          <MenuItem value={'lego'} onMouseOver={showPreview}>Lego</MenuItem>
          <MenuItem value={'vortex'} onMouseOver={showPreview}>Vortex</MenuItem>
        </Select>
    </FormControl>

    <FormControl fullWidth sx={{width:`${75}%`,position:'absolute',top:100,left:`${12.5}%`}}>
      <InputLabel id="Style-label">Style</InputLabel>
        <Select
          labelId="Style-label"
          id="Style"
          value={style}
          label="Style"
          onChange={handleStyleChange}>

          <MenuItem value={'None'} onMouseOver={showPreview}>None</MenuItem>
          <MenuItem value={'starry'} onMouseOver={showPreview}>starry</MenuItem>
          <MenuItem value={'sunflower'} onMouseOver={showPreview}>sunflower</MenuItem>
        </Select>
    </FormControl>

    <Button variant="contained" startIcon={<FormatPaintIcon></FormatPaintIcon>} onClick={handleClick} sx={{width:`${75}%`,height:`${5}%`,position:'absolute',top:180,left:`${12.5}%`}}>Blend/Generate</Button>

    <Box
    id="Preview"
    component="img"
    sx={{width:`${90}%`,position:'absolute',top:300,left:`${5}%`}}
    alt="Style Preview"
    src="./data/styles/None.jpg"
    />

    </Box>
  );
}