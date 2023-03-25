import slack_logo from '../../public/images/slack_logo.webp'
import meetup_logo from '../../public/images/meetup_logo.png'
import youtube_logo from '../../public/images/youtube_logo.svg.png'
import Image from 'next/image';


export default function Socials() {
  return (
    <>
      <div>
        <div className='flex justify-center m-5'>
          <h5 className='text-white text-3xl'>Check us out on...</h5>
        </div>
        <div className='flex justify-around xs:flex-wrap'>
          <div className='mx-6 my-0'>
            <a href='https://bendjs.slack.com/ssb/redirect'>
              <Image src={slack_logo} className='aspect-auto w-[160px] my-5' alt='Slack Logo'/>
            </a>
          </div>
          <div className='mt-12 mx-6 max-[390px]:mt-0'>
            <a href='https://www.meetup.com/BendJS/' className='flex'>
              <Image src={meetup_logo} className='w-[110px] ' alt='Meetup Logo'/>
              <h5 className='text-white text-2xl mt-10'>/BendJS</h5>
            </a>
          </div>
          <div className='mt-2 mx-6 max-[390px]:mt-0'>
            <a href='https://www.youtube.com/channel/UCCT744K1sGX-lPtaEivXCDQ'>
              <Image src={youtube_logo} className='w-[115px] mt-12 my-5' alt='Youtube Logo'/>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}