import React from 'react';
import Feature from './feature';

import offsetPrintingIcon from '../images/icons/icon05.png'
const offsetPrintingTitle = 'Offset Printing';
const offsetPrintingText = (<div>
  Our printing plant in Austin is home to a full array of sheet-fed Heidelberg precision presses. Having a large variety of presses in house, we pride ourselves on matching your job with the appropriate press to maximize efficiency and economy. With many commercial printers boasting largely the same capabilities, Aus-Tex controls cost and turnaround with smart production management. However, what sets Aus-Tex apart is our obsession with quality – our passion for printing is front and center on every project. 
  <br/><br/>
  {/* We employ the latest computer-to-plate workflow which dramatically reduces the time to create a physical printing plate from digital artwork. Computer-to-plate technology replaces older, film-based procedures and allows us to make your last minute corrections more easily. We accept all industry standard file formats, and our highly capable imaging department provides many file manipulation and preparation services.
  <br/><br/> */}
  <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
    <li style={{fontWeight: '500'}}>Versatile Proven Equipment</li>
    <li>40" Heidelberg Speedmaster (SM102) w/ Coater</li>
    <li>40" Heidelberg Speedmaster (SM102) w/ Perfector</li>
    <li>20" Heidelberg Speedmaster (SM52)</li>
    <li>18" Heidelberg Printmaster (QM46)</li>
    <li>18" Heidelberg Printmaster (PM46)</li>
  </ul>
</div>);
//

import digitalPrintingIcon from '../images/icons/icon01.png'
const digitalPrintingTitle = 'Digital Printing';
const digitalPrintingText = (<div>
  Digital duplication was born from the need to produce outstanding, full color materials in smaller quantities and in less time. With fewer pre-press requirements, digital printing projects often go from the computer straight to the printer. Without plates, registration issues or liquid inks, the digital printing pipeline produces cost effective, high quality results in no time.
</div>);
//
import mailingFulfillmentIcon from '../images/icons/icon04.png'
const mailingFulfillmentTitle = 'Mailing & Fulfillment';
const mailingFulfillmentText = (<div>
  <span style={{fontWeight: '500'}}>Mailing Lists & Databases</span>
  <br/>
  Whether mailing a monthly newsletter to your organization’s members or an advertisement to prospective customers, each mailing project begins with a list. Some clients maintain their own databases comprised of memberships, accounts, customers, etc. Our list services include list formatting and standardization as well as merging duplicates or purging bad addresses. For clients who do not have a list, we can generate a custom list based on various criteria.
  <br/><br/>
  <span style={{fontWeight: '500'}}>The Mailing Piece</span>
  <br/>
  Just as important as targeting your audience is mailing an effective piece. The format and design of your mailer should be consistent with your message or offer. From postcards and brochures to booklets and periodicals, Aus-Tex can design and produce mail pieces of any kind. Partner with Aus-Tex, and our creative department will help formulate your message along with the visual and tactile design of your mailer. Our technical expertise gives us an edge on the creative possibilities.
  <br/><br/>
  <span style={{fontWeight: '500'}}>Postal Options</span>
  <br/>
  With each class of US Mail there are different advantages, restrictions and postal fees. Finding the right fit for your mail piece to balance timely delivery with a powerful impact is our specialty. You will not find a more seasoned staff fluent in the intricacies of USPS protocols and regulations in the area.
  <br/><br/>
  <span style={{fontWeight: '500'}}>Integrated Fulfillment Services</span>
  <br/>
  More and more, companies are scattered across geographic regions or scaled back their storage or mail room capabilities. To meet this growing demand, Aus-Tex offers document printing and storage as well as drop shipping services. Applicable to either large quantities or short runs, if you need to mail out employment packets each month or legal pamphlets each quarter, Aus-Tex can assemble and mail materials on demand.
  <br/><br/>
  <ul style={{ paddingLeft: '20px' }}>
    <li>Variable Data Printing (VDP)</li>
    <li>Mailing List Generation</li>
    <li>Database Merge & Purge</li>
    <li>Ink-Jet Addressing with Custom Fonts</li>
    <li>Postage by Metering, Permit or Stamp</li>
    <li>Mechanical Inserting & Tabbing</li>
    <li>Polybagging & Shrink Wrapping</li>
  </ul>
</div>);
//

import embossingFoilingDieCuttingIcon from '../images/icons/icon02.png';
const embossingFoilingDieCuttingTitle = 'Embossing, Foiling & Die Cutting';
const embossingFoilingDieCuttingText = (<div>
  In addition to a multitude of color combinations, Aus-Tex also offers different coating options to protect your materials from wear-and-tear and give them a unique look-and-feel. From full-flood Aqueous coating to spot varnish, coatings can be just as creative as the color itself. In addition to coatings, we offer the full complement of embossing, foil stamping, die-cutting, scoring and perforating according to your project specifications.
  <br/><br/>
  <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
    <li style={{fontWeight: '500'}}>Versatile Proven Equipment</li>
    <li>Heidelberg 20"x26" Flatbed Letterpress</li>
    <li>Heidelberg 10"x15" Windmill Letterpress</li>
  </ul>
</div>);
//

