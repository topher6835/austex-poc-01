import React from 'react';

const SpecialsLeftNav = props => {
  return (
    <div className="left-specials-nav">
      <h3>Shop Our Specials</h3>
      <ul>
        {(props.navItems).map((item)=>{
          return <li>{item}</li>
        })}
      </ul>
    </div>
  )
}

export default SpecialsLeftNav;