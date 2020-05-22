import React from 'react';
import Feature from './feature';

import offsetPrintingIcon from '../images/icons/icon05.png'
const offsetPrintingTitle = 'Offset Printing';
//const offestPrintingLeftImage = 'https://i0.wp.com/austex.com/wp-content/uploads/2015/09/mailing_services.jpg';
const offsetPrintingText = (<div>
  Our printing plant in Austin is home to a full array of sheet-fed Heidelberg precision presses. Having a large variety of presses in house, we pride ourselves on matching your job with the appropriate press to maximize efficiency and economy. With many commercial printers boasting largely the same capabilities, Aus-Tex controls cost and turnaround with smart production management. However, what sets Aus-Tex apart is our obsession with quality – our passion for printing is front and center on every project. 
  <br/><br/>
  We employ the latest computer-to-plate workflow which dramatically reduces the time to create a physical printing plate from digital artwork. Computer-to-plate technology replaces older, film-based procedures and allows us to make your last minute corrections more easily. We accept all industry standard file formats, and our highly capable imaging department provides many file manipulation and preparation services.
  <br/><br/>
  <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
    <li style={{fontWeight: '500'}}>Versatile Proven Equipment</li>
    <li>40" Heidelberg Speedmaster (SM102) w/ Coater</li>
    <li>40" Heidelberg Speedmaster (SM102) w/ Perfector</li>
    <li>20" Heidelberg Speedmaster (SM52)</li>
    <li>18" Heidelberg Printmaster (QM46)</li>
    <li>18" Heidelberg Printmaster (PM46)</li>
    <li>Heidelberg 20"x26" Flatbed Letterpress</li>
    <li>Heidelberg 10"x15" Windmill Letterpress</li>
  </ul>

</div>);
//
import digitalPrintingIcon from '../images/icons/icon01.png'
const digitalPrintingTitle = 'Digital Printing';
const digitalPrintingText = (<div></div>);
//
import mailingFulfillmentIcon from '../images/icons/icon04.png'
const mailingFulfillmentTitle = 'Mailing & Fulfillment';
const mailingFulfillmentText = (<div></div>);
//
import embossingFoilingDieCuttingIcon from '../images/icons/icon02.png';
const embossingFoilingDieCuttingTitle = 'Embossing, Foiling & Die Cutting';
const embossingFoilingDieCuttingText = (<div></div>);
//
import promotionalSpecialtyIcon from '../images/icons/icon06.png';
const promotionalSpecialtyTitle = 'Promotional & Specialty Items';
const promotionalSpecialtyText = (<div></div>);
//
import wideFromatIcon from '../images/icons/icon07.png';
const wideFromatTitle = 'Wide Format';
const wideFromatText = (<div></div>);
//
import graphicDesignOnlineMarketingIcon from '../images/icons/icon03.png';
const graphicDesignOnlineMarketingTitle = 'Graphic Design & Online Marketing';
const graphicDesignOnlineMarketingText = (<div></div>);


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
//const fillerLeftImage = 'https://i0.wp.com/austex.com/wp-content/uploads/2015/09/mailing_services.jpg';

const FeaturesSection = () => {
  return (
    <div>
      <Feature 
        icon={offsetPrintingIcon} title={offsetPrintingTitle} leftImage={offsetPrintingIcon}
        textBlock={offsetPrintingText} id={"feature1"}
      />
      <Feature 
        icon={digitalPrintingIcon} title={digitalPrintingTitle} leftImage={digitalPrintingIcon}
        textBlock={fillerText} id={"feature2"}
      />
      <Feature 
        icon={mailingFulfillmentIcon} title={mailingFulfillmentTitle} leftImage={mailingFulfillmentIcon}
        textBlock={fillerText} id={"feature3"}
      />
      <Feature 
        icon={embossingFoilingDieCuttingIcon} title={embossingFoilingDieCuttingTitle} leftImage={embossingFoilingDieCuttingIcon}
        textBlock={fillerText} id={"feature4"}
      />
      <Feature 
        icon={promotionalSpecialtyIcon} title={promotionalSpecialtyTitle} leftImage={promotionalSpecialtyIcon}
        textBlock={fillerText} id={"feature5"}
      />
      <Feature 
        icon={wideFromatIcon} title={wideFromatTitle} leftImage={wideFromatIcon}
        textBlock={fillerText} id={"feature6"}
      />
      <Feature 
        icon={graphicDesignOnlineMarketingIcon} title={graphicDesignOnlineMarketingTitle} leftImage={graphicDesignOnlineMarketingIcon}
        textBlock={fillerText} id={"feature7"}
      />
    </div>
  )
}

export default FeaturesSection;
