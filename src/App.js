import React, {useEffect, useState} from "react";
import "./App.scss";
import Main from "./pages/Main";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ProjectDetails from "./pages/ProjectDetails";
import {StyleProvider} from "./contexts/StyleContext";
import {useLocalStorage} from "./hooks/useLocalStorage";
const darkPref = window.matchMedia("(prefers-color-scheme: dark)");

function App () {
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/project/:projectId' element={<ProjectDetails />} />
        </Routes>
      </Router>
    </StyleProvider>
  );
}

export default App;
