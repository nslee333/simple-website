import {StyledSocials} from '../UI/Common';
import slack_logo from '../images/slack_logo.webp'
import meetup_logo from '../images/Meetup_Logo.png'
import youtube_logo from '../images/Youtube_logo.svg.png'

export default function Socials() {
  return (
    <>
      <StyledSocials>
        <div className='title_div'>
          <h5>Check us out on...</h5>
        </div>
        <div className='social_logos'>
          <img src={slack_logo} className='slack_logo' alt='slack logo'/>
          <div className='meetup_div'>
            <img src={meetup_logo} className='meetup_logo' alt='meetup logo'/>
            <h5>/BendJS</h5>
          </div>
          <img src={youtube_logo} className='youtube_logo' alt='youtube logo'/>
        </div>
      </StyledSocials>
    </>
  );
}