import { phoneMask, cpfMask } from './inputMasks';

export const handlePhoneNumber = (obj, target) => {
  const { name, value } = target;
  return {
    ...obj,
    [name]: phoneMask(value),
  };
};

export const handleCPF = (obj, target) => {
  const { name, value } = target;
  return {
    ...obj,
    [name]: cpfMask(value),
  };
};
