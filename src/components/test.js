import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';

const Test = () => {
    const data = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `);
    return (
        <div>
            <h1>{data.site.siteMetadata.title}</h1>
        </div>
    )
}

export default Test;