const io = require("socket.io")();

const socketapi = {
  io: io,
};
var usersOnline = [];

// Add your socket.io logic here!
io.on("connection", function (socket) {
  console.log(socket.id);
  console.log("A user connected");
  socket.on("showUsers", function (users) {
    usersOnline.push(users);
    io.emit("usersonline", usersOnline);
  });

  socket.on("message", function (data) {
    io.emit("reply", { data: data, id: socket.id });
  });

  socket.on("disconnect", function (socket) {
    usersOnline.splice(usersOnline.indexOf(), 1);
    io.emit("disconnection", usersOnline);
  });
});

// end of socket.io logic

module.exports = socketapi;
