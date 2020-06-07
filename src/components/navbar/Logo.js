import React from "react"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"
import { LogoWrap } from "./NavbarStyle"

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "hugo-singerle-florus" }, extension: { eq: "png" }) {
        childImageSharp {
          fluid(maxWidth: 50, pngQuality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <LogoWrap as={Link} to="/">
      <Img fluid={data.file.childImageSharp.fluid} style={{maxWidth: `50px`}} alt="logo" />
    </LogoWrap>
  )
}

export default Logo