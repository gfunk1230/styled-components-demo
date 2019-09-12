import styled from "styled-components";
import { buttonResize, buttonColor } from "./mixins";
import { padding10 } from "../tokens";

export const PrimaryButton = styled.button`
  cursor: pointer;
  display: inline-block;
  font-weight: bold;
  letter-spacing: 2px;
  line-height: 1;
  text-align: center;
  vertical-align: middle;
  color: rgb(255, 255, 255);
  border-width: 0px;
  padding: ${padding10} 0;
  outline: none;
  font-size: 13px;
  width: 115px;
`;


export const PrimaryCustomizableButton = styled.button`
  border-radius: ${props => (props.radius ? props.radius : "5px")};
  ${props => props.size && buttonResize(props.size)};
  ${props => props.color && buttonColor(props.color)};
`;
