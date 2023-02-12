import React from "react";
import "../App.scss";
import Welcome from "../components/Welcome";
import Sponsors from "../components/Sponsors";
import Socials from "../components/Socials";
import Gallery from "../components/Gallery";
import { MemberSpotlight } from "../components/MemberSpotlight";

export default function Home() {
  return (
    <>
      <Welcome/>
      <Sponsors/>
      <Socials />
      <Gallery />
      <MemberSpotlight />
    </>
  );
}
