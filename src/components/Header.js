import {useState} from "react";
import bendjs_logo from "../../public/images/bendjs_logo_square.png";
import styled from "styled-components";
import Image from "next/image";
import OutsideClickHandler from "react-outside-click-handler";
import meetup_logo from "../../public/images/meetup_logo.png";
import youtube_logo from "../../public/images/youtube_logo.svg.png";
import slack_logo from "../../public/images/slack_logo.webp";
import github_logo from "../../public/images/github_logo.svg";
import 'animate.css';


const StyledHeader = styled.header`
justify-content: space-around;
display: flex;

height: 12rem;
padding: 1rem;

.bendjs-logo {
  margin-top: 2rem;
  margin-left: 1rem;
  
  border-radius: min(1rem, 2vw);
  
  width: 8rem;
  height: auto;
}

.socials-link {
    &:hover {
      transform: translate(0px, 1.25px);
    }
  
  margin-right: 1rem;
  margin-top: 3rem;

  height: 4rem;
  padding: .5rem;

}

span {
  display: flex;
  margin-block: .75rem;

  border-radius: 3px;
  height: 6px;

  width: 50px;
  background-color: black
}


@media (max-width: 400px) {
  justify-content: space-between;
  
  transform: scale(0.9);
  .socials-link {
    margin-right: 0rem;
  }
  .bendjs-logo {
    margin-left: 0rem;
  }
}
`;

const StyledDropdown = styled.div`
  position: absolute;
  top: 0px;

  border-radius: 0px 0px 7px 7px;
  margin: 0;

  padding-top: .5rem;
  padding-left: 3rem;

  padding-right: 3rem;
  padding-bottom: .5rem;

  background-color: #fff;
  width: 350px;

  font-size: 2.25rem;

  * {
    margin-block: 1.5rem;
  }

  .meetup-wrapper, 
  .slack-wrapper, 
  .youtube-wrapper, 
  .github-wrapper {
    display: flex;
    align-items: center;

    margin-block: 2px;
    height: 120px;
    
    width: 300px;
    padding-left: 5px;
  }

  .meetup-logo {
    margin-right: 1rem;
  }
  
  .slack-logo {
    margin-left: -1.5rem;
    margin-right: -.7rem;
  }

  .youtube-logo {
    margin-right: .8rem;
  }
  
  .github-logo {
    margin-left: 1rem;
    margin-right: 1.1rem;
  }
`;

export default function Header() {
  const [naviClicked, setNaviClicked] = useState(false);

  function handleNaviClick(e) {
    e.preventDefault();
    setNaviClicked(!naviClicked)
  }

  function NaviButton() {
    return (
      <StyledHeader>
        <a href='' onClick={handleNaviClick} className='socials-link'>
          <span></span>
          <span></span>
          <span></span>
        </a>
      </StyledHeader>
    );
  }

  function NaviDropdown() {
    return (
      <>
        <StyledDropdown className="animate__animated animate__slideInDown">
          <OutsideClickHandler onOutsideClick={() => {setNaviClicked(false)}}>
          <a href='/studio' ><div>Admin</div></a>
          <a href='' ><div>Previous Talks</div></a>
          <a href='/#contact' ><div>Contact Us</div></a>
          <div className='socials'>Socials</div>
          <a href='https://www.meetup.com/BendJS/' >
            <div className="meetup-wrapper">
            <Image src={meetup_logo} className='meetup-logo' width={100} height={100} />
            /BendJS
            </div>
          </a>
          <a href='https://bendjs.slack.com/ssb/redirect' >
            <div className="slack-wrapper">
            <Image src={slack_logo} className='slack-logo' width={150} height={150} />
            /BendJS
            </div>
          </a>
          <a href='https://www.youtube.com/channel/UCCT744K1sGX-lPtaEivXCDQ' >
            <div className="youtube-wrapper">
            <Image src={youtube_logo} className='youtube-logo' width={100} height={70} />
            /BendJS
            </div>
          </a>
          <a href='https://github.com/BendJS' >
            <div className="github-wrapper">
            <Image src={github_logo} className='github-logo' width={75} height={75} />
            /BendJS
            </div>
          </a>
          </OutsideClickHandler>
        </StyledDropdown>
      </>
    );
  }

  return (
    <StyledHeader>
      <div>
        <Image className="bendjs-logo" src={bendjs_logo} alt="bendjs logo" />
      </div>
      <div >
        {NaviButton()}
      {
        naviClicked ? NaviDropdown() : <div></div>
      }
      </div>
    </StyledHeader>
  )
}