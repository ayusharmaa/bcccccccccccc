// Require Websocket Package/Module
const webSocket = require("ws");
// Listen Socket on specific Port
const server = new webSocket.Server({ port: 8090 });

server.on("connection", (ws) => {
    console.log("New client connected!");

    // Send message to Client when connected
    ws.send(JSON.stringify({ msg: "You are successfully connected to JS Chat App Socket Server!" }));

    //Receive Message from Client
    ws.on("message", (msg) => {
        console.log(`Client has sent a message: ${msg}`);

        // Broadcast the message to all connected clients
        server.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(`${msg}`);
            }
        })

    })

});