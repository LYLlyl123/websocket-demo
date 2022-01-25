import { useParams } from "react-router-dom";
export default function ChatHistory({ msgs }) {
  const userID = useParams().userID;
  return (
    <ul>
      {msgs.map((msg) => (
        <li key={msg.date}>
          <div
            className={`message-data ${
              userID === msg.userID && " align-right"
            }`}
          >
            <span className="message-data-name">
              <i className="fa fa-circle online"></i> {msg.userID}
            </span>
            <span className="message-data-time">{msg.date}</span>
          </div>
          <div
            className={`message ${
              userID === msg.userID
                ? " my-message float-right"
                : "other-message"
            }`}
          >
            {msg.msg}
          </div>
        </li>
      ))}

      {/* <li className="clearfix">
        <div className="message-data align-right">
          <span className="message-data-time">10:14 AM, Today</span>
          &nbsp; &nbsp;
          <span className="message-data-name">Olia</span>
          <i className="fa fa-circle me"></i>
        </div>
        <div className="message other-message float-right">
          Well I am not sure. The rest of the team is not here yet. Maybe in an
          hour or so? Have you faced any problems at the last phase of the
          project?
        </div>
      </li>

      <li>
        <div className="message-data">
          <span className="message-data-name">
            <i className="fa fa-circle online"></i> Vincent
          </span>
          <span className="message-data-time">10:20 AM, Today</span>
        </div>
        <div className="message my-message">
          Actually everything was fine. I'm very excited to show this to our
          team.
        </div>
      </li> */}

      {/* <li>
        <div className="message-data">
          <span className="message-data-name">
            <i className="fa fa-circle online"></i> Vincent
          </span>
          <span className="message-data-time">10:31 AM, Today</span>
        </div>
        <i className="fa fa-circle online"></i>
        <i className="fa fa-circle online" style={{ color: "#AED2A6" }}></i>
        <i className="fa fa-circle online" style={{ color: "#DAE9DA" }}></i>
      </li> */}
    </ul>
  );
}
