import { css } from "styled-components";
import { 
  sl_colorPrimary, 
  gh_colorInteractive, 
  colorWarning, 
  sl_colorPrimaryDarker, 
  gh_colorInteractiverDarker, 
  colorWarningDarker,
  colorPoi 
} from "../tokens";

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
  main: gh_colorInteractive,
  hover: gh_colorInteractiverDarker,
  focus: gh_colorInteractiverDarker,
  active: gh_colorInteractiverDarker,
  disabled: colorPoi
};

const RED = {
  main: sl_colorPrimary,
  hover: sl_colorPrimaryDarker,
  focus: sl_colorPrimaryDarker,
  active: sl_colorPrimaryDarker,
  disabled: colorPoi
};

const ORANGE = {
  main: colorWarning,
  hover: colorWarningDarker,
  focus: colorWarningDarker,
  active: colorWarningDarker,
  disabled: colorPoi
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
      opacity: 0.7;
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
