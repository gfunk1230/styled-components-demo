import { h } from "preact";
import style from "./style";
import styled from 'styled-components';
import GlobalStyles from "../../components/globalStyles/";

import { Button, PrimaryButton } from "../../components/primaryButton/button";
import GridParent from "../../components/Grid/gridParent";
import GridChild from "../../components/Grid/gridChild";
import { media } from "../../components/utils/mediaQueries";

import { radius5, radius10, radius25 } from "../../components/tokens";

const HeaderResponsive = styled.h3`
  ${media.phone`color: green;`}
  ${media.tablet`color: red;`}
  ${media.desktop`color: purple;`}
`;

const Home = () => (
  <main class={style.home}>
    <GlobalStyles/>
    <section>
      <h2>Primary Button Samples</h2>
      <p>
        <strong>Props :</strong> radius, disabled , size, color
      </p>
      <div class={style.buttonWrapper}>
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
      </div>
    </section>

    <section>
      <h2>Grid System Samples</h2>
      <GridParent gridTemplateColumns={12} bgColor="red">
        <GridChild desktop={2} bgColor="green">
          <img src="https://placeimg.com/550/550/any"/>
          <p>2 column div on desktop</p>
        </GridChild>
        <GridChild desktop={2} bgColor="green">
          <img src="https://placeimg.com/550/550/any"/>
          <p>2 column div on desktop</p>
        </GridChild>
        <GridChild desktop={2} bgColor="green">
          <img src="https://placeimg.com/550/550/any"/>
          <p>2 column div on desktop</p>
        </GridChild>
        <GridChild desktop={2} bgColor="green">
          <img src="https://placeimg.com/550/550/any"/>
          <p>2 column div on desktop</p>
        </GridChild>
        <GridChild desktop={2} bgColor="green">
          <img src="https://placeimg.com/550/550/any"/>
          <p>2 column div on desktop</p>
        </GridChild>
        <GridChild desktop={2} bgColor="green">
          <img src="https://placeimg.com/550/550/any"/>
          <p>2 column div on desktop</p>
        </GridChild>
      </GridParent>
    </section>

    <section>
      <HeaderResponsive>
        Bacon ipsum dolor amet ground round cow short ribs ham hock boudin buffalo, kielbasa drumstick beef ribs. Pancetta chicken venison, flank short ribs turducken ham hock prosciutto. Salami boudin ball tip capicola, venison landjaeger buffalo swine short loin pastrami jerky. Shoulder sausage rump tongue ball tip brisket drumstick pastrami beef ribs turkey cow pork belly filet mignon hamburger ribeye. Short ribs spare ribs tri-tip kielbasa turducken chuck.
      </HeaderResponsive>
    </section>
  </main>
);

export default Home;
