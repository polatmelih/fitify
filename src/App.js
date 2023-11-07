import React, { Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Login from "./scenes/form";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { routes as appRoutes } from "./routes";
import { Navigate } from "react-router-dom";
import { Spinner } from "reactstrap";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
    const [reload, setReload] = useState(false);
    const handleReload = () => {
        setReload(!reload);
    }

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {!sessionStorage.getItem("token") ? (
            <Routes>
              <Route
                key="login-route"
                path="/login"
                element={<Login />}
              />
              <Route
                key="unmapped"
                path="*"
                element={<Navigate to={sessionStorage.getItem("token") ? "/" : "/login"} />}
              />
            </Routes>
          ) : (
            <>
              <Sidebar isSidebar={isSidebar} />
              <main className="content">
                <Topbar setIsSidebar={setIsSidebar} handleReload={handleReload} />
                <Suspense fallback={<Spinner color="primary" />}>
                  <Routes key={reload}>
                    {appRoutes
                      .filter((r) => r.enabled)
                      .map((route) => (
                        <Route
                          key={route.key }
                          path={route.path}
                          element={<route.component />}
                        />
                      ))}
                  </Routes>
                </Suspense>
              </main>
            </>
          )}
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
