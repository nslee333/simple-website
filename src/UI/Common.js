import styled from "styled-components";

const StyledModule = styled.div`
  
`;

const StyledHeader = styled.header`
display: flex;
justify-content: space-around;

height: min(30vw, 12rem);
width: screen.width;
padding: 1rem;


.BendJSLogo {
  border-radius: min(1rem, 2vw);
  width: min(9rem, 25vw);
  height: auto;
  
  margin-right: min(1rem, 50vw);
  margin-top: min(3rem, 2vw);

}

.SocialsLink {
  display: flex;
  justify-content: center;
  align-items: center;

  width: min(17rem, 100vw);
  height: min(4rem, 17vw);
  font-size: min(3rem, 10vw);
  
  margin-right: min(1rem, 50vw);
  margin-top: min(6rem, 6vw);

}
`;

const StyledWelcome = styled.div`
  display: flex;
  justify-content: center;
  margin-top: min(13rem, 13vw);
  height: auto;
  font-size: max(2rem, 2vw);
  
  .StyledWelcome__Div {
    display: columns;

    align-items: center;

    width: min(70rem, 70vw);
    min-width: 22rem; 
  }
  

  h4, h5 {
    margin: max(1rem, 1vw);
  }

  h4 {
    font-style: italic;
    font-weight: bold;
  }

`;

const StyledSponsor = styled.div`
  background: #ffffff;
  margin-top: min(14rem, 14vw);
  height: auto;
  
  
  .StyledSponsor__title {
    display: flex;
    justify-content: center;
    min-width: 5rem;
    padding: 3.5rem;
    font-style: italic;
    font-weight: bold;
    font-size: max(2rem, 2vw);
  }

  
  .StyledSponsor__logos {
    display: flex;
    justify-content: space-around;
    padding: max(2rem, 2vw);
  }

  .uptech_logo {
    max-height: 64px;
  }

  .TAO_logo {
    height: max(4rem, 4vw);
    max-width: 300px;
  }
  
  .ladd_logo {
    height: max(6rem, 6vw);
  }
  
  .codepen_logo {
    margin-top: max(2rem, 1vw);
    height: max(2.5rem, 2.5vw);
  }


  .StyledSponsor__new-sponsors {
    padding: max(2rem, 2vw);
    display: flex;
    justify-content: space-around;
  }

  .new-sponsors__div {
    font-size: max(1.5rem, 1.5vw);
    justify-content: center;
    margin: 1rem;
    padding-inline: 0.5rem;
    padding-block: 0.5rem;
    max-width: 35rem;

    .button_div {
      display: flex;
      justify-content: center;
      margin: 1rem;
      min-width: 15rem;
    }

    .new-sponsors__button {
      background-color: #7FE7D7;
      border: 0px;
      border-radius: 7px;
      font-size: 1.5rem;
      padding: 0.5rem;
      width: max(10rem, 10vw);
    }
  }
  
  @media (max-width: 885px) {
    .StyledSponsor__title {
      padding: max(1rem, 1vw);
      margin: 1rem;
    }

    .StyledSponsor__logos {
      display: grid;
      justify-content: center;
      padding: 0;
    }

    .uptech_logo {
      margin: 1rem;
    }

    .TAO_logo {
      margin: 1rem;
    }

    .ladd_logo {
      margin: 1rem;
    }
    
    .codepen_logo {
      margin: 1rem;
    }

    .new_sponsors {
      margin: 0rem;
      padding: 0;
    }  
  }
`;

const StyledSocials = styled.div`


`;

const StyledFooter = styled.footer`
  padding: 1rem 0 3rem 1rem;
  margin-left: calc(50% - 700px / 2);
  margin-top: 2rem;
  min-height: 50px;

`;

const FlexDiv = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  align-items: ${({ align }) => align || "center"};
  justify-content: ${({ justify }) => justify || "center"};
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => (height ? height : "100%")};
  // margin: 5px;
`;

const StyledImg = styled.img`
  width: 5vw;
  height: auto;
  margin-left: 10px;
`;

export { StyledModule, StyledHeader, StyledWelcome, StyledSponsor, StyledSocials, StyledFooter, FlexDiv, StyledImg };

