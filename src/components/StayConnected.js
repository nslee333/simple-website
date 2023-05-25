import Newsletter from "./Newsletter";
import Share from "./Share";

export default function Connected() {
  return (
    <>
      <div className="flex justify-evenly xs:flex-wrap">
        <Newsletter />
        <Share />
      </div>
    </>
  );
}
