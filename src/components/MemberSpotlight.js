import styled from "styled-components";
import slack_user_photo from "../images/slack-user.png";

const StyledMemberSpotlight = styled.div`
  margin-top: 5rem;
  margin-bottom: 2rem;
  
  height: auto;
  padding-bottom: 2rem;

  background-color: #000;
  color: #fff;
  
  
  .Member_title {
    justify-content: center;
    display: flex;
    
    margin-top: 5rem;
    padding: 3rem;

    font-size: 30px;
    font-weight: medium;
  }

  .photo_frame {
    border-radius: 7px;

    width: 22rem;
    height: 22rem;
    
    min-height: px;
    padding: 1rem;

    background-color: #7FE7D7;
  }
  
  .photo_frame_black {
    display: flex;
    border-radius: 7px;
        
    width: 22rem;
    height: 22rem;
    
    background-color: #000;
  }
  
  .member_photo {
    margin-left: 2rem;
    margin-top: 2rem;

    border-radius: 5px;

    width: 18rem;
    height: 18rem;
  }
  
  
  .Member_div {
    justify-content: space-evenly;
    align-items: center;

    flex-wrap: wrap;
    display: flex;

    margin-top: 5rem;
    margin-bottom: 5rem;

    height: auto;
    background-color: #000;


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
      transform: scale(0.85);

      .Member_title {
        margin-bottom: 0;
        padding: .5rem;
      }

      .photo_frame {
        width: auto;
        height: auto;
      }
      
      .photo_frame_black {
        width: 16rem;

        height: 16rem;
        min-height: 0;
      }
      
      .member_photo {
        width: 15rem;
        height: 15rem;

        margin-top: .5rem;
        margin-left: .5rem;
      }
    }
    

  .member_name {
    margin-bottom: max(2rem, 2vw);
    font-size: 25px;
  }
  
  .Member_frame {
    border-radius: 7px;
    padding: 1rem;
    
    background-color: #7FE7D7;
  }

  .member_black_frame {
    border-radius: 7px;
    padding: max(1rem, 1vw);

    max-width: 40rem;
    min-height: 22.5rem;

    background-color: #000;
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