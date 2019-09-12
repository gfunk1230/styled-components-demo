import { h } from "preact";
import style from "./style";
import styled from "styled-components";

import { PrimaryButton, PrimaryCustomizableButton } from "../../components/primaryButton/button";
import { radiusOne, radiusTwo, radiusThree } from "../../components/tokens";

const Home = () => (
  <main class={style.home}>
    <h1>Primary Button Samples</h1>
    <p>
      <strong>Props :</strong> radius, disabled , size, color
    </p>
    <section class={style.buttonWrapper}>
      <PrimaryCustomizableButton as={PrimaryButton} size="sm" color="red" radius={radiusOne}>
        Primary
      </PrimaryCustomizableButton>
      <PrimaryCustomizableButton as={PrimaryButton} size="md" color="orange" radius={radiusTwo}>
        Primary
      </PrimaryCustomizableButton>
      <PrimaryCustomizableButton as={PrimaryButton} size="lg" color="blue" radius={radiusThree}>
        Primary
      </PrimaryCustomizableButton>
      <PrimaryCustomizableButton as={PrimaryButton} size="lg" color="blue" radius={radiusThree} disabled>
        Disabled
      </PrimaryCustomizableButton>
    </section>
  </main>
);

export default Home;
