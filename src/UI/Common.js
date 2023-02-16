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
    }

    .new-sponsors__button {
      background-color: #7FE7D7;
      border: 0px;
      border-radius: 7px;
      font-size: 2rem;
      font-weight: normal;
      padding: 1rem;
      width: max(13rem, 12vw);
    }
  }
`;

const StyledSocials = styled.div`
  margin-top 5rem;
  margin-bottom: 5rem;

  .title_div {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    padding: 1rem;
    font-size: max(2rem, 2vw);

  }
  
  .social_logos {
    display: flex;
    // flex-wrap: wrap;
    // margin-inline: 2rem 30rem;
    // margin-block: 5rem;
    // justify-content: space-around;
    justify-content: center;
    margin-top: 2rem;
    height: auto;
  }
  
  .slack_logo {
    height: max(7rem, 7vw);
    margin-top: -2rem;
  }
  
  .meetup_div {
    margin-top: -2rem;
    margin-left: 2rem;
    margin-right: 2rem;
    display: flex;
    align-items: center;

    width: min(15rem, 15vw);

    font-size: max(2rem, 2vw);
  }
  
  .meetup_logo {
    margin: 0px;
    height: max(5rem, 5vw);
  }
  
  .youtube_logo {
    // margin-top: .25rem;
    // margin-left: 2rem;
    // margin-left: 2rem;
    height: max(3.5rem, 3.5vw);
  }

  @media (max-width: 485px) {
    .social_logos {
      // display: grid;
      // justify-content: center;
      display: flex;
      flex-wrap: wrap;
    }

    .slack_logo {
      margin-left: 4rem;
      margin-bottom: 1rem;
      margin-top: -2rem;
    }

    .meetup_div {
      width: 12rem;
    }

    .youtube_logo {
      height: 3.5rem;
      margin-top: 1rem;
      margin-left: 5rem;
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

const StyledMemberSpotlight = styled.div`
  background-color: #000;
  color: #fff;
  margin-top: 5rem;

  height: auto;
  
  .Member_title {
    display: flex;
    justify-content: center;
    
    font-size: max(25px, 2vw);
    font-weight: medium;
    margin-top: 5rem;
    padding: 3rem;
    
  }

  .photo_frame {
    border-radius: 7px;
    padding: 1rem;
    min-height: px;
    background-color: #7FE7D7;
    height: min(24rem, 24vw);
    width: min(25rem, 25vw);
  }
  
  .photo_frame_black {
    background-color: #000;
    display: flex;
    border-radius: 7px;

    width: clamp(15rem, 100%, 30rem);
    height: min(24rem, 24vw);

    

  }
  
  .member_photo {
    margin-left: max(1.5rem, 1.5vw);
    margin-top: max(1.5rem, 1.5vw);
    margin-right: max(1.5rem, 1.5vw);
    margin-bottom: max(1.5rem, 1.vw);

    height: min(20rem, 20vw);
  
    border-radius: 5px;
  }
  
  .Member_Over {
    display: flex;
    justify-content: center;
  }
  
  .Member_div {
    background-color: #000;
    display: flex;

    justify-content: center;

    height: 30rem;
    margin-bottom: 5rem;

    
    
    
    @media (max-width: 885px) {
      display: grid;
      align-items: center;
      min-width: 320px;
      height: auto;
      
      .photo_frame {
        margin-bottom: 2rem;

        height: clamp(2rem, 100%, 10rem);
        width: clamp(6rem, 100%, 10rem);
        
        min-height: 10rem;
        
      }
      
      .photo_frame_black {
        width: clamp(6rem, 100%, 10rem);
        height: clamp(6rem, 100%, 10rem);
        max-height: 10rem;
        min-height: 5rem;

      }
      
      .member_photo {
        margin-left: max(1rem, .5vw);
        margin-top: max(1rem, .5vw);
        margin-right: max(1rem, 1vw);
        margin-bottom: max(1rem, 1vw);
        
        
        // height: min(15rem, 15vw);

        width: clamp(6rem, 100%, 10rem);
        height: clamp(4rem, 100%, 8rem);
        border-radius: 5px;
      }
      

      .Member_frame {
        margin-left: 0rem;
        margin-bottom: 8rem;

        height: max(25rem, 25vw);
        min-width: 15rem;
      }
      
      .member_black_frame {
        margin-inline: 0px;
        margin-left: 0rem;
        min-width: 13rem;

        height: max(20rem, 20vw);
        min-height: 22.8rem;
      }


      .bio {
        font-size: max(14px, 1.5vw);
        height: auto;
      }  
    }
  }
  
  .member_name {
    margin-bottom: max(2rem, 2vw);
    font-size: 20px;
  }
  
  .Member_frame {
    background-color: #000;
    margin-inline: clamp(2rem, 100%, 5rem);
    
    padding: 1rem;
    
    height: min(25rem, 37vw);
    width: min(40rem, 40vw); 
    
    min-height: 25rem;
    max-height: 50rem;
    min-width: 30rem;

    background-color: #7FE7D7;
    border-radius: 7px;
  }

  .member_black_frame {
    padding: max(1rem, 1vw);
    background-color: #000;
    border-radius: 7px;
    max-width: 40rem;
    min-height: 22.5rem;
    max-height: 23rem
    
    
  }
  
  .bio {
    font-size: min(20px, 2vw);
    
  }
  
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

export { StyledModule, StyledHeader, StyledWelcome, StyledSponsor, StyledSocials, StyledGallery, StyledMemberSpotlight, StyledFooter, FlexDiv, StyledImg };

