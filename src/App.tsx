import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

// import components
import Bar from "./components/Header";
import Preview from "./components/Preview";
import Tutorial from "./components/Tutorial";

//Redux
import { Provider } from "react-redux";

const Wrapper = styled.div`
  max-width: 100vw;
  height: 100vh;
  background: linear-gradient(to right, orange, green);
`;

function App() {
  return (
    <Wrapper className="App">
      <Bar />
      <Tutorial />
      <Preview />
    </Wrapper>
  );
}

export default App;
