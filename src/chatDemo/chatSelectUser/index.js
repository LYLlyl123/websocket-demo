import { useState } from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";
export default function ChatSelectUser() {
  const [user, setUser] = useState(null);
  const userList = [
    {
      name: "Akuma",
      id: "akuma",
      imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/akuma.png",
    },
    {
      name: "Balrog",
      id: "balrog",
      imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/balrog.png",
    },
    {
      name: "M. Bison",
      id: "bison",
      imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/bison.png",
    },
    {
      name: "Blanka",
      id: "blanka",
      imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/blanka.png",
    },
    {
      name: "Cammy",
      id: "cammy",
      imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/cammy.png",
    },
    {
      name: "Chun Li",
      id: "chunli",
      imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/chunli.png",
    },
    {
      name: "Dhalsim",
      id: "dhalsim",
      imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/dhalsim.png",
    },
    {
      name: "E. Honda",
      id: "ehonda",
      imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/ehonda.png",
    },
    {
      name: "Evil Ryu",
      id: "evilryu",
      imgSrc:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/ryu.pnevilg.png",
    },
    {
      name: "Guile",
      id: "guile",
      imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/guile.png",
    },
    {
      name: "Ken",
      id: "ken",
      imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/ken.png",
    },
    {
      name: "Ryu",
      id: "ryu",
      imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/ryu.png",
    },
    {
      name: "Sagat",
      id: "sagat",
      imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/sagat.png",
    },
    {
      name: "T-Hawk",
      id: "thawk",
      imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/t-hawk.png",
    },
    {
      name: "Vega",
      id: "vega",
      imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/vega.png",
    },
    {
      name: "Zangief",
      id: "zangief",
      imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/zangief.png",
    },
  ];

  function handelSelect(user) {
    setUser(user);
  }
  return (
    <div>
      <div className="containerS">
        <h1 className="title">选择你登录房间的角色</h1>
        <div className="select-container" id="selectContainer">
          {userList.map((character) => (
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
