function updateDimensions() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  document.getElementById(
    "dimensions"
  ).innerText = `Width: ${width}px, Height: ${height}px`;
}

// Initial call to display dimensions
updateDimensions();

// Update dimensions on resize
window.addEventListener("resize", updateDimensions);
