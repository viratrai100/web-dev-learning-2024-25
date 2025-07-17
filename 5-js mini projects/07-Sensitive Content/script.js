function showReel() {
  const overlay = document.getElementById("warningOverlay");
  const video = document.getElementById("reelVideo");

  overlay.classList.add("hidden");
  video.play();
}

// Fullscreen on 'F' key press
document.addEventListener("keydown", function (e) {
  if (e.key.toLowerCase() === "f") {
    const video = document.getElementById("reelVideo");
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen();
    }
  }
});