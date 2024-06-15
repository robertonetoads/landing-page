document.addEventListener("DOMContentLoaded", function() {
  var ctaButtons = document.querySelectorAll('.cta-button-pulsating');
  ctaButtons.forEach(function(button) {
      button.addEventListener('click', function() {
          document.getElementById('popupForm').style.display = 'flex';
      });
  });

  var closeButton = document.querySelector('.close');
  if (closeButton) {
      closeButton.addEventListener('click', function() {
          document.getElementById('popupForm').style.display = 'none';
      });
  }

  // Adiciona um evento de submit ao formulário
  var form = document.querySelector('#popupForm form');
  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Impede o envio padrão do formulário
      window.location.href = 'obrigado.html'; // Redireciona para a nova página
  });
});

;
document.getElementById('phone').addEventListener('input', function() {
  var digits = this.value.replace(/[^\d]/g, ''); // Remove non-digit characters
  if (digits.length === 2 && this.value.length === 2) { // Check if only two digits are entered
      this.value = '(' + digits + ') '; // Add parentheses and space after two digits
  } else if (digits.length > 2) { // If more than two digits, reformat
      this.value = '(' + digits.substring(0, 2) + ') ' + digits.substring(2);
  }
});
