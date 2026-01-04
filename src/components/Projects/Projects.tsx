import styled from "styled-components";
import { COLORS, QUERIES, rem, WEIGHTS } from "../../constants";

const projectsData = [
    {
        id: 1,
        title: "Chess",
        description: "Self Playing Chess Game",
        languages: "React • dotnet",
        image: "/assests/chess.jpg",
        github: "https://github.com/Asad-960/Chess",
        live: "https://www.asadchess.tech/"
    },
    {
        id: 2,
        title: "Job Portal",
        description: "Create and apply for jobs",
        languages: "React • dotnet",
        image: "/assests/jobportal.jpg",
        github: "https://github.com/Asad-960/Taskify",
        live: ""
    },
    {
        id: 3,
        title: "Taskify",
        description: "Manage and Schedule daily tasks",
        languages: "React • dotnet",
        image: "/assests/taskify.jpg",
        github: "https://github.com/Asad-960/Taskify",
        live: ""
    }
];

const Projects = () => {
    return (
        <Wrapper id="projects">
            <Header>
                <Heading>projects</Heading>
                <Line />
                <ViewButton onClick={() => window.open("https://github.com/Asad-960?tab=repositories", "_blank")}>
                    View all ~~{">"}
                </ViewButton>
            </Header>
            <ProjectWrapper>
                {projectsData.map((project) => (
                    <Modal key={project.id}>
                        <ImageContainer>
                            <Image src={project.image} alt={project.title} />
                        </ImageContainer>
                        <Languages>{project.languages}</Languages>
                        <Description>
                            <TextContent>
                                <h1>{project.title}</h1>
                                <p>{project.description}</p>
                            </TextContent>
                            <ButtonGroup>
                                <Button onClick={() => window.open(project.github, "_blank")}>
                                    Github {"<~>"}
                                </Button>
                                {project.live && (
                                    <Button onClick={() => window.open(project.live, "_blank")}>
                                        Live {"!!"}
                                    </Button>
                                )}
                                {!project.live && (
                                     <Button disabled style={{opacity: 0.5, cursor: 'not-allowed'}}>
                                        Live {"!!"}
                                    </Button>
                                )}
                            </ButtonGroup>
                        </Description>
                    </Modal>
                ))}
            </ProjectWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background: ${COLORS.background};
    padding-top: ${rem(80)};
    
    @media ${QUERIES.laptopAndUp} {
        padding-top: ${rem(123)};
    }
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${rem(48)};
    padding: 0 ${rem(16)}; 
    
    @media ${QUERIES.laptopAndUp} {
        padding: 0;
    }
`;

const Heading = styled.h2`
    font-size: ${rem(32)};
    font-weight: ${WEIGHTS.medium};
    display: flex;
    align-items: center;
    
    &::before {
        content: "#";
        color: ${COLORS.primary};
        margin-right: 4px;
    }
`;

const Line = styled.div`
    height: 1px;
    background: ${COLORS.primary};
    flex: 1;
    margin: 0 ${rem(16)};
    max-width: ${rem(500)};
`;

const ViewButton = styled.button`
    background: transparent;
    border: none;
    font-size: ${rem(16)};
    font-weight: ${WEIGHTS.medium};
    color: ${COLORS.white};
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
        color: ${COLORS.primary};
    }
`;

const ProjectWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: ${rem(24)};
    width: 100%;
    padding: 0 ${rem(16)};

    @media ${QUERIES.laptopAndUp} {
        padding: 0;
        grid-template-columns: repeat(3, 1fr);
    }
`;

const Modal = styled.div`
    border: 1px solid ${COLORS.gray};
    background: ${COLORS.background};
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px -10px rgba(0,0,0,0.5);
        border-color: ${COLORS.primary};
    }
`;

const ImageContainer = styled.div`
    width: 100%;
    height: 200px;
    overflow: hidden;
    border-bottom: 1px solid ${COLORS.gray};
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;

    ${Modal}:hover & {
        transform: scale(1.05);
    }
`;

const Languages = styled.p`
    color: ${COLORS.gray};
    border-bottom: 1px solid ${COLORS.gray};
    padding: ${rem(8)} ${rem(16)};
    font-size: ${rem(14)};
`;

const Description = styled.div`
    padding: ${rem(16)};
    display: flex;
    flex-direction: column;
    gap: ${rem(16)};
    height: calc(100% - 245px); /* Adjust based on image + langs height */
    justify-content: space-between;
`;

const TextContent = styled.div`
    h1 {
        font-weight: ${WEIGHTS.medium};
        font-size: ${rem(24)};
        margin-bottom: ${rem(8)};
        color: ${COLORS.white};
    }
    p {
        color: ${COLORS.gray};
        font-size: ${rem(16)};
        line-height: 1.5;
    }
`;

const ButtonGroup = styled.div`
    display: flex;
    gap: ${rem(16)};
    margin-top: auto;
`;

const Button = styled.button<{ secondary?: boolean }>`
    padding: ${rem(8)} ${rem(16)};
    background: ${props => props.secondary ? COLORS.gray : 'transparent'};
    border: 1px solid ${props => props.secondary ? COLORS.gray : COLORS.primary};
    color: ${props => props.secondary ? COLORS.background : COLORS.white};
    cursor: pointer;
    font-family: 'Fira Code', monospace;
    font-weight: ${WEIGHTS.medium};
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background: ${props => props.secondary ? COLORS.white : 'rgba(199, 120, 221, 0.1)'};
        transform: translateY(-2px);
    }

    &:active {
        transform: translateY(0);
    }
`;

export default Projects;
