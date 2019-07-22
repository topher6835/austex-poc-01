import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Lightbox from "./lightbox";

const galleryImg = () => (
  <StaticQuery
    query={graphql`
      query {
        galleryImages: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Lightbox galleryImages={data.galleryImages.edges} />}
  />
)
export default galleryImg;