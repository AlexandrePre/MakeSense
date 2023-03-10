import PropTypes from "prop-types";
import React, { useContext, useState } from "react";
import { authContext } from "../../hooks/authContext";

function ChatFooter({ socket }) {
  const [message, setMessage] = useState("");
  const { auth } = useContext(authContext);

  const handleSendMessage = (e) => {
    e.preventDefault();
    socket.emit("sendMessage", {
      image: auth.data.image,
      userName: auth.data.lastname,
      socketID: socket.id,
      message,
    });
    setMessage("");
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      socket.emit("sendMessage", {
        image: auth.data.image,
        userName: auth.data.lastname,
        socketID: socket.id,
        message,
      });
      setMessage("");
    }
  };
  return (
    <div className="chat__footer">
      <div className="form__message">
        <input
          type="text"
          placeholder="Write message"
          className="message__footer__input"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button type="button" className="sendBtn" onClick={handleSendMessage}>
          SEND
        </button>
      </div>
    </div>
  );
}

ChatFooter.propTypes = {
  socket: PropTypes.shape({
    emit: PropTypes.func,
    id: PropTypes.string,
  }).isRequired,
};

export default ChatFooter;
