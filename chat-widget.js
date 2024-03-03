// chat-widget.js
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
    // Redirecionar para o link do WhatsApp
    window.location.href = "https://api.whatsapp.com/send?phone=SEUNUMERO";
}