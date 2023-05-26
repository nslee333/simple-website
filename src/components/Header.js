import Image from "next/image";
import bendjs_logo from "../../public/images/bendjs_logo_square.png";
import Head from "next/head";

export default function Header() {
  return (
    <div className="flex justify-center">
      <Head>
        <title>BendJS Website</title>
      </Head>
      <div className="mx-5 my-5 w-[50rem]">
        <a href="/">
          <Image
            className="w-[8rem] rounded-lg"
            src={bendjs_logo}
            alt="bendjs logo"
          />
        </a>
      </div>
    </div>
  );
}
