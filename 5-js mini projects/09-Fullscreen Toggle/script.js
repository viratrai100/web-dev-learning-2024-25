const video = document.querySelector("video");

let isFullScreen = false;

document.addEventListener("keydown", (e) => {
  if (e.key === "f" || e.key === "F") {
    if (isFullScreen) {
      video.style.width = "700px";
    } else {
      video.style.width = "100%";
      video.style.width = "100%";
    }
    isFullScreen = !isFullScreen;
  }
});