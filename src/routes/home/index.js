import { h } from "preact";
import style from "./style";
import GlobalStyles from "../../components/globalStyles/";

import { Button, PrimaryButton } from "../../components/primaryButton/button";
import GridParent from "../../components/Grid/gridParent";
import GridChild from "../../components/Grid/gridChild";


import { radius5, radius10, radius25 } from "../../components/tokens";

const Home = () => (
  <main class={style.home}>
    <GlobalStyles/>
    <h2>Primary Button Samples</h2>
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

    <br></br>
    <br></br>
    <br></br>

    <section>
      <h2>Grid System Samples</h2>
      <GridParent gridTemplateColumns={12} bgColor="red">
        <GridChild desktopColumnSpanCount={2} bgColor="green">
          <img src="https://placeimg.com/550/550/any"/>
          <p>2 column div on desktop</p>
        </GridChild>
        <GridChild desktopColumnSpanCount={2} bgColor="green">
          <img src="https://placeimg.com/550/550/any"/>
          <p>2 column div on desktop</p>
        </GridChild>
        <GridChild desktopColumnSpanCount={2} bgColor="green">
          <img src="https://placeimg.com/550/550/any"/>
          <p>2 column div on desktop</p>
        </GridChild>
        <GridChild desktopColumnSpanCount={2} bgColor="green">
          <img src="https://placeimg.com/550/550/any"/>
          <p>2 column div on desktop</p>
        </GridChild>
        <GridChild desktopColumnSpanCount={2} bgColor="green">
          <img src="https://placeimg.com/550/550/any"/>
          <p>2 column div on desktop</p>
        </GridChild>
        <GridChild desktopColumnSpanCount={2} bgColor="green">
          <img src="https://placeimg.com/550/550/any"/>
          <p>2 column div on desktop</p>
        </GridChild>
      </GridParent>
    </section>
  </main>
);

export default Home;
