import React, { useContext } from "react"
import { NavItem } from "./NavbarStyle"
import Toggle from 'react-toggle';
import { ThemeContext } from '../../context/themeContext';
import { FaInstagram } from 'react-icons/fa'

const Links = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeToggle = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  return (
    <>
      <NavItem to="/work">Work</NavItem>
      <NavItem to="/#contact">Contact</NavItem>
      <Toggle
        id="theme-toggle"
        checked={theme === 'light' ? true : false}
        onChange={handleThemeToggle}
        icons={false}
      />
      <div style={{marginTop:`7vh`}}>
        <a href="https://www.instagram.com/hsf_cardrawings/" rel="noreferrer" target="_blank" style={{color:`var(--text-main)`}}><FaInstagram style={{
          fontSize: `30px`
        }} /></a>
      </div>
    </>
  )
}

export default Links
