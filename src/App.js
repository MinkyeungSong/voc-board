import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import { GlobalStyle } from "./style";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" Component={Main} />
      </Routes>
    </>
  );
}

export default App;
