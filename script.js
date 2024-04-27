// Adicionando um evento para escutar a tecla enter
document.querySelector('#message-input').addEventListener("keydown", (event) => {
  if(event.key === 'Enter')
  getMessage();
});

// Adicionando um evento para escutar o click no botão submit
document.querySelector("#submit").addEventListener("click", () => {
  getMessage();
});

// Definindo Arrow function 'getMessage'
getMessage = () => {
  // O valor do campo de entrada de mensagem e o define como o conteúdo do elemento da saída da mensagem
  document.querySelector("#message-output").textContent = document.querySelector("#message-input").value;
    // Limpa o campo de entrada da mensagem, definindo o valor de uma string como vazio
  document.querySelector("#message-input").value = "";
}