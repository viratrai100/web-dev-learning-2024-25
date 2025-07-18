function speak() {
  // let text = document.getElementById
  let text = document.querySelector("#input").value;
  let utterence = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterence);
}