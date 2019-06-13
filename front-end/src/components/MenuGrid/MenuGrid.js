//this has been exported to App 
import React from 'react';

const Menu = () => {
  return (
    <div>
    <div className="ui pointing menu" style={{backgroundColor:'#6b6b6b'}}>
      <div className="active item">
        Home
      </div>
      <div className="item">
        Messages
      </div>
      <div className="item">
        Friends
      </div>
    </div>

  </div>
  );
}

export default Menu;

