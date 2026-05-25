const validarSenhaForte = (senha) => {

  const regex = /^(?=.*[A-Z])(?=.*[0-9]).{6,}$/;

  if (regex.test(senha)) {
    console.log("Senha forte O");
  } else {
    console.log("Senha fraca X");
  }

};

// Exemplos
validarSenhaForte("abc123");
validarSenhaForte("Abc123");
