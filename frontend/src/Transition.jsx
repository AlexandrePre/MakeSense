import PropTypes from "prop-types";
import React from "react";
import { Routes, Route } from "react-router-dom";
import PostDecision from "./pages/PostDecision";
import ProtectedRoute from "./hooks/ProtectedRoute";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Inscription from "./pages/Inscription";
import Connexionpage from "./pages/Connexionpage";
import Dashboard from "./pages/Dashboard";
import Decision from "./pages/Decision";
import Notice from "./pages/Notice";
import Conflict from "./pages/Conflict";
import UserConcerned from "./pages/UserConcerned";
import ProfilePage from "./components/Profil/ProfilPage";
import { NotificationContextProvider } from "./Contexts/NotificationContexts";
import Admin from "./pages/Admin";
import Messages from "./components/Messages/Messages";
import DecisionPage from "./pages/DecisionPage";

function Transition({ socket }) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/connexion" element={<Connexionpage />} />
        <Route path="/concerned" element={<UserConcerned />} />

        <Route
          path="/conflict"
          element={
            <ProtectedRoute>
              <NotificationContextProvider>
                <Conflict />
              </NotificationContextProvider>
            </ProtectedRoute>
          }
        />
        <Route
          path="/notice"
          element={
            <ProtectedRoute>
              <NotificationContextProvider>
                <Notice />
              </NotificationContextProvider>
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <NotificationContextProvider>
                <Dashboard socket={socket} />
              </NotificationContextProvider>
            </ProtectedRoute>
          }
        />
        <Route
          path="/decision"
          element={
            <ProtectedRoute>
              <NotificationContextProvider>
                <Decision />
              </NotificationContextProvider>
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/profil"
          element={
            <ProtectedRoute>
              <NotificationContextProvider>
                <ProfilePage />
              </NotificationContextProvider>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <NotificationContextProvider>
                <Admin />
              </NotificationContextProvider>
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/decision/:nbdec"
          element={
            <ProtectedRoute>
              <NotificationContextProvider>
                <PostDecision />
              </NotificationContextProvider>
            </ProtectedRoute>
          }
        />
        <Route
          path="/messages"
          element={
            <ProtectedRoute>
              <NotificationContextProvider>
                <Messages socket={socket} />
              </NotificationContextProvider>
            </ProtectedRoute>
          }
        />
        <Route
          path="/Decision/:id"
          element={
            <ProtectedRoute>
              <Decision />
            </ProtectedRoute>
          }
        />
        <Route
          path="/decisiondash"
          element={
            <ProtectedRoute>
              <NotificationContextProvider>
                <DecisionPage socket={socket} />
              </NotificationContextProvider>
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

Transition.propTypes = {
  socket: PropTypes.func.isRequired,
};

export default Transition;
