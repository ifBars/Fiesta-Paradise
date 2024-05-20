document.addEventListener("DOMContentLoaded", function() {
  var dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(function(dropdown) {
    var button = dropdown.querySelector('.dropbtn');
    button.addEventListener('click', function() {
      dropdown.classList.toggle('active');
    });
  });
});
