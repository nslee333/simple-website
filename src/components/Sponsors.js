import {StyledSponsor} from "../UI/Common";
import ladd_group from "../images/ladd_group_logo.jpg";
import TAO_logo from "../images/TAO_logo-with-wordmark.png";
import uptech_logo from "../images/uptech_logo.png";
import codepen_logo from "../images/codepen_logo.png";


export default function Sponsors() {
  return (
    <>
      <StyledSponsor>
      <div className='StyledSponsor__title'>
        <h5>
          Thank you so much to our 
          incredible sponsors!
        </h5>
      </div>
      <div>
        <div className='StyledSponsor__logos'>
          <img src={uptech_logo} className='uptech_logo'/>
          <img src={TAO_logo} className='TAO_logo'/>
          <img src={ladd_group} className='ladd_logo'/>
          <img src={codepen_logo} className='codepen_logo'/>
        </div>
        <div className='StyledSponsor__new-sponsors'>
          <div className='new-sponsors__div'>
            <h5>We are always looking for new sponsors</h5>
            <div className='button_div'>
              <button className='new-sponsors__button'>Contact Us</button>
            </div>
          </div>
        </div>
      </div>
      </StyledSponsor>
    </>
  );
};