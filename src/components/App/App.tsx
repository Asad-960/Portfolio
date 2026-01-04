import styled from "styled-components";
import Header from "../Header"
import { COLORS, QUERIES, rem } from "../../constants";
import Hero from "../Hero";
import Projects from "../Projects";
import Skills from "../Skills";
import AboutMe from "../AboutMe";
import Contacts from "../Contacts";

const App = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Header />
        <Hero />
        <AboutMe />
        {/* <Quote /> */}
        <Skills />
        <Projects />
        <Contacts />
      </ContentWrapper>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  width: 100%;
  height: 100%;  
  color: ${COLORS.white};
`;

const ContentWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (${QUERIES.laptopAndUp})
  {
    width: calc(100% - ${rem(342)});
    margin: 0 auto;
    background-color: ${COLORS.black};
    height: 100rem;
  }
  `;
export default App
