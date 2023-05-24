import { Box } from '@mui/material';
import React from 'react';
import notFoundImage from '../assets/notfound.png';

function NotFound() {
  return (
    <Box sx={{
      backgroundColor: 'bg.main',
      width: '100%',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      <img src={notFoundImage} alt="not found" />
    </Box>
  );
}

export default NotFound;
