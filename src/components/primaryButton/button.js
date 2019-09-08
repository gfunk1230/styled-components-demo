import styled from "styled-components";
import { buttonResize, buttonHoverColor } from "../mixins/buttons";
import { padding10 } from "../tokens";

export const PrimaryButton = styled.button`
  background-color: ${(props) => props.color};
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
  border-radius: ${(props) => props.radius ? props.radius : '5px' };
  padding: ${padding10} 0;
  outline: none;
  ${(props) => buttonResize(props.size)}
  ${(props) => buttonHoverColor(props.color)};
`;

