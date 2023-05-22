// Packages
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import {
  Box, Button, Card, TextField, Typography,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import dayjs from 'dayjs';
import { useSnack } from '../../context/snackbarContext';
// Schema
import schema from '../../schemas/createUser';
// Style
import {
  buttonCss, textfieldCss, datefieldCss, noBgButtonCss,
} from '../../theme/styles/style';
import { handleCPF, handlePhoneNumber } from '../../utils/handlers';

function CreateUser() {
  const navigate = useNavigate();
  const alert = useSnack();
  const [data, setData] = useState({
    email: '',
    name: '',
    cpf: '',
    phone: '',
    birthdate: '',
    password: '',
    confirmPassword: '',
  });

  const handleCreation = async (e) => {
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

  const dataOnChangeHandler = (date) => {
    setData({
      ...data,
      birthdate: dayjs(date).format('DD/MM/YYYY'),
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
      <form onSubmit={(e) => handleCreation(e)}>
        <Card sx={{
          color: 'text.main',
          padding: '40px',
          display: 'flex',
          gap: '20px',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minWidth: '275px',
          maxWidth: '800px',
          backgroundColor: 'bg.secondary',
        }}
        >
          <Typography>Novo usuário</Typography>
          <Grid container spacing={2}>
            <Grid xs={12}>
              <TextField
                size="small"
                name="email"
                label="E-mail"
                sx={textfieldCss}
                onChange={inputOnChangeHandler}
              />
            </Grid>
            <Grid xs={12}>
              <TextField
                size="small"
                name="name"
                label="Nome"
                sx={textfieldCss}
                onChange={inputOnChangeHandler}
              />
            </Grid>
            <Grid xs={4}>
              <TextField
                size="small"
                name="cpf"
                label="CPF"
                sx={textfieldCss}
                onChange={({ target }) => setData(handleCPF(data, target))}
                controlled={data.cpf}
                value={data.cpf}
                inputProps={{ maxLength: 14 }}
              />
            </Grid>
            <Grid xs={4}>
              <TextField
                size="small"
                name="phone"
                label="Telefone"
                sx={textfieldCss}
                onChange={({ target }) => setData(handlePhoneNumber(data, target))}
                controlled={data.phone}
                value={data.phone}
                inputProps={{ maxLength: 15 }}
              />
            </Grid>
            <Grid xs={4}>
              <DatePicker
                name="birthdate"
                label="Data de Nascimento"
                sx={datefieldCss}
                slotProps={{
                  textField: {
                    size: 'small',
                    fullWidth: true,
                  },
                }}
                onChange={dataOnChangeHandler}
              />
            </Grid>
            <Grid xs={6}>
              <TextField
                size="small"
                type="password"
                name="password"
                label="Senha"
                sx={textfieldCss}
                onChange={inputOnChangeHandler}
              />
            </Grid>
            <Grid xs={6}>
              <TextField
                size="small"
                type="password"
                name="confirmPassword"
                label="Confirme a senha"
                sx={textfieldCss}
                onChange={inputOnChangeHandler}
              />
            </Grid>
          </Grid>
          <Box sx={{
            display: 'flex',
            flexFlow: 'row nowrap',
            alignSelf: 'flex-end',
            justifySelf: 'flex-end',
            gap: '20px',
          }}
          >
            <Button
              sx={noBgButtonCss}
              type="button"
              onClick={() => navigate('/')}
            >
              Voltar
            </Button>
            <Button
              variant="contained"
              sx={buttonCss}
              type="submit"
            >
              Criar
            </Button>
          </Box>
        </Card>
      </form>
    </Box>
  );
}

export default CreateUser;
