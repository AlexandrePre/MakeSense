import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ChatBody({ socket }) {
  const navigate = useNavigate();
  const [chatMessages, setChatMessages] = useState([]);

  const handleLeaveChat = () => {
    navigate("/dashboard");
  };

  useEffect(() => {
    socket.on("newMessage", (messages) => {
      setChatMessages([...chatMessages, messages]);
    });
  }, [chatMessages]);
  return (
    <>
      <header className="chat__mainHeader">
        <button
          type="button"
          className="leaveChat__btn"
          onClick={handleLeaveChat}
        >
          Quitter le chat
        </button>
      </header>
      <div className="message__container">
        {chatMessages.map((message) =>
          message.socketID === socket.id ? (
            <div className="message__chats">
              <p className="sender__name">You</p>
              <div className="message__sender">
                <p>{message.message}</p>
              </div>
            </div>
          ) : (
            <div className="message__chats__r">
              <div>
                <img
                  className="message__chat__image"
                  src={message.image}
                  alt="img_profil"
                />
              </div>
              <p>{message.username}</p>
              <div className="message__recipient">
                <p>{message.message}</p>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
}

ChatBody.propTypes = {
  socket: PropTypes.shape({
    id: PropTypes.string,
    on: PropTypes.func,
  }).isRequired,
};

export default ChatBody;
