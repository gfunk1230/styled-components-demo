import styled, { css } from 'styled-components';

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576,
}

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {});

/* 
if no css grid col span is set on default, 
desktop, tablet, phone it fallsback to 12 
*/

export default styled.div `
  background-color: ${(props) => props.bgColor ? props.bgColor : 'transparent'};
  ${media.phone`grid-column: span ${(props) => props.phoneColumnSpanCount ? props.phoneColumnSpanCount : 12}`}
  ${media.tablet`grid-column: span ${(props) => props.tabletColumnSpanCount ?  props.tabletColumnSpanCount : 12}`}
  ${media.desktop`grid-column: span ${(props) => props.desktopColumnSpanCount ?  props.desktopColumnSpanCount : 12}`}
  
`;


