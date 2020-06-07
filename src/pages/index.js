import React from 'react';

import SEO from "../components/seo"
import Layout from '../components/layout';
import Image from '../components/image';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div className="w-full">
        <div className="mx-auto max-w-sm">
          <Image />
        </div>
      </div>
  </Layout>
);
export default IndexPage;