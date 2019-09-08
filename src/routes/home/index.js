import { h } from 'preact';
import style from './style';
import styled from 'styled-components';

import { PrimaryButton } from "../../components/primaryButton/button";
import { radiusOne, radiusTwo, radiusThree } from "../../components/tokens";


const Home = () => (
	<main class={style.home}>
		<h1>Primary Button Samples</h1>
		<p>
			<strong>Props :</strong> text, radius, color, size
		</p>
		<section class={style.buttonWrapper}>
			<PrimaryButton 
				size="sm" 
				color="red" 
				radius={radiusOne} 
			>
				Primary
			</PrimaryButton>
			<PrimaryButton
				size="md"
				color="orange"
				radius={radiusTwo}
			>
				Primary
			</PrimaryButton>
			<PrimaryButton
				size="lg"
				color="blue"
				radius={radiusThree}
			>
				Primary
			</PrimaryButton>
		</section>
	</main>
);

export default Home;
