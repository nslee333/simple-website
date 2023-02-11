import React from "react";
import { StyledHeader } from "../UI/Common";
import bendjs_logo from "../images/bendjs_logo_square.png"

export default function Header() {

  return (
    <StyledHeader>
      <div>
        <img className="BendJSLogo"src={bendjs_logo} alt="bendjs logo"></img>
      </div>
      <div className="SocialsLink">
        <a url="" alt="bendjs logo">/BendJS</a>
      </div>
    </StyledHeader>
  )
}