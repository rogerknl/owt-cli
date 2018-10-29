import React from 'react';

import Header from './Header';

import './App.css';

export default ({ children }) => {
  return (
    <div className="app">
      <Header />

      <div className="appBody">
        <div className="appContent">  
          {children}
        </div>
      </div>
    </div>
  );
}