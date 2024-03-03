document.addEventListener("DOMContentLoaded", function() {
    var chatButton = document.getElementById("chat-button");
    var messageBubble = document.getElementById("message-bubble");

    chatButton.addEventListener("click", function() {
        if (messageBubble.style.display === "none") {
            messageBubble.style.display = "block";
        } else {
            messageBubble.style.display = "none";
        }
    });
});

function redirectToWhatsApp() {
    var phoneNumber = "SEUNUMERO"; // Substitua SEUNUMERO pelo número de telefone desejado
    var whatsappURL = "https://api.whatsapp.com/send?phone=" + phoneNumber;

    // Redirecionar para o link do WhatsApp
    window.location.href = whatsappURL;

    // Retornar false para evitar o comportamento padrão de clicar em um link
    return false;
}
