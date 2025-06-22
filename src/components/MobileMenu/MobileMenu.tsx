import { DialogContent, DialogOverlay } from "@reach/dialog";
import styled from "styled-components";
import { COLORS, rem, WEIGHTS } from "../../constants";
import SelectLanguage from "../SelectLanguage";

type Props = {
    isOpen: boolean;
    OnDismiss: () => void;
};
const MobileMenu = ( {isOpen, OnDismiss}: Props) => {
    return (
        <Overlay isOpen={isOpen} onDismiss={OnDismiss}>
            <Content>
                <Button onClick={OnDismiss}>
                    <Icon src="/assests/exit.svg" alt="menu exit"/>
                </Button>
                <LogoWrapper href="/">
                    <Logo src="/assests/Logo.svg" alt="Logo"/>
                        Asad
                </LogoWrapper>
                <NavLinks>
                    <a href="/">home</a>
                    <a href="/">works</a>
                    <a href="/">about-me</a>
                    <a href="/">contacts</a>
                    {isOpen && (
                        <DropDownWrapper><SelectLanguage/></DropDownWrapper>
                    )}
                </NavLinks>
                <SocialWrapper>
                    <a href="/">
                        <img src="/assests/Linkedin.svg" className="linkedin"/>
                    </a>
                    <a href="/">
                        <img src="/assests/Github.svg" className="github"/>
                    </a>
                    <a href="/">
                        <img src="/assests/Email.svg" className="email"/>
                    </a>
                </SocialWrapper>
            </Content>
        </Overlay>
    )
}

const SocialWrapper = styled.div`
    position: absolute;
    bottom: ${rem(36)};
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: baseline;
    & a img {
        height: ${rem(64)};
        vertical-align: baseline;
    }
    & a .linkedin{
        transform: scale(0.85);
    }
`;
const Overlay = styled(DialogOverlay)`
`;
const Content = styled(DialogContent)`
    width: 100%;
    height: 100%;
    background-color: ${COLORS.background};
    position: fixed;
    top: 0;    
    display: flex;
    flex-direction: column
`;
const DropDownWrapper = styled.div`
    position: relative;  
    margin-left: ${rem(16)};
`;

const NavLinks = styled.nav`
    
    display: flex;
    flex-direction: column;
    margin-top: ${rem(55)};
    gap: ${rem(32)};
    a{
        color: ${COLORS.gray};
        text-decoration: none;   
        font-size: ${rem(32)};;
        font-weight: ${WEIGHTS.medium};
        max-width: fit-content;
        margin-left: ${rem(16)};
        position: relative;
    }
    a:last-child{
        padding-right: ${rem(16)};;
    }
    a::before{
        content: "#";
        color: ${COLORS.primary};
    }
`;
const Button = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
    position: fixed;
    top: ${rem(18)};
    right: ${rem(16)};
    width: fit-content;
`;

const Icon = styled.img`
    height: ${rem(24)};
    width: ${rem(24)};
`;
const Logo = styled.img`
  height: ${rem(16)};
  width: ${rem(16)};
  margin-top: ${rem(4)};  
`;

const LogoWrapper = styled.a`
    display: flex;
    gap: ${rem(8)};
    font-weight: ${WEIGHTS.bold};
    font-size: ${rem(16)};;
    color: ${COLORS.white};
    text-decoration: none;
    margin-top: ${rem(19)};
    margin-left: ${rem(16)};
    width: fit-content;
`;
export default MobileMenu;