// Packages
import React from 'react';
import { useNavigate } from 'react-router';
import { Box, Button, Typography } from '@mui/material';
// Assets and Style
import notFoundImage from '../assets/notfound.png';
import { buttonCss } from '../theme/styles/style';

function NotFound() {
  const navigate = useNavigate();

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
      <img
        src={notFoundImage}
        alt="not found"
        style={{
          mixBlendMode: 'multiply', position: 'fixed', zIndex: 1, opacity: 0.3,
        }}
      />
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2,
      }}
      >
        <Typography variant="h3" color="white">PÁGINA NÃO ENCONTRADA</Typography>
        <Button size="large" variant="contained" sx={buttonCss} onClick={() => navigate(-1)}>Voltar</Button>
      </Box>
    </Box>
  );
}

export default NotFound;
