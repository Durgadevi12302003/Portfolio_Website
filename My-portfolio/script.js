function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");

  
}
function toggleMenu() {
  console.log("toggleMenu clicked!");
  const menu = document.getElementById('menu');
  menu.classList.toggle('active');
}
function scrollToProjects() {
  document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
}
