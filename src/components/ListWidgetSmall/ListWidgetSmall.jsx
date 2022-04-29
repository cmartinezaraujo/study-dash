import React from 'react';
import "./widgetSmall.css";
import Box from '@mui/material/Box';

export default function ListWidgetSmall(props) {
  return (
    <div className='widget'>
        <Box
        sx={{
        width: 400,
        height: 300,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderRadius: '20px'
      }}
    />
    </div>
  )
}
