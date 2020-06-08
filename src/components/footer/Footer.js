import React from "react"

const Footer = () => (
  <footer
    style={{
      textAlign: `center`,
      marginTop: `5vh`,
      paddingTop: `2vh`,
    }}
  >
   <div>
    © {new Date().getFullYear()},{` `} Hugo Singerlé-Florus
   </div>
  </footer>
)

export default Footer
