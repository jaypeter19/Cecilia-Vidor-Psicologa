// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()


document.addEventListener('DOMContentLoaded', () => {
    emailjs.init("d7dYzuX-eyVk5ljaD");

    const form = document.getElementById('contactForm');

    form.addEventListener('submit', event => {
        event.preventDefault();

        if (!form.checkValidity()) {
            form.classList.add('was-validated');
            return;
        }

        const formData = {
            name: form.name.value,
            email: form.email.value,
            phone: form.phone.value,
            message: form.message.value
        };

        emailjs.send('service_a1xsijq', 'template_hinmpzt', formData)
            .then((response) => {
                console.log('E-mail enviado com sucesso!', response.status, response.text);
                form.reset();
                form.classList.remove('was-validated');


                // Redireciona para whatsapp
                window.location.href = "https://wa.me/5551989184786";
            })
            .catch((error) => {
                console.error('Erro ao enviar e-mail:', error);
            });
    });
});
