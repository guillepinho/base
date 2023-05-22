// Packages
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import {
  Box, Button, Card, Typography, TextField,
} from '@mui/material';
import { useSnack } from '../../context/snackbarContext';
// Schema
import { schema } from '../../schemas/login';
// Style
import { buttonCss, textfieldCss } from '../../theme/styles/style';
import logo from '../../assets/logo-no-background.svg';

function LoginScreen() {
  const navigate = useNavigate();
  const alert = useSnack();
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { error } = schema.validate(data);
      if (error) throw Error(error);
    } catch (error) {
      const message = error.message.replace('ValidationError: ', '');
      alert.warning(message);
    }
  };

  const inputOnChangeHandler = ({ target }) => {
    const { value, name } = target;
    setData({
      ...data,
      [name]: value,
    });
  };

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
      <form onSubmit={(e) => handleLogin(e)}>
        <Card sx={{
          color: 'text.main',
          padding: '40px',
          display: 'flex',
          gap: '20px',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minWidth: '275px',
          backgroundColor: 'bg.secondary',
        }}
        >
          <img
            src={logo}
            alt="logo"
            width={150}
            style={{
              marginBottom: '10px',
            }}
          />
          <TextField
            size="small"
            name="email"
            label="E-mail"
            sx={textfieldCss}
            onChange={inputOnChangeHandler}
          />
          <TextField
            size="small"
            name="password"
            label="Senha"
            sx={textfieldCss}
            onChange={inputOnChangeHandler}
          />
          <Button
            variant="contained"
            fullWidth
            sx={buttonCss}
            type="submit"
          >
            Acessar
          </Button>
          <Typography
            variant="body2"
            onClick={() => navigate('/create')}
            sx={{
              cursor: 'pointer',
              '&:hover': {
                color: 'focused.main',
              },
            }}
          >
            Criar usuário
          </Typography>
        </Card>
      </form>
    </Box>
  );
}

export default LoginScreen;
