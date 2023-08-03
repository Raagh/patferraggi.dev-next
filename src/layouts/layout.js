import React from 'react';
import Navbar from '../components/shared/navbar';

export default function Layout({ children, removeSidePadding }) {
  return (
    <div className="mainContainer">
      <Navbar />
      <div className="{{removeSidePadding ? 'internalContainer-padded' : 'internalContainer'}}">{children}</div>
    </div>
  );
}
