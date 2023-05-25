export default function SignupForm() {
  return (
    <div className="grid  w-[100%] rounded-md bg-neutral-300 p-2">
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
          <div hidden>name</div>
          <input
            className="m-2 block w-[95%] min-w-[13.25rem] rounded-md p-2"
            type="text"
            name="name"
            placeholder="Full Name"
            required={true}
          />
        </label>
        <label>
          <div hidden>email</div>
          <input
            className="m-2 block w-[95%] min-w-[13.25rem] rounded-md p-2"
            type="email"
            name="email"
            placeholder="Email"
            required={true}
          />
        </label>
        <button
          className="shadow-grey 
                      mb-2 
                      ml-2 
                      mt-4
                      block 
                      h-[2rem] 
                      w-[20%] 
                      min-w-[7rem] 
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
