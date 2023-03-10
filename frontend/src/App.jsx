import socketIO from "socket.io-client";
import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Transition from "./Transition";
import AuthProvider from "./hooks/authContext";
import "./App.css";

function App() {
  const [socket, setSocket] = useState(null);
  useEffect(() => {
    setSocket(socketIO("http://localhost:5000"));
  }, []);
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Transition socket={socket} />
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
