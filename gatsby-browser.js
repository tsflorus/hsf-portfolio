/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import './src/styles/main.css';
import React from 'react';
import ThemeContextProvider from './src/context/themeContext';
export const wrapRootElement = ({ element }) => {
  return <ThemeContextProvider>{element}</ThemeContextProvider>;
};