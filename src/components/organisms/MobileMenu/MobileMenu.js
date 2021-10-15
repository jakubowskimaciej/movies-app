import React, { useState } from 'react';
import styled from 'styled-components';
import { slide as Menu } from 'react-burger-menu';
import Navigation from '../Navigation/Navigation';

var styles = {
  bmBurgerButton: {
    display: 'none',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
    marginRight: '1rem',
  },
  bmCross: {
    background: '#fafafa',
  },
  bmMenu: {
    background: 'var(--color-darkGrey)',
    fontSize: '1.15em',
  },
  bmItemList: {
    color: '#fafafa',
    padding: '0.8rem',
  },
  bmItem: {
    outline: 'none',
  },
};

const Hamburger = styled.div`
  position: fixed;
  top: 1.5rem;
  left: 3rem;
  border: none;
  outline: none;
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: space-around;
  width: 25px;
  line-height: 1;
  height: auto;
  background-color: transparent;
  cursor: pointer;
  z-index: 10;
`;

const Bar = styled.span`
  transition: all 0.3s;
  border-radius: 10px;
  margin: 2px 0;
  height: 4px;
  width: 100%;
  display: inline-block;
  background-color: var(--color-darkGrey);
`;

const MobileMenu = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const isMenuOpen = ({ isNavOpen }) => {
    setIsNavOpen(isNavOpen);
  };

  return (
    <>
      <Hamburger onClick={() => setIsNavOpen(true)}>
        <Bar />
        <Bar />
        <Bar />
      </Hamburger>
      <Menu isOpen={isNavOpen} onStateChange={isMenuOpen} styles={styles}>
        <Navigation clicked={() => setIsNavOpen(false)} />
      </Menu>
    </>
  );
};

export default MobileMenu;
