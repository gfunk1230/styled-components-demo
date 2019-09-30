import { h } from "preact";
import style from "./style";
import GlobalStyles from "../../components/globalStyles/";

import { Button, PrimaryButton } from "../../components/primaryButton/button";
import { radius5, radius10, radius25 } from "../../components/tokens";

const Home = () => (
  <main class={style.home}>
    <GlobalStyles/>
    <h1>Primary Button Samples</h1>
    <p>
      <strong>Props :</strong> radius, disabled , size, color
    </p>
    <section class={style.buttonWrapper}>
      <PrimaryButton as={Button} size="sm" color="blue" radius={radius5}>
        Primary
      </PrimaryButton>
      <PrimaryButton as={Button} size="md" color="orange" radius={radius10}>
        Primary
      </PrimaryButton>
      <PrimaryButton as={Button} size="lg" color="blue" radius={radius25}>
        Primary
      </PrimaryButton>
      <PrimaryButton as={Button} size="lg" color="blue" radius={radius10} disabled>
        Disabled
      </PrimaryButton>
    </section>
  </main>
);

export default Home;
