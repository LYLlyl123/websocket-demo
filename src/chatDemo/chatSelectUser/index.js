import { useState } from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";
import config from "../../config/config.js";
export default function ChatSelectUser() {
  const [user, setUser] = useState(null);
  function handelSelect(user) {
    setUser(user);
  }
  return (
    <div>
      <div className="containerS">
        <h1 className="title">选择你登录房间的角色</h1>
        <div className="select-container" id="selectContainer">
          {config.userList.map((character) => (
            <button
              className={`character ${
                user && user.id === character.id && "active"
              }`}
              id={character.id}
              key={character.id}
              rel={character.name}
              onClick={() => handelSelect(character)}
            >
              <img className="character__img" src={character.imgSrc} />
              <p className="character__name ">{character.name}</p>
            </button>
          ))}
        </div>
      </div>
      <div className="goRoom">
        <NavLink to={`/ChatDemo/ChatRoom/${user && user.id}`}>进入房间</NavLink>
      </div>
    </div>
  );
}
