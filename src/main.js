window.addEventListener("DOMContentLoaded", () => {
  updatePlaypressImage();
});

document.addEventListener("colorschemechange", (event) => {
  updatePlaypressImage();
  if (event.detail.colorScheme === "dark") {
    const toggle = document.getElementById("dark-mode-toggle");
    const info = document.createElement("p");
    info.id = "dark-mode-info";
    info.setAttribute("is", "dark-mode-info");
    info.innerHTML =
      "You’re now using up to 60% less energy to view this website";
    toggle.after(info);
  } else {
    const toggle = document.getElementById("dark-mode-info");
    if (toggle) toggle.remove();
  }
});

function updatePlaypressImage() {
  const darkModeToggle = document.querySelector("dark-mode-toggle");
  const playpress = document.getElementById("playpress");
  const source = playpress.querySelector("source");
  const img = playpress.querySelector("img");

  img.dataset.dark = source.srcset;
  img.dataset.light = img.src;
  img.src = img.dataset[darkModeToggle.mode];
}
