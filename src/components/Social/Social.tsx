import styled from "styled-components"
import { COLORS, QUERIES, rem } from "../../constants";

const Social = () => {
    return (
        <Wrapper>
            <Line />
            <a href="https://github.com/Asad-960">
                <img src="/assests/Github.svg"/>
            </a>
            <a href="mailto:asadullahafzaal@gmail.com">
                <img src="/assests/Email.svg"/>
            </a>
            <a href="https:linkedin.com/in/asad-ullah-afzaal-17006b370">
                <img src="/assests/Linkedin.svg"/>
            </a>
        </Wrapper>
        
    )
}

export default Social;

const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 32.5px;
    @media ${QUERIES.tabletAndBelow} {
        display:none;
    }
`;
const Line = styled.div`
    margin: auto;
    height: ${rem(191)};
    width: 1px;
    border-right: 1px solid ${COLORS.gray};
    @media ${QUERIES.tabletAndBelow} {
        display: none;
    }   
`;