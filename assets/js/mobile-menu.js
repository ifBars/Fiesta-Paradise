document.addEventListener('DOMContentLoaded', function() {
  const mobileMenu = {
    init: function() {
      this.menuToggle = document.getElementById('mobile-menu');
      this.navLinks = document.querySelector('.nav-links');
      this.addEventListeners();
    },
    addEventListeners: function() {
      this.menuToggle.addEventListener('click', this.toggleMenu.bind(this));
    },
    toggleMenu: function() {
      this.navLinks.classList.toggle('active');
    }
  };
  mobileMenu.init();
});
