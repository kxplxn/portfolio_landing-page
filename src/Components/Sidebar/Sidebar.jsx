import React, { useState, useEffect, createRef } from 'react';
import NavigationLink from './NavigationLink/NavigationLink';
import './Sidebar.sass';

const Sidebar = () => {
  const toggler = createRef();
  const nav = createRef();
  useEffect(() => {
    toggler.current.classList.add('animated', 'wobble', 'delay-2s');
  }, []);

  const navLinkNames = ['Head', 'About', 'Projects', 'Blog Posts', 'Contact'];
  const [activeLink, setActiveLink] = useState('');
  // eslint-disable-next-line no-undef
  window.onscroll = () => setActiveLink('');

  const toggleNav = () => {
    toggler.current.classList.toggle('on');
    nav.current.classList.toggle('on');
    // eslint-disable-next-line no-undef
    document.body.classList.toggle('on');
  };
  return (
    <div id="Sidebar">
      <button
        type="button"
        ref={toggler}
        className="Toggler btn btn-dark"
        onClick={toggleNav}
      >
        <i className="Icon far fa-compass fa-3x" />
      </button>
      <div ref={nav} className="Nav d-flex align-items-center text-center">
        <div className="Links d-block w-100">
          {navLinkNames.map((name) => (
            <NavigationLink
              key={name}
              text={name}
              href={`#${name.replace(' ', '')}`}
              active={activeLink === name.replace(' ', '')}
              setActive={() => setTimeout(() => setActiveLink(name.replace(' ', '')), 1000)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
