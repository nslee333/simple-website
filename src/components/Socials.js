import slack_logo from '../images/slack_logo.webp'
import meetup_logo from '../images/Meetup_Logo.png'
import youtube_logo from '../images/Youtube_logo.svg.png'
import styled from 'styled-components';

const StyledSocials = styled.div`
  margin-top 5rem;
  margin-bottom: 5rem;

  .title_div {
    justify-content: center;
    display: flex;

    margin-top: 1rem;
    padding: 1rem;

    font-size: max(2rem, 2vw);
  }
  
  .social_logos {
    justify-content: space-evenly;
    align-items: space-evenly;
    flex-wrap: wrap;

    display: flex;

    margin-top: 2rem;
    height: auto;
  }

  .slack_div {
    justify-content: center;
    align-items: center;

    display: flex;
    height: 7rem;
  }
  
  .slack_logo {
    height: 10rem;
  }

  a {
    align-items: center;
    display: flex;
  }
  
  .meetup_div {
    justify-content: center;
    align-items: center;

    display: flex;

    margin-left: 5rem;
    margin-right: 5rem;

    padding: 0.5rem;
    width: 15rem;
  
    height: 6rem;

    font-size: max(2rem, 2vw);
  }
  
  .meetup_logo {
    margin: 0px;
    height: 7rem;
  }

  .youtube_div {
    justify-content: center;
    align-items: center;

    display: flex;

    height: 7rem;
  }
  
  .youtube_logo {
    height: 5rem;
  }

  @media (max-width: 550px) {
    transform: scale(0.8);
    margin-top: 0rem;
    margin-bottom: 0rem;

    .social_logos {
      flex-wrap: wrap;
      justify-content: space-evenly;
      align-items: space-evenly;

      display: grid;

      padding: 0;
    }

   
    .slack_div {
      margin-top: 1rem;
      margin-right: 0;
    }

    .meetup_div {
      margin-top: 1rem;
      margin-left: 0;
      
      margin-right: 0;
    }

    .youtube_div {
      margin-top: 1rem;
    }
  }
`;


export default function Socials() {
  return (
    <>
      <StyledSocials>
        <div className='title_div'>
          <h5>Check us out on...</h5>
        </div>
        <div className='social_logos'>
          <div className='slack_div'>
            <a href='https://bendjs.slack.com/ssb/redirect'>
              <img src={slack_logo} className='slack_logo' alt='slack logo'/>
            </a>
          </div>
          <div className='meetup_div'>
            <a href='https://www.meetup.com/BendJS/'>
              <img src={meetup_logo} className='meetup_logo' alt='meetup logo'/>
              <h5>/BendJS</h5>
            </a>
          </div>
          <div className='youtube_div'>
            <a href='https://www.youtube.com/channel/UCCT744K1sGX-lPtaEivXCDQ'>
              <img src={youtube_logo} className='youtube_logo' alt='youtube logo'/>
            </a>
          </div>
        </div>
      </StyledSocials>
    </>
  );
}