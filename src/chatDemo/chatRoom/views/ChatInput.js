import { useRef } from "react";

export default function ChatInput({ sendMsg }) {
  const textRef = useRef(null);
  function onClick() {
    let value = textRef.current.value;
    if (!value) {
      alert("请输入内容！");
      return;
    }
    sendMsg(value);
  }
  return (
    <div className="chat-message clearfix">
      <textarea
        ref={textRef}
        name="message-to-send"
        id="message-to-send"
        placeholder="请输入消息"
        rows="3"
      ></textarea>
      <button onClick={onClick}>发送</button>
    </div>
  );
}
