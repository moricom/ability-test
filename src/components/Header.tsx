import React from "react";
import styled from "styled-components";
import { Button, Typography } from "@material-ui/core";

const StyledHeader = styled.div<{ visibility?: "visible" | "hidden" }>`
  height: 3rem;
  width: 100%;
  padding: 0 1rem 0 1rem;
  visibility: ${(props) => (props.visibility ? props.visibility : "visible")};
  &::after {
    color: white;
    content: "";
    display: block;
    height: 2px;
    width: 100%;
    background: linear-gradient(to right, #673ab7, white);
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

interface Props {
  mode: Number;
  setMode: Function;
  visibility?: "visible" | "hidden";
}

const Header: React.FC<Props> = (props) => {
  const handleOnButtonClick = () => {
    switch (props.mode) {
      case 0:
        props.setMode(1);
        break;
      case 1:
        props.setMode(0);
        break;
      default:
        props.setMode(0);
        break;
    }
  };
  return (
    <StyledHeader visibility={props.visibility}>
      <Container>
        <div>
          <Typography>プログラミング基礎 実技テスト</Typography>
        </div>
        <div>
          <Button color="primary" onClick={handleOnButtonClick}>
            UPLOAD
          </Button>
        </div>
      </Container>
    </StyledHeader>
  );
};

export default Header;
