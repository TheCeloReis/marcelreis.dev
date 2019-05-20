if (location.hostname === "localhost" || location.hostname === "127.0.0.1" || location.protocol === "file:" ) {
  console.log('localhost');
} else {
  node = document.createElement("h3");
  node.style.color = "#cccccc"
  node.style.position = "absolute"
  node.style.bottom = "5%"
  node.style.left = "50%"
  node.style.transform = "translate(-50%, -50%)"
  node.textContent = 'Em Construção'
  document.querySelector("header").appendChild(node)

  document.querySelector("main").style.display = 'none'
  document.querySelector(".main-nav").style.display = 'none'
}
  