import React from 'react'
import Feature from './feature'

import offsetPrintingIcon from '../images/icons/icon05.png'
const offsetPrintingTitle = 'Offset Printing';
const offestPrintingLeftImage = 'https://i0.wp.com/austex.com/wp-content/uploads/2015/09/mailing_services.jpg';
const offsetPrintingText = (<div></div>);
import digitalPrintingIcon from '../images/icons/icon01.png'
const digitalPrintingTitle = 'Digital Printing';
const digitalPrintingText = (<div></div>);
import mailingFulfillmentIcon from '../images/icons/icon04.png'
const mailingFulfillmentTitle = 'Mailing & Fulfillment';
const mailingFulfillmentText = (<div></div>);
import embossingFoilingDieCuttingIcon from '../images/icons/icon02.png';
const embossingFoilingDieCuttingTitle = 'Embossing, Foiling & Die Cutting';
const embossingFoilingDieCuttingText = (<div></div>);

const fillerText = (
  <div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Nulla posuere
      sollicitudin aliquam ultrices sagittis orci a. Netus et malesuada fames ac
      turpis egestas integer. Mauris vitae ultricies leo integer malesuada nunc.
      Lobortis feugiat vivamus at augue eget arcu dictum. Sit amet massa vitae
      tortor condimentum lacinia quis vel. Platea dictumst vestibulum rhoncus
      est.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit enim ad minima
      veniam, quis nostrum exercitationem ullam. Reprehenderit maiores aperiam
      assumenda deleniti hic.
    </p>
  </div>
);

const FeaturesSection = () => {
  return (
    <div>
      <Feature 
        icon={offsetPrintingIcon} title={offsetPrintingTitle} leftImage={offestPrintingLeftImage}
        textBlock={fillerText} id={"feature1"}
      />
      <Feature 
        icon={digitalPrintingIcon} title={digitalPrintingTitle} leftImage={offestPrintingLeftImage}
        textBlock={fillerText} id={"feature2"}
      />
      <Feature 
        icon={mailingFulfillmentIcon} title={mailingFulfillmentTitle} leftImage={offestPrintingLeftImage}
        textBlock={fillerText} id={"feature3"}
      />
      <Feature 
        icon={embossingFoilingDieCuttingIcon} title={embossingFoilingDieCuttingTitle} leftImage={offestPrintingLeftImage}
        textBlock={fillerText} id={"feature4"}
      />
    </div>
  )
}

export default FeaturesSection;
