document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todos os botões que devem mostrar o popup
    var ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var popupForm = document.getElementById('popupForm');
            if (popupForm) {
                popupForm.style.display = 'flex';
            }
        });
    });

    // Fecha o popup quando o botão de fechar é clicado
    var closeButton = document.querySelector('.close');
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            var popupForm = document.getElementById('popupForm');
            if (popupForm) {
                popupForm.style.display = 'none';
            }
        });
    }

    // Evento de envio do formulário
    var form = document.querySelector('#popupForm form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o envio padrão do formulário

            // Captura os dados do formulário
            var formData = {
                firstname: document.getElementById('fname').value,
                lastname: document.getElementById('lname').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value
            };

            // Supondo que a configuração do Firebase já esteja feita e db esteja definido
            if (typeof db !== 'undefined' && db.collection) {
                db.collection("submissions").add(formData)
                    .then(function(docRef) {
                        console.log("Document written with ID: ", docRef.id);
                        window.location.href = 'obrigado.html'; // Redireciona para a página de agradecimento
                    })
                    .catch(function(error) {
                        console.error("Error adding document: ", error);
                    });
            } else {
                console.error("Firebase database not initialized or not available.");
            }
        });
    }

    // Formata o campo de telefone para incluir o DDD
    var phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function() {
            var digits = this.value.replace(/[^\d]/g, ''); // Remove caracteres não numéricos
            if (digits.length > 2) {
                this.value = '(' + digits.slice(0, 2) + ') ' + digits.slice(2);
            } else {
                this.value = '(' + digits;
            }
        });
    }
});
