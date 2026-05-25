const executar = (callback) => {
  console.log("Executando função...");

  callback();
};

const mensagem = () => {
  console.log("Callback executado");
};

executar(mensagem);
