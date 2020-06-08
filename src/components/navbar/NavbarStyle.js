import styled from "styled-components"
import { Link } from "gatsby"

export const Navigation = styled.nav`
  display: flex;
  position: sticky;
  height:8vh;
  top: 0;
  left: 0;
  right: 0;
  left: 0;
  width: 100%;
  justify-content: space-between;
  text-transform: uppercase;
  margin: 0 auto;
  padding: 0 5vw;
  z-index: 2;
  align-self: center;
  line-height: 15px;
  background-color: var(--primary);
  transition: all 0.3s ease-in;
  box-shadow: 0 2px 6px var(--shadow);
`

export const Toggle = styled.div`
  height: 100%;
  cursor: pointer;
  padding: 0 1vw;
  display: flex;
`

export const Navbox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  position: fixed;
  padding-top: 10vh;
  transition: all 0.3s ease-in;
  top: 8vh;
  background-color: var(--primary);
  right: ${props => (props.open ? "-100%" : "0")};
`

export const Hamburger = styled.div`
  background-color: var(--text-main);
  width: 30px;
  height: 3px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color:var(--text-main);
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
    props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
    width: 20px;
  }
`
export const LogoWrap = styled.div`
  margin: auto 0;
  flex: 0 1 36px;

  @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 25px;
  }
`

export const NavItem = styled(Link)`
  text-decoration: none !important;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;
  font-family: "Josefin Sans", sans-serif;
  font-size: 1.5rem;
  padding: 20px 0;
  z-index: 6;
  color: var(--text-main);

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    ::after {
      width: 100%;
    }
  }

`