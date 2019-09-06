import { css } from "styled-components";
import { red, blue, orange, redLight, blueLight, orangeLight } from "../tokens";

const SM = {
  sizeOverRides: css`
    font-size: 13px;
    width: 115px;
  `
};

const MD = {
  sizeOverRides: css`
    font-size: 15px;
    width: 143px;
  `
};

const LG = {
  sizeOverRides: css`
    font-size: 17px;
    width: 153px;
  `
};

export const buttonResize = size => {
  if (size === "sm") {
    return SM.sizeOverRides;
  }

  if (size === "md") {
    return MD.sizeOverRides;
  }

  if (size === "lg") {
    return LG.sizeOverRides;
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
      background-color: ${disabled};
    }
  `;
};

export const buttonHoverColor = color => {
  if (color === "red") {
    const styles = buttonHoverStates(RED);
    return css`
      ${styles}
    `;
  }

  if (color === "orange") {
    const styles = buttonHoverStates(ORANGE);
    return css`
      ${styles}
    `;
  }

  if (color === "blue") {
    const styles = buttonHoverStates(BLUE);
    return css`
      ${styles}
    `;
  }
};
