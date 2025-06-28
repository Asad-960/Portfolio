import styled from "styled-components";
import { COLORS, QUERIES, rem, WEIGHTS } from "../../constants";

const Hero = () => {
    return(
        <Wrapper id="home">
            <Text>
                <Heading>
                    Asad is a <Highlight>ASP .NET Core</Highlight> and <Highlight>React developer</Highlight>
                </Heading>
                <Paragraph>
                    He creates responsive dotnet websites that provide a smooth user experience
                </Paragraph>
                <ContactButton onClick={() => { window.location.hash = "#contact"; }}>
                    Contact me !!
                </ContactButton>
            </Text>
            <HeroWrapper>
                <PurpleLogo src="/assests/PurpleLogo.svg" />
                <HeroImage src="/assests/Picture.svg"/>
                <DottedLogo src="/assests/SmallDots.svg"/>
                <Status>
                    <PinkSquare/>
                    <p>
                        Currently polishing <span>Portolio</span>
                    </p>
                </Status>
            </HeroWrapper>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    display: flex;
    position: relative;
    height: fit-content;
    padding-top: ${rem(123)};
    @media ${QUERIES.phoneAndBelow} {
        display: block;
    }
    @media ${QUERIES.tabletAndBelow}
    {
        padding-top: ${rem(34)};

    }
    `;
const Text = styled.div`
    margin-top: ${rem(74)};
    flex: 1;
    margin-left: 1px;
    user-select: none;
    @media ${QUERIES.phoneAndBelow} {
        width: 100%;
        margin-top: ${rem(34)};
        margin-left: 16px;
        margin-right: 16px;
    }
`;
const Heading = styled.p`
    font-weight: ${WEIGHTS.semiBold};
    font-size: ${rem(32)};
`;
const Paragraph = styled.p`
    font-weight: ${WEIGHTS.semiBold};
    font-size: ${rem(16)};
    color: ${COLORS.gray};
    margin-top: ${rem(32)};
    max-width: ${rem(520)};
`;
const ContactButton = styled.button`
    margin-top: 24px;
    background: none;
    border: none;
    padding: ${rem(8)} ${rem(16)};
    color: ${COLORS.white};
    border: 1px solid ${COLORS.primary};
    cursor: pointer;
`;
const Highlight = styled.span`
    color: ${COLORS.primary};
`;

const HeroWrapper = styled.div`
    isolation: isolate;
    position: relative;
    width: fit-content;
    height: fit-content;
    @media (${QUERIES.phoneAndBelow})
    {
        /* background: ${COLORS.white}; */
        width: 100vw;
        margin-left: 22px;
        
    }
`;
const HeroImage = styled.img`
    position: relative;
    z-index: 10;
    @media (${QUERIES.phoneAndBelow})
    {
        width: 307.91px;
        height: 260.08px;
        margin: auto;
        margin-top: 20px;
        
    }
    @media (${QUERIES.tabletOnly})
    {
        /* transform: scale(0.8); */
    }
    
`;
const PurpleLogo = styled.img`
    position: absolute;
    top: ${rem(84)};
    left: ${rem(-12)};
    z-index: 1;
    @media (${QUERIES.phoneAndBelow})
    {
        top: ${rem(56.6)};
        left: ${rem(-8.09 + 22)};
        height: 104.43px;
    }
    @media (${QUERIES.tabletOnly})
    {
        transform: scale(0.8);
    }
`;
const DottedLogo = styled.img`
    position: absolute;
    top: ${rem(246)};
    right: ${rem(16)};
    width: 84px;
    z-index: 11;    
    @media (${QUERIES.phoneAndBelow})
    {
        width: 56.6px;
        top: ${rem(166.75)};
        left: ${rem(240.54)};
    }
    @media (${QUERIES.tabletOnly})
    {
        transform: scale(0.8);
    }
`;

const Status = styled.div`
    padding: ${rem(8)};
    border: 1px solid ${COLORS.gray};
    color: ${COLORS.gray};
    width: ${rem(403)};
    margin-left: ${rem(18)};
    display: flex;
    & span {
        font-weight: ${WEIGHTS.semiBold};
        color: ${COLORS.white};
    }
    @media (${QUERIES.tabletOnly})
    {
        width: fit-content;
    }
    @media (${QUERIES.phoneAndBelow})
    {
        width: ${rem(320)};
        height: ${rem(58)};
        margin: 0;
        & span {
            display: block;
        }

    }
`;

const PinkSquare = styled.div`
    background: ${COLORS.primary};
    width: 16px;
    height: 16px;
    margin: auto 10px auto 8px;
`;

export default Hero;