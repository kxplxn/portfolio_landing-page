import React, { createRef, useEffect } from 'react';
import './Sidebar.css';
import NavigationLink from './NavigationLink';

const Sidebar = () => {
  const toggler = createRef();
  const nav = createRef();
  useEffect(() => {
    toggler.current.classList.add('animated', 'wobble', 'delay-2s'); 
  }, []);
  const toggleNav = () => {
    toggler.current.classList.toggle('on');
    nav.current.classList.toggle('on');
    document.body.classList.toggle('on');
  };
  return (
    <div id="Sidebar">
      <button ref={toggler} className="Toggler btn btn-dark" onClick={toggleNav}>
        <i className="Icon far fa-compass fa-3x"></i>
      </button>
      <div ref={nav} className="Nav d-flex align-items-center text-center">
        <div className="Links d-block w-100">
          <NavigationLink href="#Head" text="Home" />
          <NavigationLink href="#About" text="About" />
          <NavigationLink href="#Projects" text="Projects" />
          <NavigationLink href="#Contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};
 
export default Sidebar;