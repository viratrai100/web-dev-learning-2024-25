document.addEventListener("copy", function (event) {
  event.clipboardData.setData("text/plain", "🖕");
  event.preventDefault();
});
