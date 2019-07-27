import React, { Component } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Carousel4 from '../components/carousel4';
import FeatureNav from '../components/featureNav';
import FeaturesSection2 from '../components/featuresSection2';

import "react-responsive-carousel/lib/styles/carousel.min.css";

class App extends Component {
  constructor(props) {
    super();
    if (typeof window !== "undefined") {
      // eslint-disable-next-line global-require
      require("smooth-scroll")('a[href*="#"]')
    }
  }

  render() {
    return (
      <>
        <Layout>
          <SEO
            title="Home"
            keywords={[
              `AusTex`,
              `Printing`,
              `Design`,
              `Promotions`,
            ]}
          />
          <Carousel4 />
          <main>
            <FeatureNav />
            <FeaturesSection2 />
          </main>
        </Layout>
      </>
    )
  }
}

export default App;