import promotionalSpecialtyIcon from '../images/icons/icon06.png';
const promotionalSpecialtyTitle = 'Promotional & Specialty Items';
const promotionalSpecialtyText = (<div>
  <span style={{fontWeight: '500'}}>Advertising Specialties</span>
  <br/>
  Often associated with items such as printed pens or magnets, our ad specialties catalog grows daily with products that reflect the current workplace or household. USB flash drives, can openers, mouse pads, rubber duckies, lanyards, the list goes on and on. All of these useful, interesting or humorous items can be printed with a logo or an original message that complements your business or services.
  <br/><br/>
  <span style={{fontWeight: '500'}}>Branded Merchandise</span>
  <br/>
  Less advertising and more about building a relationship, branded merchandise maximizes your engagement with your customers or audience. Logo t-shirts, coffee mugs, tote bags, flashlights, are only the beginning. Premium products include printed or engraved clocks, leather desk sets and embroidered cashmere scarves. Branded merchandise gives you confidence to follow through on the promises your brand makes.
  <br/><br/>
  <span style={{fontWeight: '500'}}>Seasonal & Event Promotions</span>
  <br/>
  Seasons and holidays are great catalysts for communications. As are trade shows, festivals, and off-site promos. Combining ad specialties and branded merchandise with event-specific messaging will keep you in front of your audience and on top of the consumer’s mind. Imagine a Christmas card with an evergreen tree sprout with a message about the years ahead. Or, your completely branded booth at the local farmer’s market would make a real impression.
</div>);
//

import wideFromatIcon from '../images/icons/icon07.png';
const wideFromatTitle = 'Wide Format';
const wideFromatText = (<div>
  When you need an oversized graphics display for tradeshows, special events, POS displays, and other signage, Wide Format Printing is the answer.
<br/><br/>
  Get your message out with our high quality wide format printing. We print on a variety of substrates including vinyl, gloss, matte, magnetic, foamcore, and coroplast, and many others.
  <br/><br/>
  <span style={{fontWeight: '500'}}>What is wide format printing?</span>
  <br/>
  Wide format, also referred to as large format printing, refers to printing onto a roll of print media rather than individual sheets of paper. Our wide format printers are capable of printing very large sizes that can range from 24 inches wide to 100 feet long.
  <br/><br/>
  <span style={{fontWeight: '500'}}>Plan your wide format project with these key considerations:</span>
  <br/>
  <ul style={{   }}> {/* paddingLeft: '0' */}
    {/* <li style={{listStyleType: 'none', fontWeight: '500'}}>Plan your wide format project with these key considerations:</li> */}
    <li>Where will your graphic be displayed?</li>
    <li>How long of a “shelf life” will it have?</li>
    <li>What kind of materials do you want to use?</li>
    <li>Will it be indoors or outdoors?</li>
    <li>What is the viewing distance?</li>
    <li>What kind of finishing will it need?</li>
    <li>Do you need a display stand or special installation?</li>
  </ul>
</div>);
//

import graphicDesignOnlineMarketingIcon from '../images/icons/icon03.png';
const graphicDesignOnlineMarketingTitle = 'Pre-Press & Graphic Design';
const graphicDesignOnlineMarketingText = (<div>
  We employ the latest computer-to-plate workflow which dramatically reduces the time to create a physical printing plate from digital artwork. Computer-to-plate technology replaces older, film-based procedures and allows us to make your last minute corrections more easily. We accept all industry standard file formats, and our highly capable imaging department provides many file manipulation and preparation services.
</div>);


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
    <div> {/* style={{marginBottom: "6rem"}} */}
      <Feature 
        icon={offsetPrintingIcon} title={offsetPrintingTitle} leftImage={offsetPrintingIcon}
        textBlock={offsetPrintingText} id={"feature1"}
      />
      <Feature 
        icon={digitalPrintingIcon} title={digitalPrintingTitle} leftImage={digitalPrintingIcon}
        textBlock={digitalPrintingText} id={"feature2"}
      />
      <Feature 
        icon={mailingFulfillmentIcon} title={mailingFulfillmentTitle} leftImage={mailingFulfillmentIcon}
        textBlock={mailingFulfillmentText} id={"feature3"}
      />
      <Feature 
        icon={embossingFoilingDieCuttingIcon} title={embossingFoilingDieCuttingTitle} leftImage={embossingFoilingDieCuttingIcon}
        textBlock={embossingFoilingDieCuttingText} id={"feature4"}
      />
      <Feature 
        icon={promotionalSpecialtyIcon} title={promotionalSpecialtyTitle} leftImage={promotionalSpecialtyIcon}
        textBlock={promotionalSpecialtyText} id={"feature5"}
      />
      <Feature 
        icon={wideFromatIcon} title={wideFromatTitle} leftImage={wideFromatIcon}
        textBlock={wideFromatText} id={"feature6"}
      />
      <Feature 
        icon={graphicDesignOnlineMarketingIcon} title={graphicDesignOnlineMarketingTitle} leftImage={graphicDesignOnlineMarketingIcon}
        textBlock={graphicDesignOnlineMarketingText} id={"feature7"}
      />
    </div>
  )
}

export default FeaturesSection;
