import ladd_group from "../../public/images/ladd_group_logo.jpg";
import tao from "../../public/images/tao_logo.png";
import uptech from "../../public/images/uptech_logo.png";
import codepen from "../../public/images/codepen_logo.png";
import Image from "next/image";


export default function Sponsors() {
  return (
    <>
      <div className='bg-white p-10'>
      <div>
        <h5 className='flex justify-center text-3xl mb-5 text-black'>
          Thank you so much to our 
          incredible sponsors!
        </h5>
      </div>
      <div className=''>
        <div className='justify-around flex xs:flex-wrap md:pt-20 md:pb-14 xs:pb-5 '>
          <a href='https://www.uptechstudio.com/'>
            <Image src={uptech} className='aspect-auto m-5 md:w-[260px] xs:w-[200px]' alt='uptech logo'/>
          </a>
          <a href='https://www.techoregon.org/'>
            <Image src={tao} className='aspect-auto m-5 md:w-[260px] xs:w-[200px]' alt='tech oregon logo'/>
          </a>
          <a href='https://codepen.io/'>
            <Image src={codepen} className='aspect-auto ml-5 mr-5 mb-5 mt-8 md:w-[260px] xs:w-[200px] ' alt='codepen logo'/>
          </a>
          <a href='https://www.bendpropertysource.com/' >
            <Image src={ladd_group} className='aspect-auto ml-5 mr-5 mb-5 md:mt-2 md:w-[260px] xs:mb-0 xs:mt-5 xs:w-[200px]' alt='ladd group logo'/>
          </a>
        </div>
        <div className='flex justify-center'>
          <div>
            <h5 className='italic text-3xl mt-5' >We are always looking for new sponsors</h5>
            <div className='flex justify-center'>
              <a htmlFor='button' className='bg-[#7FE7D7] rounded p-3 mt-5 text-2xl shadow shadow-grey hover:shadow-none hover:origin-bottom hover:translate-y-0.5' href='#contact'>Contact Us</a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};