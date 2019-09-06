import { h } from 'preact';
import style from './style';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;


const Home = () => (
	<div class={style.home}>
		<Wrapper>
			<Title>
				Hello World!
			</Title>
		</Wrapper>
	</div>
);

export default Home;
