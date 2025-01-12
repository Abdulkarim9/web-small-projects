const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.side-navigations');

menuIcon.addEventListener('click', () => {
  sidebar.classList.toggle('open');

})
