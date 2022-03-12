import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const HeaderStyled = styled.header`
  background-color: var(--black);
  padding-inline-end: 1.5rem;
  padding-inline-start: 1.5rem;
  color: var(--white);
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: var(--white);
    font: var(--button);
    text-decoration: none;
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    padding-inline-end: 9rem;
    padding-inline-start: 9rem;
    grid-template-columns: 75% 1fr;
    align-items: center;
  }
`;

const NavStyled = styled.nav`
  position: fixed;
  inline-size: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  background-color: var(--black);
  border-radius: 0.7rem;
  padding-block: 1.25rem;
  padding-block-start: 7.25rem;
  transition: opacity 0.5s ease;
  opacity: 0;
  box-shadow: 2px 2px 5px 2px rgba(255, 255, 255, 0.2);
  z-index: 998;

  ${(props) =>
    props.isOpen &&
    css`
      opacity: 1;
      z-index: 999;
    `}

  a {
    color: var(--white);
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 3rem;
    background-color: var(--black);
    opacity: 1;
    position: static;
    inline-size: initial;
    box-shadow: none;
    padding-block-start: 1.25rem;

    a {
      color: var(--white);
    }
  }
`;

const MenuButton = styled.div`
  position: fixed;
  right: 1.5rem;
  top: 1rem;
  border-radius: 50%;
  inline-size: 4rem;
  block-size: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleMenuClick() {
    setMenuOpen(!menuOpen);
  }

  function handleNavClick() {
    setMenuOpen(false);
  }

  return (
    <HeaderStyled id="about">
      <a href="/">
        <h1>Oscar Aguilar</h1>
      </a>

      <NavStyled isOpen={menuOpen}>
        <a onClick={handleNavClick} href="#">
          About me
        </a>
        <a onClick={handleNavClick} href="#">
          Projects
        </a>
        <a onClick={handleNavClick} href="#">
          Contact
        </a>
      </NavStyled>
      <MenuButton onClick={handleMenuClick}>
        <button
          className={`hamburger hamburger--collapse ${menuOpen && 'is-active'}`}
          type="button"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>
      </MenuButton>
    </HeaderStyled>
  );
};

export default Header;
