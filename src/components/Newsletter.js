import SignupForm from "./SignupForm";

export default function Newsletter() {
  return (
    <div className="m-5 h-auto w-[42rem] min-w-[18.85rem] rounded-md bg-white p-5 sm:h-[25rem]">
      <div>
        <h3 className="p-2 text-3xl italic">Newsletter</h3>
        <h4 className="p-2 text-2xl italic">Stay up to date</h4>
        <div className="p-2 italic">
          Sign up for our monthly newsletter where we share local events in
          Bend, tech news and our community member spotlight!
        </div>
      </div>
      <div className="mx-2 my-2 flex">
        <SignupForm />
      </div>
    </div>
  );
}
