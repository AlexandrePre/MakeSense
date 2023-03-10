/* eslint-disable react/forbid-prop-types */
import PropTypes from "prop-types";
import { createContext, useMemo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const authContext = createContext({});

function AuthProvider({ children }) {
  const [auth, setAuth] = useState({ data: null });
  const [notif, setNotif] = useState();
  const navigate = useNavigate();
  const login = (data) => {
    setAuth({ data });
    navigate("/dashboard");
  };
  const logout = () => {
    setAuth({});
    window.localStorage.removeItem("user");
    navigate("/connexion", { replace: true, state: "Disconnected" });
  };

  useEffect(() => {
    const data = window.localStorage.getItem("user");

    if (data) {
      setAuth({
        data: JSON.parse(data),
      });
    }
  }, []);

  useEffect(() => {
    if (auth.data) {
      window.localStorage.setItem("user", JSON.stringify(auth.data));
    }
  }, [auth]);

  const value = useMemo(
    () => ({
      auth,
      login,
      logout,
      notif,
      setNotif,
    }),
    [auth]
  );

  const valueNotif = () => ({
    notif,
    setNotif,
  });

  return (
    <authContext.Provider value={value} valueNotif={valueNotif}>
      {children}
    </authContext.Provider>
  );
}

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.any.isRequired,
};
