let contador = 0;

document.getElementById("btnCumprimentar").addEventListener("click", () => {
  contador++;
  document.getElementById("mensagem").innerText = "Bem-vindo(a)! Obrigado por visitar meu portfólio!";
  document.getElementById("contador").innerText = `Botão clicado ${contador} vezes.`;
});
