const socket = io();
const form = document.querySelector("#form");
const input = document.querySelector("#input");
const messages = document.querySelector("#messages");
const toggleBtn = document.querySelector("#toggleBtn");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (input.value) {
        socket.emit("messages", input.value);
        input.value = "";
    }
});
socket.on("messages", (msg) => {
    const message = document.createElement("li");
    message.textContent = msg;
    messages.appendChild(message);
});

toggleBtn.addEventListener("click", () => {
    if(socket.connected){
        socket.disconnect();
        toggleBtn.textContent = "Connect";
    }else{
        socket.connect();
        toggleBtn.textContent = "Disconnect";
    }
});

