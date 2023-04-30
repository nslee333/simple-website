import React from "react";
import github_logo from "../../public/images/github_logo_white.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="m-5 flex justify-center p-10">
        <a href="https://github.com/BendJS/simple-website" target="_blank">
          <div className="text-white">
            <div>Contribute to this website</div>
            <div className="flex justify-center p-2">
              <Image src={github_logo} alt="GitHub Logo" className="w-[5rem]" />
            </div>
          </div>
        </a>
      </div>
    </>
  );
}
