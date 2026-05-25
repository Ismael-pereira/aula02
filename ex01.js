<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Calculadora Simples</title>

  <style>
    body {
      font-family: Arial, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #f2f2f2;
    }

    .calculadora {
      background: white;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0,0,0,0.2);
    }

    input {
      width: 100%;
      height: 40px;
      margin-bottom: 10px;
      font-size: 20px;
      text-align: right;
    }

    button {
      width: 60px;
      height: 60px;
      margin: 5px;
      font-size: 20px;
      cursor: pointer;
    }
  </style>
</head>

<body>

  <div class="calculadora">
    <input type="text" id="resultado" disabled>

    <div>
      <button onclick="adicionar('7')">7</button>
      <button onclick="adicionar('8')">8</button>
      <button onclick="adicionar('9')">9</button>
      <button onclick="adicionar('/')">÷</button>
    </div>

    <div>
      <button onclick="adicionar('4')">4</button>
      <button onclick="adicionar('5')">5</button>
      <button onclick="adicionar('6')">6</button>
      <button onclick="adicionar('*')">×</button>
    </div>

    <div>
      <button onclick="adicionar('1')">1</button>
      <button onclick="adicionar('2')">2</button>
      <button onclick="adicionar('3')">3</button>
      <button onclick="adicionar('-')">−</button>
    </div>

    <div>
      <button onclick="adicionar('0')">0</button>
      <button onclick="limpar()">C</button>
      <button onclick="calcular()">=</button>
      <button onclick="adicionar('+')">+</button>
    </div>
  </div>

  <script>
    function adicionar(valor) {
      document.getElementById('resultado').value += valor;
    }

    function limpar() {
      document.getElementById('resultado').value = '';
    }

    function calcular() {
      let resultado = document.getElementById('resultado').value;

      try {
        document.getElementById('resultado').value = eval(resultado);
      } catch {
        alert('Conta inválida');
      }
    }
  </script>

</body>
</html>
