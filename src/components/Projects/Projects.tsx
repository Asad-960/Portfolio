import styled from "styled-components";
import { COLORS, QUERIES, rem, WEIGHTS } from "../../constants";

const Projects = () => {
    return (
        <Wrapper  id="projects">
            <Header>
                <Heading>projects</Heading>
                <Line />
                <ViewButton>View all ~~{">"}</ViewButton>
            </Header>
            <ProjectWrapper>
                <Modal>
                    <Image src="/assests/chess.jpg"/>    
                    <Languages>React dotnet</Languages>
                    <Description>
                        <h1>Chess</h1>
                        <p>Self Playing Chess Game</p>
                        <GithubButton onClick={() => {window.open("https://github.com/Asad-960/Chess", "_blank")}}> Github {"<~>"}</GithubButton>
                    </Description>
                </Modal>
                <Modal>
                    <Image src="/assests/jobportal.jpg"/>    
                    <Languages>React dotnet</Languages>
                    <Description>
                        <h1>Job Portal</h1>
                        <p>Self Playing Chess Game</p>
                        <GithubButton onClick={() => {window.open("https://github.com/Asad-960/Taskify", "_blank")}}> Github {"<~>"}</GithubButton>
                    </Description>
                </Modal>
                <Modal>
                    <Image src="/assests/taskify.jpg"/>    
                    <Languages>React dotnet</Languages>
                    <Description>
                        <h1>Taskify</h1>
                        <p>Self Playing Chess Game</p>
                        <GithubButton onClick={() => {window.open("https://github.com/Asad-960/Taskify", "_blank")}}> Github {"<~>"}</GithubButton>
                    </Description>
                </Modal>
            </ProjectWrapper>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    background: ${COLORS.background};
    @media ${QUERIES.laptopAndUp}
    {
        padding-top: ${rem(123)};
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
    /* border: 1px solid ${COLORS.primary}; */
    width: ${rem(511)};
    background: ${COLORS.primary};
    height: 1px;
    margin-left: ${rem(16)};

    @media ${QUERIES.phoneAndBelow}
    {
        width: ${rem(111)};
    }
`;

const ViewButton = styled.button`
    margin-left: auto;
    background: inherit;
    border: none;
    display: none;
    font-weight: ${WEIGHTS.medium};
    color: ${COLORS.white};
    @media ${QUERIES.phoneAndBelow}
    {
        display: none;
    }
`;

const ProjectWrapper = styled.div`
    margin-top: ${rem(48)};
    display: flex;
    gap: 16px;
    justify-content: center;
    width: 100%;
    @media ${QUERIES.phoneAndBelow}
    {
        margin: 0 ${rem(16)};
        flex-direction: column;
        align-items: center;
        width: fit-content;
    }
`;
const Modal = styled.div`

`;
const Image = styled.img`
    border: 1px solid ${COLORS.gray};
    border-bottom: none;
    width: 500px;
    height: 190px;
    
`;
const Languages = styled.p`
    color: ${COLORS.gray};
    border: 1px solid ${COLORS.gray};
    border-top: none;
    padding: ${rem(8)};
    `;
const Description = styled.div`
    padding: ${rem(16)};
    border: 1px solid ${COLORS.gray};
    display: flex;
    flex-direction: column;
    gap: 16px;
    & h1 {
        font-weight: ${WEIGHTS.medium};
        font-size: ${rem(24)};
    }
    & p {
        color: ${COLORS.gray};
        font-size: ${rem(16)};
    }
`;
const GithubButton = styled.button`
    padding: 8px 16px;
    border: 1px solid ${COLORS.primary};
    background: inherit;
    width: fit-content;
    color: ${COLORS.white};
    cursor: pointer;
`;
export default Projects;