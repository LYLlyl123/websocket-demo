import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ChartDemo from "./chartDemo";
import ChatRoom from "./chatDemo/chatRoom";
import ChatSelectUser from "./chatDemo/chatSelectUser";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
function IndexDome() {
  return (
    <ul className="nav">
      <li className="nav-item">
        <NavLink to="/ChartDemo">图表示例</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/ChatDemo/ChatSelectUser">聊天示例</NavLink>
      </li>
    </ul>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact={true} path="/" element={<IndexDome />}></Route>
        <Route exact={true} path="/ChartDemo" element={<ChartDemo />}></Route>
        <Route path="/ChatDemo/ChatRoom/:userID" element={<ChatRoom />}></Route>
        <Route
          path="/ChatDemo/ChatSelectUser"
          element={<ChatSelectUser />}
        ></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
