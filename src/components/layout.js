import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './layout.css';
import { ThemeContext } from '../context/themeContext';
import Navbar from './navbar/Navbar';

const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`${
        theme === 'light' ? 'theme-light' : 'theme-dark'
      } bg-primary text-main-text transition-all duration-300  min-h-screen`}>
      <Navbar />
      <div
          style={{
            margin: `0 auto`,
            fontFamily: `Josefin sans`,
          }}
        >
          <main>{children}</main>
        </div>
      <footer className="text-secondary-text">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;