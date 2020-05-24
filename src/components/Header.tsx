import React from "react";
import styled from "styled-components";
import { Button, Typography } from "@material-ui/core";

const StyledHeader = styled.div`
  height: "3rem";
  width: 100vw;
  padding: 0 1rem 0 1rem;
  border-width: 0 0 2px 0;
  &::after {
    color: white;
    content: ".";
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
  return (
    <StyledHeader>
      <Container>
        <div>
          <Typography>プログラミング基礎 実技テスト</Typography>
        </div>
        <div>
          <Button color="primary" style={{ marginRight: "2rem" }}>
            UPLOAD
          </Button>
        </div>
      </Container>
    </StyledHeader>
  );
};

export default Header;
