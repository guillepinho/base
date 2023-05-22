export const textfieldCss = {
  width: '100%',
  '& input': {
    color: 'text.main',
  },
  '& .MuiInputLabel-root': {
    color: 'text.main',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'text.main',
    },
    '&:hover fieldset': {
      borderColor: 'hover.main',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'text.main',
      color: 'text.main',
    },
  },
  '& input::placeholder': {
    color: 'text.main',
  },
  '& .MuiInputLabel-shrink': {
    color: 'text.main',
  },
};

export const buttonCss = {
  backgroundColor: 'bg.third',
  '&:hover': {
    backgroundColor: 'focused.main',
    color: 'bg.main',
  },
  '&:active': {
    backgroundColor: '#b0b0b0', // Change the background color on click
  },
  padding: '6px 30px',
};

export const noBgButtonCss = {
  color: 'text.main',
  '&:hover': {
    backgroundColor: 'transparent',
    color: 'focused.main',
  },
};

export const datefieldCss = {
  ...textfieldCss,
  '& .MuiIconButton-root .MuiSvgIcon-root': {
    color: 'text.main',
  },
};
