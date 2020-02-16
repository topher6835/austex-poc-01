import React, { Component } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Carousel from '../components/carousel';
import FeatureNav from '../components/featureNav';
import FeaturesSection from '../components/featuresSection';

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
          <Carousel />
          <main>
            <FeatureNav />
            <FeaturesSection />
          </main>
        </Layout>
      </>
    )
  }
}

export default App;
