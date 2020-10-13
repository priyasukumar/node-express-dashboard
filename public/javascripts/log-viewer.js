const WebSocket = require("ws");

const connection = new WebSocket("ws://localhost:3000");
const logwindow = document.querySelector("#log-window");
connection.onopen = connection.send("Hello from the client!");
connection.onmessage = (event) => {
    logwindow = event.data;
};