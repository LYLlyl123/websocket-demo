import { useEffect } from "react";
import "./style.scss";
import ChatHistory from "./views/ChatHistory.js";
import ChatInput from "./views/ChatInput.js";
import { useParams } from "react-router-dom";
import { useState } from "react";
const io = require("socket.io-client");

export default function ChartRoom() {
  const userID = useParams().userID;
  const [myClient, setMyClient] = useState();
  const [msgs, setMsgs] = useState([]);
  useEffect(() => {
    const client = io.connect("http://localhost:80/chat");
    client.on("message", (msg, userID, date) => {
      debugger;
      let newMsgs = msgs;
      newMsgs.push({ msg, userID, date });
      setMsgs(newMsgs);
    });
    // 连接成功
    client.on("connect", () => {
      console.log("client connect server");
      setMyClient(client);
    });
  }, []);

  function sendMsg(msg) {
    myClient.emit("message", msg, userID);
  }

  return myClient === undefined ? (
    <div>加载中</div>
  ) : (
    <div>
      <div className="container clearfix">
        <div className="chat">
          <div className="chat-header clearfix">
            <div className="chat-about">
              <div className="chat-with">拳皇聊天室</div>
            </div>
          </div>

          <div className="chat-history">
            <ChatHistory msgs={msgs} />
          </div>
          <ChatInput sendMsg={sendMsg} />
        </div>
      </div>
    </div>
  );
}
