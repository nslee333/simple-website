import React from "react";
import "../App.scss";
import Welcome from "../components/Welcome";
import Sponsors from "../components/Sponsors";
import Socials from "../components/Socials";

export default function Home() {
  return (
    <>
      <Welcome/>
      <Sponsors/>
      <Socials />
    </>
  );
}
