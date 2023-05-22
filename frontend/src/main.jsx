// Packages
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'dayjs/locale/en-gb';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// Imports
import theme from './theme/theme';
import { SnackbarProvider } from './context/snackbarContext';
import Router from './Router';
// Style
import './main.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Provedor do tema */}
    <ThemeProvider theme={theme}>
      {/* Localization Provider do Mui DatePicker */}
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
        {/* Provedor do alerta de snackbar */}
        <SnackbarProvider>
          {/* Browser Router */}
          <BrowserRouter>
            {/* Rotas */}
            <Router />
          </BrowserRouter>
        </SnackbarProvider>
      </LocalizationProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
