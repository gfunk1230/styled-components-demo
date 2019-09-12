import { h } from "preact";
import style from "./style";

import { Button, PrimaryButton } from "../../components/primaryButton/button";
import { radiusOne, radiusTwo, radiusThree } from "../../components/tokens";

const Home = () => (
  <main class={style.home}>
    <h1>Primary Button Samples</h1>
    <p>
      <strong>Props :</strong> radius, disabled , size, color
    </p>
    <section class={style.buttonWrapper}>
      <PrimaryButton as={Button} size="sm" color="red" radius={radiusOne}>
        Primary
      </PrimaryButton>
      <PrimaryButton as={Button} size="md" color="orange" radius={radiusTwo}>
        Primary
      </PrimaryButton>
      <PrimaryButton as={Button} size="lg" color="blue" radius={radiusThree}>
        Primary
      </PrimaryButton>
      <PrimaryButton as={Button} size="lg" color="blue" radius={radiusThree} disabled>
        Disabled
      </PrimaryButton>
    </section>
  </main>
);

export default Home;
