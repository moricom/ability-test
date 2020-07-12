import React from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";
import { RootState } from "../rootReducer";

import { Button, Typography } from "@material-ui/core";

const StyledHeader = styled.div<{ visibility: boolean }>`
  height: 3rem;
  width: 100%;
  padding: 0 1rem 0 1rem;
  visibility: ${(props) => (props.visibility ? "visible" : "hidden")};
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

const Header: React.FC = () => {
  const { context } = useSelector((state: RootState) => state.headerContext);

  return (
    <StyledHeader visibility={context.isShow}>
      <Container>
        <div>
          <Typography>プログラミング基礎 実技テスト</Typography>
        </div>
        <div>
          <Button color="primary">UPLOAD</Button>
        </div>
      </Container>
    </StyledHeader>
  );
};

export default Header;
