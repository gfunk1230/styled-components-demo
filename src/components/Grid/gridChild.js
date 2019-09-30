import styled, { css } from 'styled-components';

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576,
}

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
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
  grid-column: span ${(props) => props.defaultColumnSpanCount ? props.defaultColumnSpanCount : 12};
  ${media.desktop`grid-column: span ${(props) => props.desktopColumnSpanCount ?  props.desktopColumnSpanCount : 12}`}
  ${media.tablet`grid-column: span ${(props) => props.tabletColumnSpanCount ?  props.tabletColumnSpanCount : 12}`}
  ${media.phone`grid-column: span ${(props) => props.phoneColumnSpanCount ? props.phoneColumnSpanCount : 12}`}
`;


