import Image from "next/image";
import bendjs_logo from "../../public/images/bendjs_logo_square.png";


export default function Header() {
  return (
    <div className='flex justify-center'>
      <div className='w-[50rem] mx-5 my-5'>
        <a href='/'><Image className='w-[8rem] rounded-lg' src={bendjs_logo} alt="bendjs logo" /></a>
      </div>
    </div>
  )
}