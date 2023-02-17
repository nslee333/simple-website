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
    font-weight: 100;
    font-style: italic;
    font-size: max(2rem, 2vw);
  }

  
  .StyledSponsor__logos {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  .uptech_logo {
    max-height: 64px;
    margin: 1rem;
  }

  .TAO_logo {
    height: max(4rem, 4vw);
    max-width: 300px;
    margin: 1rem;
  }
  
  .ladd_logo {
    height: max(6rem, 6vw);
    margin: 1rem;
  }
  
  .codepen_logo {
    margin-top: max(2rem, 1.5vw);
    height: max(2.5rem, 2.5vw);
    margin-left: 1rem;
    margin-right: 1rem;
    margin-bottom: 1rem;
  }


  .StyledSponsor__new-sponsors {
    padding: max(2rem, 2vw);
    display: flex;
    justify-content: space-around;
    font-weight: 300;
    font-style: italic;
  }

  .new-sponsors__div {
    font-size: max(1.5rem, 1.5vw);
    font-style: italic;
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
      font-style: normal;
      font-size: 2rem;
      font-weight: normal;
    }
    
    .sponsors_a {
      display: flex;
      justify-content: center;
      padding-left: 2rem;
      padding: 1rem;
      background-color: #7FE7D7;
      border: 0px;
      border-radius: 7px;
      width: 13rem;
      box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
      &:hover,
      &:focus,
      &:active,
      &:visited {
        box-shadow: none;
        transform: translate(1px, 1px);
  }
    }
  }
`;


const StyledGallery = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;

  .gallery_frame {
    border-radius: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;

    width: clamp(200px, 100%, 1300px);
  }

  .gallery_image {
    width: clamp(100px, 95%, 1000px);
    height: clamp(100px, 95%, 1300px);
    border-radius: 7px;
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

export { 
  StyledModule, 
  StyledHeader, 
  StyledWelcome, 
  StyledSponsor,
  StyledGallery,  
  FlexDiv, 
  StyledImg 
};

