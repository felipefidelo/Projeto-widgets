<!-- chat-widget.html -->
<style>
    #chat-widget {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 9999;
    }

    #chat-button {
        width: 50px;
        height: 50px;
        background-color: #25D366; /* Cor do botão de chat */
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    #message-bubble {
        position: absolute;
        bottom: 70px;
        right: 60px;
        background-color: #FFF; /* Cor de fundo da bolha de mensagem */
        padding: 10px 15px;
        border-radius: 10px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        display: none;
        z-index: 9999;
    }

    .contact-name {
        font-weight: bold;
        margin-bottom: 5px;
    }

    .message {
        font-size: 14px;
    }

    .message-button {
        display: block;
        width: 100%;
        background-color: #25D366; /* Cor do botão de iniciar chat */
        color: #FFF;
        border: none;
        border-radius: 5px;
        padding: 8px 15px;
        margin-top: 10px;
        cursor: pointer;
    }
</style>

<div id="chat-widget">
    <div id="chat-button">
        <img src="https://github.com/felipefidelo/Projeto-widgets/blob/main/Animation%20-%201709402093777.gif?raw=true" alt="Ícone de Chat" width="30">
    </div>
    <div id="message-bubble">
        <div class="contact-name">André</div>
        <div class="message">Olá, em que posso ajudar?</div>
        <button class="message-button" onclick="redirectToWhatsApp()">Iniciar Chat</button>
    </div>
</div>
<script src="https://felipefidelo.github.io/Projeto-widgets/chat-widget.js"></script>
