import dgram from "dgram";

// Create a socket using IPv4
const server = dgram.createSocket("udp4");

// When a message is received
server.on("message", (msg, rinfo) => {
  console.log(`Server got: ${msg} from ${rinfo.address}:${rinfo.port}`);

  // Echo the message back to the sender
  server.send(msg, rinfo.port, rinfo.address, (err) => {
    if (err) console.error("Error sending response:", err);
  });
});

// Error handling
server.on("error", (err) => {
  console.error(`Server error:\n${err.stack}`);
  server.close();
});

// When the server starts listening
server.on("listening", () => {
  const address = server.address();
  console.log(`Server listening ${address.address}:${address.port}`);
});

// Bind to port 41234 on all available interfaces
server.bind(41234);
