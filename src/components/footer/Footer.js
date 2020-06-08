import React from "react"

const Footer = () => (
  <footer
    style={{
      textAlign: `center`,
      marginTop: `5vh`,
      paddingTop: `2vh`,
    }}
  >
    <p>© {new Date().getFullYear()},{` `} Hugo Singerlé-Florus</p>
  </footer>
)

export default Footer
