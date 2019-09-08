import { css } from "styled-components";
import { red, blue, orange, redLight, blueLight, orangeLight } from "../tokens";

const SM = {
  resize: css`
    font-size: 13px;
    width: 115px;
  `
};

const MD = {
  resize: css`
    font-size: 15px;
    width: 143px;
  `
};

const LG = {
  resize: css`
    font-size: 17px;
    width: 153px;
  `
};

export const buttonResize = size => {
  if (size === "sm") {
    return SM.resize;
  }

  if (size === "md") {
    return MD.resize;
  }

  if (size === "lg") {
    return LG.resize;
  }
};

const BLUE = {
  main: blue,
  hover: blueLight,
  focus: blueLight,
  active: blueLight,
  disabled: blueLight
};

const RED = {
  main: red,
  hover: redLight,
  focus: redLight,
  active: redLight,
  disabled: redLight
};

const ORANGE = {
  main: orange,
  hover: orangeLight,
  focus: orangeLight,
  active: orangeLight,
  disabled: orangeLight
};

export const buttonHoverStates = ({ main, hover, focus, active, disabled }) => {
  return css`
    background-color: ${main};

    &:hover {
      background-color: ${hover};
    }
    &:focus {
      background-color: ${focus};
    }
    &:active,
    &.active {
      background-color: ${active};
    }
    &.disabled,
    &[disabled] {
      opacity: 0.5;
      background-color: ${disabled};
      cursor: not-allowed;
    }
  `;
};

export const buttonColor = color => {
  if (color === "red") {
    return css`
      ${buttonHoverStates(RED)}
    `;
  }

  if (color === "orange") {
    return css`
      ${buttonHoverStates(ORANGE)}
    `;
  }

  if (color === "blue") {
    return css`
      ${buttonHoverStates(BLUE)}
    `;
  }
};
