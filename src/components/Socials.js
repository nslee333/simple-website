import slack_logo from '../images/slack_logo.webp'
import meetup_logo from '../images/Meetup_Logo.png'
import youtube_logo from '../images/Youtube_logo.svg.png'
import styled from 'styled-components';

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
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: space-evenly;

    margin-top: 2rem;
    height: auto;
  }

  .slack_div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 7rem;
  }
  
  .slack_logo {
    height: 10rem;
  }

  a {
    display: flex;
    align-items: center;
  }
  
  .meetup_div {
    margin-left: 5rem;
    margin-right: 5rem;

    display: flex;
    justify-content: center;
    align-items: center;

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
    display: flex;
    justify-content: center;
    align-items: center;

    height: 7rem;
  }
  
  .youtube_logo {
    height: 5rem;
  }

  @media (max-width: 550px) {
    .social_logos {
      display: grid;
      flex-wrap: wrap;
      justify-content: space-evenly;
      align-items: space-evenlu;
      padding: 0;
    }

   
    .slack_div {
      margin-right: 0;
      margin-top: 1rem;
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