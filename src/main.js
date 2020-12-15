document.addEventListener("colorschemechange", (e) => {
  if (e.detail.colorScheme === "dark") {
    const toggle = document.getElementById("dark-mode-toggle");
    const info = document.createElement("p");
    info.id = "dark-mode-info";
    info.innerHTML = "You’re now using 60% less energy to view this website";
    toggle.after(info);
  } else {
    const toggle = document.getElementById("dark-mode-info");
    if (toggle) toggle.remove();
  }
});
