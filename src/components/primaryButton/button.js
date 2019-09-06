import styled from "styled-components";
import { buttonResize, buttonHoverColor } from "../mixins/buttons";
import { padding10 } from "../tokens";

export const PrimaryButton = ({
  text = "Click me",
  radius = "100px",
  color = "red",
  size = "115px;"
}) => {
  const Btn = styled.button`
    background-color: ${color};
    cursor: pointer;
    display: inline-block;
    font-weight: 700;
    letter-spacing: 2px;
    line-height: 1;
    text-align: center;
    user-select: none;
    vertical-align: middle;
    color: rgb(255, 255, 255);
    border-width: 0px;
    border-radius: ${radius};
    padding: ${padding10} 0;
    outline: none;
    width: ${size};
    ${buttonResize(size)}
    ${buttonHoverColor(color)};
  `;

  return <Btn>{text}</Btn>;
};
