<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Validador de Senha</title>

  <style>
    body {
      font-family: Arial;
      text-align: center;
      margin-top: 100px;
    }

    input {
      padding: 10px;
      width: 200px;
    }

    button {
      padding: 10px;
      cursor: pointer;
    }
  </style>
</head>

<body>

  <h2>Validador de Senha</h2>

  <input type="password" id="senha" placeholder="Digite a senha">

  <button onclick="validarSenha()">
    Validar
  </button>

  <p id="mensagem"></p>

  <script>
    function validarSenha() {
      let senha = document.getElementById("senha").value;
      let mensagem = document.getElementById("mensagem");

      if (senha.length >= 6) {
        mensagem.innerHTML = "Senha válida";
        mensagem.style.color = "green";
      } else {
        mensagem.innerHTML = "Senha muito curta";
        mensagem.style.color = "red";
      }
    }
  </script>

</body>
</html>
