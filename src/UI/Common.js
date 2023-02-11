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

`;

const StyledFooter = styled.footer`
  padding: 1rem 0 3rem 1rem;
  margin-left: calc(50% - 700px / 2);
  margin-top: 2rem;
  min-height: 50px;

  @media (max-width: 700px) {
    margin-left: 1rem;
  }
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

export { StyledModule, StyledHeader, StyledWelcome, StyledSponsor, StyledFooter, FlexDiv, StyledImg };

