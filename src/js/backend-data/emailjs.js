document.addEventListener("DOMContentLoaded", function () {
  fetch("/config.json")
    .then((response) => response.json())
    .then((config) => {
      emailjs.init(config.emailjs_user_id);

      document
        .getElementById("contact-form")
        .addEventListener("submit", function (event) {
          event.preventDefault();

          const name = document.getElementById("name").value;
          const email = document.getElementById("email").value;
          const subject = document.getElementById("subject").value;
          const message = document.getElementById("message").value;

          Swal.fire({
            icon: "info",
            title: "Enviando mensagem...",
            onBeforeOpen: () => {
              Swal.showLoading();
            },
          });

          emailjs
            .send(config.emailjs_service_id, config.email_template_id, {
              from_name: name,
              from_email: email,
              subject: subject,
              message: message,
              to_name: "Suporte Federação", // You can set a static recipient name or get it from a form field
            })
            .then(
              function () {
                Swal.fire({
                  icon: "success",
                  title: "Mensagem enviada!",
                  text: "Obrigado por entrar em contato conosco.",
                });
              },
              function () {
                Swal.fire({
                  icon: "error",
                  title: "Erro ao enviar mensagem",
                  text: "Por favor, tente novamente mais tarde.",
                });
              }
            )
            .finally(() => {
              document.getElementById("contact-form").reset();
              window.reload();
            });
        });
    })
    .catch((error) => console.error("Error loading config:", error));
});
