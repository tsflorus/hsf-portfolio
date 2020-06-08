import React from 'react';
import Img from "gatsby-image/withIEPolyfill";
import { graphql } from "gatsby"
import SEO from "../components/seo";
import Layout from '../components/layout';
import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram } from 'react-icons/fa'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <header style={{ marginTop: `5vh` }}>
      <Container>
        <h1>Who Am I ?</h1>
        <Row>
          <Col lg={4} style={{ marginTop: `5vh` }}>
            <p>
              I am Hugo Singerlé-Florus, a student designer from France. <br />
              I love designing and drawing. On this website you will find all of my work which is a big part of my passion for design
            </p>
            <div>
              <a href="https://www.instagram.com/hsf_cardrawings/" rel="noreferrer" target="_blank" style={{ color: `var(--text-main)` }}>
                <FaInstagram style={{
                fontSize: `30px`
              }} />
              </a>
            </div>
          </Col>
          <Col lg={8} style={{ marginTop: `5vh` }}>
            <Img
              fixed={data.file.childImageSharp.fixed}
              objectFit="cover"
              alt=""
              style={{ width: `100%`, height: `32vh` }}
            />
          </Col>
        </Row>
      </Container>
    </header>
  </Layout>
);
export default IndexPage;

export const query = graphql`
  query {
    file(relativePath: { eq: "artisan.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed (width: 1000) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`