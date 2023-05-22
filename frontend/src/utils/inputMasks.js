export function phoneMask(phone = '') {
  if (phone) {
    const maskedPhone = phone
      .replace(/\D/g, '')
      .replace(/^(\d{2})(\d)/g, '($1) $2')
      .replace(/(\d)(\d{4})$/, '$1-$2');

    return maskedPhone;
  }
  return '';
}

export function cpfMask(cpf = '') {
  if (cpf) {
    const maskedCpf = cpf
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    return maskedCpf;
  }
  return '';
}
