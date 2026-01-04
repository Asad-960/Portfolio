import styled from "styled-components";
import { COLORS, QUERIES, rem, WEIGHTS } from "../../constants";
import { useState } from "react";
import MobileMenu from "../MobileMenu";
import SelectLanguage from "../SelectLanguage";
import Social from "../Social";
const Header = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <>
            <Wrapper>
                <LogoWrapper href="/">
                    <Logo src="/assests/Logo.svg" alt="Logo"/>
                        Asad
                </LogoWrapper>
                <NavLinks>
                    <a href="#home">home</a>
                    <a href="#projects">works</a>
                    <a href="#aboutme">about-me</a>
                    <a href="#contact">contact</a>
                <DropDown>
                    <SelectLanguage />
                </DropDown>
                </NavLinks>
                <Button onClick={() => setShowMobileMenu(!showMobileMenu)}>
                    <Icon src="/assests/menu.svg" alt="menu icon"/>
                </Button>
            </Wrapper>
            <MobileMenu isOpen={showMobileMenu} OnDismiss={() => setShowMobileMenu(false)}/>
            <Social />
        </>
    )
};


const Wrapper = styled.div`
    padding-top: ${rem(19)};
    display: flex;
    justify-content: space-between;    
    @media ${QUERIES.laptopAndUp}{ 
        padding-top: ${rem(32)};
    }
    position: fixed;
    top: 0;
    width: inherit;
    background: inherit;
    z-index: 10000;
    padding-bottom: 8px;
    @media (${QUERIES.tabletAndBelow})
    {
        background: ${COLORS.black};
    }
`;

const DropDown = styled.div`
    @media (${QUERIES.tabletAndBelow}) {
      display: none;
    }
`;
const Logo = styled.img`
  height: ${rem(16)};
  width: ${rem(16)};
  margin-top: ${rem(4)};  
`;

const LogoWrapper = styled.a`
    display: flex;
    gap: ${rem(8)};;
    font-size: ${rem(16)};;
    font-weight: ${WEIGHTS.bold};
    color: ${COLORS.white};
    text-decoration: none;
    @media ${QUERIES.tabletAndBelow}{ 
        margin-left: ${rem(16)};
    }
`;

const NavLinks = styled.nav`
    display: flex;
    gap: ${rem(32)};;
    a{
        color: ${COLORS.gray};
        text-decoration: none;   
        font-size: ${rem(16)};;
        font-weight: ${WEIGHTS.medium};
    }
    a:last-child{
        margin-right: ${rem(16)};;
    }
    a::before{
        content: "#";
        color: ${COLORS.primary};
    }

    @media ${QUERIES.tabletAndBelow}{
        display: none;
    }
`;

const Button = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
    position: absolute;
    top: ${rem(22)};
    right: ${rem(16)};
    
    @media ${QUERIES.laptopAndUp}{
        display: none;
    }

`;

const Icon = styled.img`
    height: ${rem(24)};
    width: ${rem(24)};
`;
export default Header;