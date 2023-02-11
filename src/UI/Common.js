import styled from "styled-components";

const StyledModule = styled.div`
  // background: white;
  // padding: 2rem;
  // border-radius: 5px;
  // box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);
  // min-height: 250px;
  // display: flex;
  // flex-direction: column;
  // .heading {
  //   font-size: 1.17em;
  //   color: red;
  //   text-transform: uppercase;
  // }
  // .subheading {
  //   margin-bottom: 1rem;
  //   font-size: 1.5em;
  //   font-weight: bold;
  // }
  // .button {
  //   margin-top: auto;
  // }
`;

const StyledHeader = styled.header`

border: 2px solid white;
display: flex;
justify-content: space-around;

height: min(30vw, 12rem);
// width: min(rem, 1000vw);
width: 133.5rem;
padding: 1rem;



.BendJSLogo {
  border-radius: min(1rem, 2vw);
  width: min(9rem, 25vw);
  height: auto;
  
  
  margin-right: min(1rem, 50vw);
  margin-top: min(1rem, 2vw);

  

  // @media (max-width: 700px) {
  //   // margin-left: 8rem;
  //   // margin-top: 2rem;
  // }
}

.SocialsLink {
  display: flex;
  justify-content: center;
  align-items: center;

  width: min(17rem, 100vw);
  height: min(4rem, 17vw);
  font-size: min(3rem, 10vw);
  
  margin-right: min(1rem, 50vw);
  margin-top: min(4rem, 6vw);

}
`;

const StyledWelcome = styled.div`

  margin-top: min(10rem, 10vw);



  .StyledWelcome__Div {
    border: 2px solid white;
    display: columns;
    align-items: center;
    width: min(70rem, 70vw);
    width: 80rem;
  }
  
  height: auto;


  font-size: min(3rem, 3vw);

  padding: min(1rem, 1vw);
  border: 2px solid white;

  h4, h5 {
    margin: max(1rem, 1vw);
  }

  h4 {
    font-style: italic;
    font-weight: bold;
  }

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

export { StyledModule, StyledHeader, StyledWelcome, StyledFooter, FlexDiv, StyledImg };

