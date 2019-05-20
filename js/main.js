// Parabéns, você descobriu esse horrível código. Meu site ainda não está pronto, 
// mas se você é bom o bastante para desativar o JS, ou exibir o que foi oculto, 
// pode conferir como ele vai ficar. Mas antes disso desconsidere esse JS, ele
// foi escrito as pressas no github.

if (
  location.hostname === "localhost" ||
  location.hostname === "127.0.0.1" ||
  location.protocol === "file:"
) {
  console.log("localhost");
} else {
  node = document.createElement("h3");
  node.style.color = "#cccccc";
  node.style.position = "absolute";
  node.style.bottom = "0%";
  node.style.left = "50%";
  node.style.transform = "translate(-50%, -50%)";
  node.textContent = "Site Em Construção";
  document.querySelector("header").appendChild(node);

  document.querySelector("main").style.display = "none";
  document.querySelector(".main-nav").style.display = "none";
}
