document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Expressão regular para validar o formato do email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Verifica se o email é válido
    if (!emailRegex.test(email)) {
        document.getElementById("error-message").innerText = "Email inválido!";
        return; // Encerra a execução da função se o email for inválido
    }

    // Verifica se a senha contém apenas números
    if (!/^\d+$/.test(password)) {
        document.getElementById("error-message").innerText = "Senha inválida! A senha deve conter apenas números.";
        return; // Encerra a execução da função se a senha for inválida
    }

    // Verifica se o email e a senha são válidos (exemplo simples)
    if (email === "usuario@example.com" && password === "123456") { // Altere "123456" para a senha desejada
        showWelcomePopup(); // Mostra a janela flutuante de boas-vindas
        document.getElementById("loginContainer").style.display = "none"; // Esconde a tela de login
    } else {
        document.getElementById("error-message").innerText = "Email ou senha incorretos!";
    }
});

document.getElementById("forgot-password-link").addEventListener("click", function(event) {
    event.preventDefault();
    alert("Um link para redefinir a senha foi enviado para o seu email.");
    // Aqui você pode adicionar lógica para redefinir a senha
});

function showWelcomePopup() {
    document.getElementById("welcomePopup").style.display = "block";
}
  
function closeWelcomePopup() {
    document.getElementById("welcomePopup").style.display = "none";
    document.getElementById("profileContainer").style.display = "block"; // Exibe a tela do perfil
}