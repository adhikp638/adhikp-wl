import React from 'react';
import Menu from './Menu';

const ParentPage = () => {
  return (
    <div>
      <Menu position="menu-position-top-right" />

      <h1>Parent Page Content</h1>
      {/* <Menu position="top-right" /> */}
      {/* <Menu position="bottom-left" /> */}
      {/* <Menu position="bottom-right" /> */}
    </div>
  );
};

export default ParentPage;
