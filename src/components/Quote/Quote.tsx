import styled from "styled-components";
import { COLORS, QUERIES, rem, WEIGHTS } from "../../constants";


const Quote = () => {
    return (
        <Wrapper>
            <Container>
               <Square />
               <Saying>
                    <span>He who has a why to live can bear almost any how</span>
                </Saying>
                <CommaTop src="/assests/comma.svg"/>
                <AutorContainer>
                   <AuthorName>- Nietzsche</AuthorName> 
                </AutorContainer>
                <CommaBottom src="/assests/comma.svg"/>
            </Container>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    /* + 85 + 37 */
    margin-top: ${rem(112)};
    @media (${QUERIES.tabletAndBelow})
    {        
        /* + 85 + 37 + 72 */
        margin-top: ${rem(112)};
        margin-left: 22px;
        margin-right: 22px;
    }
    position: relative;
    `;
const Container = styled.div`
    margin: auto;
    width: fit-content;
    height: fit-content;
    position: relative;
    border: 1px solid ${COLORS.gray};    
`;
const Saying = styled.div`
    padding: 32px;
    font-size: 24px;
    font-weight: ${WEIGHTS.medium};
    @media (${QUERIES.tabletAndBelow})
    {
      padding: 16px 36px;
    }
`;
const Square = styled.div`
    border: 1px solid ${COLORS.gray};
    width: ${rem(91)};
    height: ${rem(91)};
    position: absolute;
    overflow-x: hidden;
    right: calc((98.7vw - 100%) / -2);
    top: ${rem(10)};
    border-right: none;
    @media ${QUERIES.tabletAndBelow}
    {
        display: none;
    }
`;
const CommaTop = styled.img`
    position: absolute;
    top: -16px;
    left: 19px;
`;
const CommaBottom = styled.img`
    position: absolute;
    bottom: -13.7px;
    right: 16.53px;
`;

const AutorContainer = styled.div`
    width: fit-content;
    height: fit-content;
    position: absolute;
    right: -1px;
    
`;

const AuthorName = styled.div`
    border: 1px solid ${COLORS.gray};   
    border-top: none; 
    padding: 16px;
    @media ${QUERIES.phoneAndBelow}
    {
        padding: 8px;
    }
`;
export default Quote;