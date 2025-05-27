import React from 'react';
import './App.css'
import { generalItems, toolsItems } from '../Data/navigationlinks';

const SideBar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <div>
          <h1 className="logo">Healthcare.</h1>
        </div>
        <div>
          <h3 className='sidebar-title '>General</h3>
          <nav className='sidebar-nav'>
            {/* <ul> */}
              {generalItems.map((eachitem, id) => (
                <a key={id} href='#' className={`nav-item${eachitem.active?"active":""}`}>
                  <span>{eachitem.icon}</span>
                  <span>{eachitem.name}</span>
                </a>
              ))}
            {/* </ul> */}

            <h3 className='sidebar-title '>Tools</h3>
            {/* <ul> */}
              {toolsItems.map((eachitem, id) => (
                <a key={id} href='#' className={`nav-item${eachitem.active?"active":""}`}>
                  <span>{eachitem.icon}</span>
                  <span>{eachitem.name}</span>
                </a>
              ))}
            {/* </ul> */}
          </nav>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
