import React, { useEffect, useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";

import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import Digimon from "./components/Digimon";
import Media from "./components/Media";
import AuthContext from "./auth";
import Navbar from "./components/NavBar";
import AuthorizedHome from "./components/AuthorizedHome";

import { ProtectedRoute, AuthRoute } from "./Routes";
import DigimonInfo from "./components/InfoComponents/DigimonInfo";
import MediaInfo from "./components/InfoComponents/MediaInfo";
import UserInfo from "./components/InfoComponents/UserInfo";
import Splash from "./components/Splash";

function App() {
  const [fetchWithCSRF, setFetchWithCSRF] = useState(() => fetch);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [loading, setLoading] = useState(true);
  let location = useLocation();

  const authContextValue = {
    fetchWithCSRF,
    currentUserId,
    setCurrentUserId,
  };

  useEffect(() => {
    async function restoreCSRF() {
      const response = await fetch("/api/csrf/restore", {
        method: "GET",
        credentials: "include",
      });
      if (response.ok) {
        const authData = await response.json();
        setFetchWithCSRF(() => {
          return (resource, init) => {
            if (init.headers) {
              init.headers["X-CSRFToken"] = authData.csrf_token;
            } else {
              init.headers = {
                "X-CSRFToken": authData.csrf_token,
              };
            }
            return fetch(resource, init);
          };
        });
        if (authData.current_user_id) {
          setCurrentUserId(authData.current_user_id);
        }
      }
      setLoading(false);
    }
    restoreCSRF();
  }, []);

  if (loading) {
    return null;
  }

  return (
    <AuthContext.Provider value={authContextValue}>
      {location.pathname !== "/login" && location.pathname !== "/signup" ? (
        <nav>
          <Navbar />
        </nav>
      ) : null}
      <Switch>
        <ProtectedRoute
          path="/digimon/:name/"
          component={DigimonInfo}
          currentUserId={currentUserId}
        />
        <ProtectedRoute
          path="/media/:name/"
          component={MediaInfo}
          currentUserId={currentUserId}
        />
        <AuthRoute
          path="/login"
          component={LoginForm}
          currentUserId={currentUserId}
        />
        <AuthRoute
          path="/signup"
          component={SignupForm}
          currentUserId={currentUserId}
        />
        <ProtectedRoute
          path="/profile"
          exact={true}
          component={UserInfo}
          currentUserId={currentUserId}
        />
        <ProtectedRoute
          path="/media"
          exact={true}
          component={Media}
          currentUserId={currentUserId}
        />
        <ProtectedRoute
          path="/digimon"
          exact={true}
          component={Digimon}
          currentUserId={currentUserId}
        />
        <Route exact path="/">
          {currentUserId ? <AuthorizedHome /> : <Splash />}
        </Route>
      </Switch>
    </AuthContext.Provider>
  );
}

export default App;
