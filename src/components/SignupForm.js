export default function SignupForm() {
  return (
    <div className="block rounded-md bg-neutral-300 p-2">
      <div
        className="flex-wrap"
        name="newsletter"
        data-netlify="true"
        method="post"
      >
        <input
          className="m-2 block rounded-md p-2"
          type="hidden"
          name="form-name"
          value="newsletter"
        />
        <label>
          <input
            className="m-2 block rounded-md p-2"
            type="text"
            name="name"
            placeholder="Full Name"
            required={true}
          />
        </label>
        <label>
          <input
            className="m-2 block rounded-md p-2"
            type="email"
            name="email"
            placeholder="Email"
            required={true}
          />
        </label>
        <button
          className="shadow-grey 
                      mt-4 
                      ml-2 
                      mb-2
                      block 
                      h-[2rem] 
                      w-[7rem] 
                      rounded-md 
                      bg-white 
                      text-xl 
                      shadow 
                      hover:origin-bottom 
                      hover:translate-y-0.5
                      hover:shadow-none"
          type="submit"
        >
          Sign up
        </button>
      </div>
    </div>
  );
}
