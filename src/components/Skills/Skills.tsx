import styled from "styled-components";
import { COLORS, QUERIES, rem, WEIGHTS } from "../../constants";

const Skills = () => {
    return (
        <Wrapper>
            <Header>
                <Heading>skills</Heading>
                <Line />
            </Header>
            <BodyWrapper>
                <LeftSide>
                    <DotsImage src="/assests/SmallDots.svg" />
                    <DotsImage2 src="/assests/SmallDots.svg" />
                    <PurpleImage src="/assests/PurpleLogo.svg" />
                    <SquareImage src="/assests/Rectangle.svg" />
                    <SquareImage2 src="/assests/Rectangle.svg" />
                </LeftSide>
                <RightSide>
                    <Languages>
                        <SkillText>Languages</SkillText>
                        <SkillText>C# JavaScript</SkillText>
                        <SkillText>Python C++ C</SkillText>
                    </Languages>
                    <ColumnWrapper>
                        <SecondSkillColumn>
                            <Databases>
                                <SkillText>Databases</SkillText>
                                <SkillText>SQL SQLite</SkillText>
                            </Databases>
                            <Frameworks>
                                <SkillText>Frameworks</SkillText>
                                <SkillText>React .Net</SkillText>
                                <SkillText>TypeScript</SkillText>
                            </Frameworks>
                        </SecondSkillColumn>
                        <ThirdSkillColumn>
                            <Tools>
                                <SkillText>Tools</SkillText>
                                <SkillText>VsCode Figma</SkillText>
                                <SkillText>Git Github</SkillText>
                            </Tools>
                            <Other>
                                <SkillText>Other</SkillText>
                                <SkillText>Html Css</SkillText>
                            </Other>
                        </ThirdSkillColumn>
                    </ColumnWrapper>

                </RightSide>
            </BodyWrapper>
        </Wrapper>
    )
}

export default Skills;

const Wrapper = styled.div`
    padding-top: ${rem(56)};
    width: 100%;
    background-color: ${COLORS.background};
    height: ${rem(500)};

    @media ${QUERIES.phoneAndBelow}
    {
        padding-top: ${rem(30)};
        padding-bottom: ${rem(30)};
    }
`;
const Header = styled.div`
    display: flex;
    align-items: center;
    @media ${QUERIES.phoneAndBelow}
    {
        padding-bottom: ${rem(30)};
    }
`;
const Heading = styled.p`
    font-size: ${rem(32)};
    font-weight: ${WEIGHTS.medium};
    &::before{
        content: "#";
        color: ${COLORS.primary};
    }
`;
const Line = styled.div`
    width: ${rem(329)};
    background: ${COLORS.primary};
    height: 1px;
    margin-left: ${rem(16)};
    @media (${QUERIES.tabletAndBelow}){
        width: ${rem(170)};
    }
`;



const BodyWrapper = styled.div`
    display: flex;
`;
const LeftSide = styled.div`
    width: 50%;
    position: relative;
    @media (${QUERIES.phoneAndBelow}){
        display: none;
    }
`;
const RightSide = styled.div`
    width: 50%;
    display: flex;
    gap: ${rem(16)};
    align-content: center;
    @media (${QUERIES.tabletAndBelow}){
        width: 100%;
        flex-wrap: wrap;
        margin-left: ${rem(16)};
    }
`;
const DotsImage = styled.img`
    width: ${rem(63)};
    height: ${rem(63)};
    position: absolute;
    top: ${rem(50)};
    left: ${rem(32)};
`;
const DotsImage2 = styled(DotsImage)`
    top: ${rem(155)};
    left: ${rem(209)};
`;
const PurpleImage = styled.img`
    width: ${rem(113)};
    height: ${rem(113)};
    position: absolute;
    top: ${rem(181)};
    left: ${rem(47)};
`;
const SquareImage = styled.img`
    width: ${rem(86)};
    height: ${rem(86)};
    position: absolute;
    top: ${rem(12)};
    left: ${rem(259)};
`;

const SquareImage2 = styled(SquareImage)`
    width: ${rem(52)};
    height: ${rem(52)};
    top: ${rem(205)};
    left: ${rem(329)};
`;
const SkillsWrapper = styled.div`
    min-width: ${rem(170)};
    border: 1px solid ${COLORS.gray};
    display: flex;
    flex-direction: column;
    max-height: fit-content;

`
const SkillText = styled.div`
    font-size: ${rem(16)};
    color: ${COLORS.gray};
    padding: ${rem(8)};
    &:first-of-type{
        color: ${COLORS.white};
        border-bottom: 1px solid ${COLORS.gray};
    }
`;

const Languages = styled(SkillsWrapper)`
`;
const Databases = styled(SkillsWrapper)`
`;
const Tools = styled(SkillsWrapper)`
`;
const Frameworks = styled(SkillsWrapper)`
`;
const Other = styled(SkillsWrapper)`
`;
const ColumnWrapper = styled.div`
    display: flex;
    gap: ${rem(16)};
    
`;

const SecondSkillColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${rem(16)};
`;
const ThirdSkillColumn = styled(SecondSkillColumn)`
    @media (${QUERIES.phoneAndBelow}){
        position: relative;
        top: -${rem(139)};
    }
`;