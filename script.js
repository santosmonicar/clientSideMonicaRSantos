document
  .getElementById("cadastroForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = {
      nome: document.getElementById("nome").value,
      email: document.getElementById("email").value,
      cpf: document.getElementById("cpf").value,
      phone: document.getElementById("phone").value,
      senha: document.getElementById("senha").value,

    };

    console.log("Dados:", formData);

    fetch("http://localhost:3333/cadastro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("Cadastro realizado com sucesso!");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Ocorreu um erro ao realizar o cadastro.");
      });
  });


   const phoneInputField = document.querySelector("#phone");
   const phoneInput = window.intlTelInput(phoneInputField, {
     utilsScript:
       "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
   });