import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import logo from "../../assets/img/profil.png";

function ChatBar({ socket }) {
  const [user, setUser] = useState([]);
  useEffect(() => {
    socket.on("newUser", (newuser) => {
      setUser([...user, newuser]);
    });
  }, [user]);
  return (
    <div className="chat__sidebar">
      <h2>Discussions</h2>

      <div className="container__chat__bar">
        <h4 className="chat__header">ACTIVE USERS</h4>
        <div className="chat__users">
          {user.map((el) => (
            <div className="chat__user">
              {el.image === null ? (
                <img src={logo} alt="profil" />
              ) : (
                <img src={el.image} alt="profil" />
              )}
              <p className="p__chat__bar">
                {el.lastname}&#160;
                {el.firstname}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

ChatBar.propTypes = {
  socket: PropTypes.func.isRequired,
  on: PropTypes.func.isRequired,
};

export default ChatBar;
