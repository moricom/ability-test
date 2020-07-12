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
import store from "./store";

const Wrapper = styled.div`
  max-width: 100vw;
  height: 100vh;
  background: linear-gradient(to right, orange, green);
`;

interface HerderProps {
  visibility: "visible" | "hidden";
}

function App() {
  const [mode, setMode] = React.useState<Number>(0);
  const [hederVisibility, setHederVisibility] = React.useState<HerderProps>();
  const handleClickModeButton = (mode: Number) => {
    setMode(mode);
  };
  return (
    <Provider store={store}>
      <Wrapper className="App">
        <Bar mode={mode} setMode={handleClickModeButton} />
        {mode === 0 ? <Tutorial /> : <></>}
        {mode === 1 ? <Preview /> : <></>}
      </Wrapper>
    </Provider>
  );
}

export default App;
