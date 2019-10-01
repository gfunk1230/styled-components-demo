import styled, { css } from 'styled-components';

// Breakpoint sizes
const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576,
}

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((obj, platform) => {
  obj[platform] = (...args) => css`
    @media (min-width: ${sizes[platform] / 16}rem) {
      ${css(...args)}
    }
  `
  return obj
}, {});

/* 
if no css grid col span is set for 
desktop, tablet, phone it fallsback to 12 columns
*/

export default styled.div `
  background-color: ${(props) => props.bgColor ? props.bgColor : 'transparent'};
  grid-column: span 12;
  ${media.phone`grid-column: span ${(props) => props.phone ? props.phone : 12}`}
  ${media.tablet`grid-column: span ${(props) => props.tablet ?  props.tablet : 12}`}
  ${media.desktop`grid-column: span ${(props) => props.desktop ?  props.desktop : 12}`}
  
`;


