import styled from "styled-components";
import slack_user_photo from "../images/slack-user.png";

const StyledMemberSpotlight = styled.div`
  background-color: #000;
  color: #fff;
  margin-top: 5rem;
  margin-bottom: 2rem;
  padding-bottom: 2rem;

  height: auto;
  
  .Member_title {
    display: flex;
    justify-content: center;
    
    font-size: 30px;
    font-weight: medium;
    margin-top: 5rem;
    padding: 3rem;
    
  }

  .photo_frame {
    border-radius: 7px;
    padding: 1rem;
    min-height: px;
    background-color: #7FE7D7;
    // height: min(24rem, 24vw);
    // width: min(25rem, 25vw);

    height: 22rem;
    width: 22rem;
  }
  
  .photo_frame_black {
    background-color: #000;
    display: flex;
    border-radius: 7px;

    // width: clamp(15rem, 100%, 30rem);
    // height: min(24rem, 24vw);

    height: 22rem;
    width: 22rem;

    

  }
  
  .member_photo {
    // margin-left: max(1.5rem, 1.5vw);
    // margin-top: max(1.5rem, 1.5vw);
    // margin-right: max(1.5rem, 1.5vw);
    // margin-bottom: max(1.5rem, 1.vw);

    margin-left: 2rem;
    margin-top: 2rem;

    // height: min(20rem, 20vw);
    height: 18rem;
    width: 18rem;

  
    border-radius: 5px;
  }
  
  
  .Member_div {
    background-color: #000;
    border: 2px solid hotpink;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    height: auto;


    margin-top: 5rem;
    margin-bottom: 5rem;

    @media (max-width: 1060px) {
      margin-top: 2rem;
      margin-botttom: 2rem;
      .Member_frame {
        margin-top: 2rem;
      }
    }

    @media (max-width: 520px) {
      transform: scale(0.90);
      margin-top: 0;
      margin-bottom: 0;
    }

    @media (max-width: 420px) {
      transform: scale(0.80);
      .Member_title {
        padding: .5rem;
        margin-bottom: 0;
      }

      .photo_frame {
        height: auto;
        width: auto;
      }
      
      .photo_frame_black {
        height: 16rem;
        width: 16rem;

        min-height: 0;
      }
      
      .member_photo {
        height: 15rem;
        width: 15rem;

        margin-left: .5rem;
        margin-top: .5rem;
        
      }
    }
    
  
  
  .member_name {
    margin-bottom: max(2rem, 2vw);
    font-size: 25px;
  }
  
  .Member_frame {
    background-color: #000;
    // margin-inline: clamp(2rem, 100%, 5rem);
    
    padding: 1rem;
    
    // height: min(25rem, 37vw);
    // height: 25rem;
    // height: auto;
    // width: 40rem;
    // width: min(40rem, 40vw); 
    
    // min-height: 25rem;
    // max-height: 50rem;
    // min-width: 30rem;

    background-color: #7FE7D7;
    border-radius: 7px;
  }

  .member_black_frame {
    padding: max(1rem, 1vw);
    background-color: #000;
    border-radius: 7px;
    max-width: 40rem;
    min-height: 22.5rem;
    
    
  }
  
  .bio {
    font-size: 20px
    
  }
  
`;

export function MemberSpotlight() {
  return (
    <>
      <StyledMemberSpotlight>
        <div className='Member_title'>
          <h5>Member Spotlight</h5>
        </div>
        
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
      </StyledMemberSpotlight>
    </>
  );
}