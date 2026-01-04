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
                        I started my coding journey in Fall 2023 with univeristy. The first time I sat down to write some C++ code I was looking here and there thinking about how to begin while everyone was just typing as it seemed normal.
                        Slowly I grasped this coding feeling and the ecstasy after competing a problem was what worth doing programming for me.
                    </Text>
                    <br />
                    <Text>
                        I started programming in c++ with university, side by side with CS50x. It was a great feeling finishing that course but it made me a bit saddened cause I could not find a course like that which focused this much on learning while coding.
                        Then I started exploring different fields and just at the beginning of 2025 I made my mind to learn dotnet.  
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
        width: 100%;
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
        width: ${rem(111)};
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
        width: 100vw;
    }
`;
const Text = styled.p`
    font-size: ${rem(16)};
    color: ${COLORS.gray};
    padding-left: ${rem(16)};
    user-select: none;
`;
const RightSide = styled.div`
    width: 20%;
    @media ${QUERIES.tabletAndBelow}
    {
        width: 0%;
    }
`;