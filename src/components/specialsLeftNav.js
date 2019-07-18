import React from 'react';

import "../style/specialsLeftNav.css";

const SpecialsLeftNav = props => {
  return (
    <div className="left-specials-nav">
      <h3>Shop Our Specials</h3>
      <ul>
        {(props.navItems).map((item)=>{
          return <li>{item}</li>
        })}
      </ul>
      {/* <ul className="left-nav-list">
        <li>Promotional Items</li>
        <li>Turnkey Postcards</li>
        <li>Window Envelopes</li>
        <li>Museum &amp; Gallery Cards</li>
        <li>Pet Remembrance Cards</li>
        <li>Window Envelopes</li>
        <li>Window Envelopes</li>
        <li>Window Envelopes</li>
        <li>Window Envelopes</li>
        <li>Window Envelopes</li>
      </ul> */}
    </div>
  )
}

export default SpecialsLeftNav;