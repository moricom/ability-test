import React, { ReactComponentElement, ReactElement } from "react";
import styled from "styled-components";

import MobileStepper from "@material-ui/core/MobileStepper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { List, ListItem, ListItemText } from "@material-ui/core";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

const StyledCard = styled(Card)`
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  & > div {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: calc(100% - 3rem);
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface ContentProps {
  showHelp: boolean;
  setShowHelp: Function;
  color: boolean;
  setColor: Function;
}

const Item = styled.div<{ select?: boolean }>`
  position: relative;
  padding: 1rem 0 1rem 0;
  border: solid #bdbdbd;
  border-width: 1px;
  background: ${(props) => (props.select ? "#E3F2FD" : "none")};
`;

const Icon = styled(InfoOutlinedIcon)<{ select?: boolean }>`
  color: ${(props) => (props.select ? "gray" : "black")};
  position: absolute;
  top: 0;
  left: 0;
  width: 1rem;
  height: 1rem;
`;

const tutorialSteps = [
  {
    title: "チュートリアル",
    subTitle: "初めに",
    description: "実技テストを行います。全部で16問あります。",
    content: function () {
      return (
        <List>
          {[
            ["HTML", "5問"],
            ["JS", "10問"],
            ["Ajax", "1問"],
          ].map(([category, qNum]) => (
            <ListItem key={qNum}>
              <ListItemText>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <div style={{ width: "50%", textAlign: "center" }}>
                    {category}
                  </div>
                  <div style={{ width: "50%", textAlign: "center" }}>
                    {qNum}
                  </div>
                </div>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      );
    },
  },
  {
    title: "チュートリアル",
    subTitle: "画面の説明",
    description:
      "問題ボックスの左上にあるアイコンを押すと問題文を見ることができます。",
    content: function (props: ContentProps) {
      return (
        <Item select={props.showHelp}>
          <Icon
            select={props.showHelp}
            onClick={() => {
              props.setShowHelp(!props.showHelp);
            }}
          />
          {props.showHelp ? <p>文字を表示する</p> : <p>テキスト</p>}
        </Item>
      );
    },
  },
  {
    title: "チュートリアル",
    subTitle: "画面の説明",
    description: "全ての問題ボックスを実際に実装してください",
    content: function (props: ContentProps) {
      return (
        <Item select={props.showHelp}>
          <Icon
            select={props.showHelp}
            onClick={() => {
              props.setShowHelp(!props.showHelp);
            }}
          />
          {props.showHelp ? (
            <p>文字を表示する</p>
          ) : (
            <>
              <p style={props.color ? { color: "#4CAF50" } : {}}>テキスト</p>
              <button
                onClick={() => {
                  props.setColor(!props.color);
                }}
              >
                Button
              </button>
            </>
          )}
        </Item>
      );
    },
  },
  {
    title: "チュートリアル",
    subTitle: "完了条件",
    description:
      "問題画面と全く同じものが完成したら終了です。タイトル部分も忘れずに！",
    content: function (props: ContentProps) {
      return (
        <Item select={props.showHelp}>
          <Icon
            select={props.showHelp}
            onClick={() => {
              props.setShowHelp(!props.showHelp);
            }}
          />
          {props.showHelp ? (
            <p>カテゴリー内の全ての問題文が表示されます</p>
          ) : (
            <p>Ajax</p>
          )}
        </Item>
      );
    },
  },
  {
    title: "チュートリアル",
    subTitle: "始める",
    description: "ボタンを押して問題画面へ",
    content: function (props: ContentProps) {
      return (
        <div style={{ padding: "1rem" }}>
          <Button variant="outlined" size="large" color="primary">
            スタート
          </Button>
        </div>
      );
    },
  },
];

const Tutorial: React.FC = () => {
  const [activeStep, setActiveStep] = React.useState<number>(0);
  const maxSteps: number = tutorialSteps.length;
  const [showHelp, setShowHelp] = React.useState<boolean>(false);
  const [color, setColor] = React.useState<boolean>(false);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const contentProp: ContentProps = {
    showHelp,
    setShowHelp,
    color,
    setColor,
  };

  return (
    <Wrapper>
      <StyledCard>
        <div>
          <CardHeader
            title={tutorialSteps[activeStep].title}
            subheader={tutorialSteps[activeStep].subTitle}
          />
        </div>
        <div>
          <CardContent>
            <Typography>{tutorialSteps[activeStep].description}</Typography>
            <div>{tutorialSteps[activeStep].content(contentProp)}</div>
          </CardContent>
        </div>
        <div>
          <MobileStepper
            style={{ background: "none" }}
            steps={maxSteps}
            position="static"
            variant="text"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next
                <KeyboardArrowRight />
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                <KeyboardArrowLeft />
                Back
              </Button>
            }
          />
        </div>
      </StyledCard>
    </Wrapper>
  );
};

export default Tutorial;
