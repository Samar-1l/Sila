document.addEventListener("DOMContentLoaded", () => {
  const heatBuildings = document.querySelectorAll(".heat-building");

  heatBuildings.forEach(item => {
    item.addEventListener("mouseenter", () => {
      item.style.filter = "drop-shadow(0 10px 18px rgba(91,59,46,0.22))";
      item.style.cursor = "pointer";
    });

    item.addEventListener("mouseleave", () => {
      item.style.filter = "none";
    });
  });
});