import React, { useState } from "react"
import Links from "./Links"
import { Navigation, Navbox, Toggle, Hamburger} from "./NavbarStyle"
import Logo from "./Logo"


const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <Navigation>
      <Logo />
      <Toggle
        className="nav-toogler"
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox className="navbox">
          <Links />
        </Navbox>
      ) : (
          <Navbox open>
            <Links />
          </Navbox>
        )}
    </Navigation>
  )
}

export default Navbar
