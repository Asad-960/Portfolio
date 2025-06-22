import styled from "styled-components";
import { rem, WEIGHTS, COLORS, QUERIES } from "../../constants";

const AboutMe = () => {
    return (
        <>
            <Header id="aboutme">
                <Heading>about-me</Heading>
                <Line />
            </Header>
            <Wrapper>
                <Square />
                <LeftSide>
                    <Text>
                        Hello I'm Asad
                    </Text>
                    <br />
                    <Text>
                        I'm a full stack developer with a passion for building web applications. I'm a quick learner and I'm always looking to improve my skills. I started programming in fall 2023 and I'm currently a university student.
                    </Text>
                    <br />
                    <Text>
                        I started programming in c++ then I moved to python and after that I stopped for a while to think about my career. That is when I started learning dotnet approx. 6 months ago.
                    </Text>
                </LeftSide>
                <RightSide>
                </RightSide>
            </Wrapper>
        </>
    )
}
export default AboutMe;
const Wrapper = styled.div`
    background-color: ${COLORS.black};
    padding-top: ${rem(52)};
    display: flex;
    gap: ${rem(166)};
    position: relative;
    
    @media ${QUERIES.phoneAndBelow} {
        padding-top: ${rem(30)};
        display: block;
    }
`;
const Header = styled.div`
    background-color: ${COLORS.black};
    display: flex;
    align-items: center;
`;
const Heading = styled.p`
    font-size: ${rem(32)};
    font-weight: ${WEIGHTS.medium};
    margin-top: ${rem(32)};
    &::before{
        content: "#";
        color: ${COLORS.primary};
    }
`;
const Line = styled.div`
    /* border: 1px solid ${COLORS.primary}; */
    width: ${rem(511)};
    background: ${COLORS.primary};
    height: 1px;
    margin-left: ${rem(16)};
    margin-top: ${rem(32)};
    @media ${QUERIES.phoneAndBelow}
    {
        width: ${rem(211)};
    }
`;
const Square = styled.div`
    border: 1px solid ${COLORS.gray};
    width: ${rem(155)};
    height: ${rem(155)};
    position: absolute;
    overflow-x: hidden;
    left: ${rem(-262)};
    top: ${rem(90)};
    @media ${QUERIES.tabletAndBelow}
    {
        display: none;
    }
`;

const LeftSide = styled.div`
    width: 80%;
    @media ${QUERIES.tabletAndBelow}
    {
        display: block;
        width: 100%;
    }
`;
const Text = styled.p`
    font-size: ${rem(16)};
    color: ${COLORS.gray};
    padding-left: ${rem(16)};
`;
const RightSide = styled.div`
    width: 20%;
    @media ${QUERIES.tabletAndBelow}
    {
        width: 0%;
    }
`;