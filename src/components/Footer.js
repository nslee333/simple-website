import React from "react";
import { StyledFooter, FlexDiv, StyledImg } from "../UI/Common";

export default function Footer(props) {
  return (
    <StyledFooter>
      <FlexDiv justify="flex-start" align="flex-start" direction="column">
        <FlexDiv justify="flex-start" align="center">
          Our little JavaScript community in Bend, Oregon. Thank you so much to our excellent sponsors!
        </FlexDiv>
        <FlexDiv justify="flex-start" align="center">
          <a href="https://www.codepen.io" target="_blank">
            <StyledImg src="/images/codepen_logo.png" alt="Codepen" />
          </a>
          <a href="https://www.uptechstudio.com" target="_blank">
            <StyledImg src="/images/uptech_logo.png" alt="Uptech Studio" />
          </a>
        </FlexDiv>
      </FlexDiv>
    </StyledFooter>
  );
}
