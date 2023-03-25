import React from "react";
import github_logo from "../../public/images/github_logo_white.svg";
import Image from "next/image";


export default function Footer() {
  return (
    <>
      <div className='flex p-10 justify-center m-5'>
        <a href='https://github.com/BendJS/simple-website'>
          <div className='text-white'>
            <div>
              Contribute to this website
            </div>
            <div className='p-2 flex justify-center'>
              <Image src={github_logo} alt='GitHub Logo' className=''/>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}
