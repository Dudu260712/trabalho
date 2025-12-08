// elementos
const sidebar = document.getElementById("sidebar");
const btnMenu = document.getElementById("btnMenu");
const overlay = document.getElementById("overlay");

// abre o menu
function openSidebar() {
  sidebar.classList.add("open");
  overlay.classList.add("show");
}

// fecha o menu
function closeSidebar() {
  sidebar.classList.remove("open");
  overlay.classList.remove("show");

  // fecha todos submenus
  document.querySelectorAll(".submenu").forEach(sub => {
    sub.style.maxHeight = "0px";
  });
}

// botão ☰ abre/fecha
btnMenu.addEventListener("click", () => {
  if (sidebar.classList.contains("open")) closeSidebar();
  else openSidebar();
});

// clicou fora → fecha
overlay.addEventListener("click", closeSidebar);

// tecla Esc → fecha
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeSidebar();
});

// abrir/fechar submenus
function toggleSub(id) {
  const submenu = document.getElementById(id);

  // se o menu estiver fechado, abre primeiro
  if (!sidebar.classList.contains("open")) {
    openSidebar();
  }

  const isOpen =
    submenu.style.maxHeight && submenu.style.maxHeight !== "0px";

  if (isOpen) {
    submenu.style.maxHeight = "0px";
  } else {
    // fecha os outros submenus
    document.querySelectorAll(".submenu").forEach(s => {
      if (s !== submenu) s.style.maxHeight = "0px";
    });

    submenu.style.maxHeight = submenu.scrollHeight + "px";
  }
}
