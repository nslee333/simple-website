import slack_logo from '../../public/images/slack_logo.webp'
import meetup_logo from '../../public/images/meetup_logo.png'
import youtube_logo from '../../public/images/youtube_logo.svg.png'
import styled from 'styled-components';
import Image from 'next/image';

const StyledSocials = styled.div`
  color: #fff;


  margin-top 3rem;
  margin-bottom: 7rem;

  .social-title {
    justify-content: center;
    display: flex;

    margin-top: 1.5rem;
    padding: 1rem;

    font-size: max(2.5rem, 2.5vw);
  }
  
  .social-logos {
    justify-content: space-evenly;
    align-items: space-evenly;
    flex-wrap: wrap;

    display: flex;

    margin-top: 2rem;
    height: auto;
  }

  .social-logos__slack {
    justify-content: center;
    align-items: center;

    display: flex;
    height: 7rem;
  }
  
  .social-logos__slack-logo {
    width: 159px;
    height: 159px;
  }

  a {
    align-items: center;
    display: flex;
  }
  
  .social-logos__meetup {
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
  
  .social-logos__meetup-logo {
    margin: 0px;
    height: 109px;
    width: 120px;
  }

  .social-logos__youtube {
    justify-content: center;
    align-items: center;

    display: flex;

    height: 7rem;
  }
  
  .social-logos__youtube-logo {
    height: 75px;
    width: 115px;
  }

  h5 {
    color: #fff;
  }

  @media (max-width: 550px) {
    transform: scale(0.8);
    margin-top: -3rem;
    margin-bottom: -2rem;

    .social-logos {
      flex-wrap: wrap;
      justify-content: space-evenly;
      align-items: space-evenly;

      display: grid;

      padding: 0;
    }

   
    .social-logos__slack {
      margin-top: -2rem;
      margin-right: 0;
    }

    .social-logos__meetup {
      margin-top: 1rem;
      margin-left: 0;
      
      margin-right: 0;
    }

    .social-logos__youtube {
      margin-top: 1rem;
    }
  }
`;


export default function Socials() {
  return (
    <>
      <StyledSocials>
        <div className='social-title'>
          <h5>Check us out on...</h5>
        </div>
        <div className='social-logos'>
          <div className='social-logos__slack'>
            <a href='https://bendjs.slack.com/ssb/redirect'>
              <Image src={slack_logo} className='social-logos__slack-logo' alt='Slack Logo'/>
            </a>
          </div>
          <div className='social-logos__meetup'>
            <a href='https://www.meetup.com/BendJS/'>
              <Image src={meetup_logo} className='social-logos__meetup-logo' alt='Meetup Logo'/>
              <h5>/BendJS</h5>
            </a>
          </div>
          <div className='social-logos__youtube'>
            <a href='https://www.youtube.com/channel/UCCT744K1sGX-lPtaEivXCDQ'>
              <Image src={youtube_logo} className='social-logos__youtube-logo' alt='Youtube Logo'/>
            </a>
          </div>
        </div>
      </StyledSocials>
    </>
  );
}