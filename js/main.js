if (location.hostname === "localhost" || location.hostname === "127.0.0.1" || location.protocol === "file:" ) {
  console.log('localhost');
} else {
  document.querySelector("main").style.display = 'none'
}
  