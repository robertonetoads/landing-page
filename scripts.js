document.addEventListener("DOMContentLoaded", function() {
    var ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            document.getElementById('popupForm').style.display = 'flex';
        });
    });

    var closeButton = document.querySelector('.close');
    closeButton.addEventListener('click', function() {
        document.getElementById('popupForm').style.display = 'none';
    });

    // Adiciona um evento de submit ao formulário
    var form = document.querySelector('#popupForm form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Captura os dados do formulário
        var formData = {};
        new FormData(form).forEach((value, key) => formData[key] = value);

        // Salva os dados no localStorage
        localStorage.setItem('formData', JSON.stringify(formData));

        // Redireciona para a página de obrigado
        window.location.href = 'obrigado.html';
    });

    document.getElementById('phone').addEventListener('input', function() {
        var digits = this.value.replace(/[^\d]/g, '');
        this.value = digits.length === 2 ? '(' + digits + ') ' : '(' + digits.slice(0, 2) + ') ' + digits.slice(2);
    });
});
