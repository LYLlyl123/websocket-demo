import { useEffect } from "react";
import "./style.scss";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";
import config from "../../config/config.js";

const io = require("socket.io-client");

export default function ChartRoom() {
  const userID = useParams().userID;
  const [myClient, setMyClient] = useState();
  const [msgs, setMsgs] = useState([]);
  const textRef = useRef(null);

  useEffect(() => {
    const client = io.connect("http://localhost:80/chat");
    client.on("message", (msg, userID, date) => {
      let newMsgs = msgs;
      newMsgs.push({ msg, userID, date });
      setMsgs([...newMsgs]);
    });
    // 连接成功
    client.on("connect", () => {
      console.log("client connect server");
      setMyClient(client);
    });
  }, []);
  useEffect(() => {
    let dom = document.querySelector(".chat-history");
    if (dom) dom.scrollTop = dom.scrollHeight;
  }, [msgs]);
  function onClick() {
    let value = textRef.current.value;
    if (!value) {
      alert("请输入内容！");
      return;
    }
    myClient.emit("message", value, userID);
    textRef.current.value = "";
  }
  return myClient === undefined ? (
    <div>加载中</div>
  ) : (
    <div>
      <div className="container ">
        <div className="chat">
          <div className="chat-header ">
            <div className="chat-about">
              <div className="chat-with">拳皇聊天室</div>
            </div>
          </div>

          <div className="chat-history">
            <ul>
              {msgs.map((msg) => (
                <li
                  key={msg.date}
                  className={`${
                    userID === msg.userID ? "my-message" : "other-message"
                  }`}
                >
                  <div className={`message-data`}>
                    <span className="message-data-img">
                      <img
                        className="message-data-img"
                        src={
                          config.userList.find((x) => x.id === msg.userID)
                            .imgSrc
                        }
                      />
                    </span>

                    <span className="message-data-name">{msg.userID}</span>
                    <span className="message-data-time">{msg.date}</span>
                  </div>
                  <div className={`message`}>{msg.msg}</div>
                </li>
              ))}
            </ul>
          </div>
          <div className="chat-message ">
            <textarea
              ref={textRef}
              name="message-to-send"
              id="message-to-send"
              placeholder="请输入消息"
              rows="3"
            ></textarea>
            <button onClick={onClick}>发送</button>
          </div>
        </div>
      </div>
    </div>
  );
}
