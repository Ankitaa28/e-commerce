// focus the cursor on the email-address input
const emailField = document.getElementById("email-address-input");
emailField.focus({
  preventScroll: true,
});
 // Toggle the menu on hamburger click
 const hamburger = document.querySelector('.hamburger');
 const navMenu = document.querySelector('.header-list-nav ul');

 hamburger.addEventListener('click', () => {
   hamburger.classList.toggle('active');
   navMenu.classList.toggle('active');
 });