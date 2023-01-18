const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243", // IP address here,
    port: "50541" // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.write("Name: BHA");
  // conn.write("Move: up");

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
  });

  conn.on('data', (data) => {
    console.log(data.toString());
  });

  return conn;
};

module.exports = {
  connect
};