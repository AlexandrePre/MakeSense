import PropTypes from "prop-types";
import React from "react";
import NavBar from "../dashboard/NavBardash";
import ChatBar from "./ChatBar";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";
import "./Messages.css";

function Messages({ socket }) {
  return (
    <div>
      <NavBar />
      <div className="chat">
        <ChatBar socket={socket} />
        <div className="chat__main">
          <ChatBody socket={socket} />
          <ChatFooter socket={socket} />
        </div>
      </div>
    </div>
  );
}

Messages.propTypes = {
  socket: PropTypes.func.isRequired,
};
export default Messages;
