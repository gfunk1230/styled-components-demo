import styled from 'styled-components';

export default styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.gridTemplateColumns}, 1fr);
  grid-gap: 0 25px;
  background-color: ${(props) => props.bgColor ? props.bgColor : 'transparent'};
`;

