import styled from "styled-components";
import slack_user_photo from "../images/slack-user.png";

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

export function MemberSpotlight() {
  return (
    <>
      <StyledMemberSpotlight>
        <div className='Member_title'>
          <h5>Member Spotlight</h5>
        </div>
        <div className='Member_Over'>
          <div className='Member_div'>
            <div className='photo_frame'>
              <div className='photo_frame_black'>
                <img src={slack_user_photo} className='member_photo'/>
              </div>
            </div>
            <div className='Member_frame'>
              <div className='member_black_frame'>
                <h5 className='member_name'>John Doe</h5>
                <div className='bio'>
                If you can keep your head when all about you
                Are losing theirs and blaming it on you,
                If you can trust yourself when all men doubt you,
                But make allowance for their doubting too;
                If you can keep your head when all about you
                Are losing theirs and blaming it on you,
                If you can trust yourself when all men doubt you,d 
                </div>
              </div>
            </div>
          </div>
        </div>
      </StyledMemberSpotlight>
    </>
  );
}