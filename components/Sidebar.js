import React, { useState } from 'react';
import Image from 'next/image';
import scaperlogo from '../assets/scaperlogo.jpg';
import styled from 'styled-components';
import { navItems } from '../static/navItems';

const Sidebar = () => {
  const [activeIcon, setActiveIcon] = useState(navItems[0].title)
  return (
    <Wrapper>
        <LogoContainer>
            <Logo>
                <Image src={scaperlogo} alt='Scaper Logo' 
                style={{
                    width: 100, 
                    height: 104, 
                    marginTop: -23,
                  }}/>
                  <span style={{ fontSize: 24, fontWeight: 600, marginLeft: 1 }}>SCAPER</span>
            </Logo>
        </LogoContainer>
        <NavItemsContainer>
             {navItems.map((item, index) => (
            <NavItem key={index} onClick={() => setActiveIcon(item.title)}>
                <NavIcon style={{ color: item.title === activeIcon && '#e42733'}}>{item.icon}</NavIcon>
                <NavTitle>{item.title}</NavTitle>
            </NavItem>
        ))}</NavItemsContainer>
    </Wrapper>
  )
}

export default Sidebar

const Wrapper = styled.div`
  border-right: 1px solid #282b2f;
  width: calc(22rem - 16px - 16px);
  padding: 0 1rem;
`
const LogoContainer = styled.div`
  margin: 1.5rem 0;
`

const Logo = styled.div`
  width: 44%;
  object-fit: contain;
  margin-left: 1.5rem;
`
const NavItemsContainer = styled.div`
  margin-top: 3rem;

  &:hover {
    cursor: pointer;
  }
`
const NavItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  font-weight: 500;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  height: 4rem;

  &:hover {
    background-color: #141519;
  }
`
const NavIcon = styled.div`
  background-color: #141519;
  padding: 0.7rem;
  border-radius: 50%;
  margin: 0 1rem;
  display: grid;
  place-items: center;
`
const NavTitle = styled.div``

