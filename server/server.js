var app = require("http").createServer();
server = app.listen(80, function (err) {
  if (err) throw err;
  console.log("listening on port 80");
});
var io = require("socket.io")(server, { cors: true });
let timer = null;

const chartNamespace = io.of("/chart");
chartNamespace.on("connection", function (socket) {
  //监听connection（用户连接）事件，socket为用户连接的实例
  console.log("用户" + socket.id + "连接");
  timer = setInterval(
    () =>
      socket.emit("getChartData", {
        Date:
          new Date().getHours() +
          ":" +
          new Date().getMinutes() +
          ":" +
          new Date().getSeconds(),
        scales: parseInt(Math.random() * 1000),
      }),
    3000
  );
  socket.on("disconnect", () => {
    //监听用户断开事件
    console.log("用户" + socket.id + "断开连接");
    if (timer) {
      clearInterval(timer);
    }
  });
});

const chatNamespace = io.of("/chat");
chatNamespace.on("connection", function (socket) {
  //监听connection（用户连接）事件，socket为用户连接的实例
  console.log("用户" + socket.id + "进入房间");
  socket.on("message", (msg, userID) => {
    console.log("用户" + userID + ":" + msg);
    socket.broadcast.to("chat").emit("message", msg, userID, new Date());
  });
  socket.on("disconnect", () => {
    //监听用户断开事件
    console.log("用户" + socket.id + "断开连接");
    if (timer) {
      clearInterval(timer);
    }
  });
});
