import * as React from "react";
import { render } from "react-dom";
import styled, { css } from "styled-components";

const CommonStyle = css`
  margin: 0;
  padding: 0;
  width: 100%;
  border: 0;
  background-color: transparent;
  text-decoration: none;
  letter-spacing: inherit;
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
  cursor: pointer;
`;

const Title = styled.h1`
  ${CommonStyle}
`;

const Sub = styled.p`
  ${CommonStyle}
`;

const Sub1 = styled.p`
  ${CommonStyle}
`;
const Sub2 = styled.p`
  ${CommonStyle}
`;
const Sub3 = styled.p`
  ${CommonStyle}
`;
const Sub4 = styled.p`
  ${CommonStyle}
`;

const App = () => (
  <>
    <Title>hogehoge</Title>
    <Title>hogehoge</Title>
    <Sub>foooo</Sub>
    <Sub1>foooo</Sub1>
    <Sub2>foooo</Sub2>
    <Sub3>foooo</Sub3>
    <Sub4>foooo</Sub4>
  </>
);

render(<App />, document.getElementById("app"));
