export default function Share() {
  return (
    <div
      className="m-5 
                  h-auto 
                  w-[42rem] 
                  min-w-[18.85rem] 
                  rounded-md 
                  bg-white 
                  p-5 
                  sm:h-[25rem]"
    >
      <h3 className="text-3xl italic xs:mt-2">Have something to share?</h3>
      <h4 className="text-2xl italic xs:mt-10">
        We're always looking for speakers
      </h4>
      <div className="italic xs:mt-10">
        If you have something to share, big or small, big or small, please get
        in touch!
      </div>
      <div className="mb-2 mt-10 sm:mt-32">
        <a
          htmlFor="button"
          href="#contact"
          className="shadow-grey 
                      rounded-lg 
                      bg-[#7FE7D7] 
                      p-3 
                      text-2xl 
                      shadow 
                      hover:origin-bottom 
                      hover:translate-y-0.5 
                      hover:shadow-none"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}
