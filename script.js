// Disable right-click
document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    if (event.target.tagName === "IMG") {
      alert("Image download is disabled.");
    }
  });
  
  // Disable dragging
  document.addEventListener("dragstart", (event) => {
    if (event.target.tagName === "IMG") {
      event.preventDefault();
      alert("Image dragging is disabled.");
    }
  });
  
  // Disable keyboard shortcuts for screenshots (partial protection)
  document.addEventListener("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key === "p") {
      event.preventDefault();
      alert("Printing is disabled.");
    }
    if ((event.ctrlKey || event.metaKey) && event.key === "s") {
      event.preventDefault();
      alert("Saving is disabled.");
    }
  });