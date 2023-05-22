import { Alert, Snackbar } from '@mui/material';
import { createContext, useContext, useState } from 'react';

const snackContext = createContext({});

const DEFAULT_MESSAGES = {
  error: 'Algo deu errado',
  success: 'Concluído com sucesso!',
};

const DEFAULT_SNACK = {
  open: false,
  type: 'info',
  message: '',
};

const ERROR_SNACK = {
  open: true,
  type: 'error',
};

const INFO_SNACK = {
  open: true,
  type: 'info',
};

const SUCCESS_SNACK = {
  open: true,
  type: 'success',
};

const WARNING_SNACK = {
  open: true,
  type: 'warning',
};

export const useSnack = () => useContext(snackContext);

export const SnackbarProvider = ({ children }) => {
  const [snack, setSnack] = useState(DEFAULT_SNACK);

  const error = (msg = DEFAULT_MESSAGES.error) => {
    setSnack({ ...ERROR_SNACK, message: msg });
  };

  const success = (msg = DEFAULT_MESSAGES.success) => {
    setSnack({ ...SUCCESS_SNACK, message: msg });
  };

  const info = (msg) => {
    if (msg) setSnack({ ...INFO_SNACK, message: msg });
  };

  const warning = (msg) => {
    if (msg) setSnack({ ...WARNING_SNACK, message: msg });
  };

  const close = () => {
    setSnack((prev) => ({ ...prev, open: false }));
  };

  const store = {
    error,
    success,
    info,
    close,
    warning,
  };

  return (
    <snackContext.Provider value={{ ...store }}>
      <Snackbar
        open={snack.open}
        autoHideDuration={3000}
        onClose={close}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={close} data-testid="alert" severity={snack.type}>
          {snack.message}
        </Alert>
      </Snackbar>
      {children}
    </snackContext.Provider>
  );
};
