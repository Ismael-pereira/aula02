const validarSenhaForte = (senha) => {

  const regex = /^(?=.*[A-Z])(?=.*[0-9]).{6,}$/;

  if (regex.test(senha)) {
    console.log("Senha forte");
  } else {
    console.log("Senha fraca");
  }

};

// Exemplos
validarSenhaForte("abc123");
validarSenhaForte("Abc123");
