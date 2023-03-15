import React from "react";
import Welcome from "../components/Welcome";
import Sponsors from "../components/Sponsors";
import Socials from "../components/Socials";
import Gallery from "../components/Gallery";
import Connected from "../components/StayConnected";
import MemberSpotlight from "../components/MemberSpotlight";
import Contact from "../components/Contact";

export default function Home({images, member}) {
  return (
    <>
      <Welcome />
      <Sponsors />
      <Socials />
      <Gallery props={images} />
      <MemberSpotlight  props={member}/>
      <Connected />
      <Contact />
    </>
  );
}