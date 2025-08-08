const sidebar_btn = document.getElementById("toggle-btn");
const sidebar = document.getElementById("sidebar");
const logo_svg = document.getElementById("logo-svg");

function toggleSidebar() {
    sidebar.classList.toggle('close');
    sidebar_btn.classList.toggle('rotate');
    logo_svg.classList.toggle('.logo-close');
}