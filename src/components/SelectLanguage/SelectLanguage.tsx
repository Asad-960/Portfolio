import styled from "styled-components";
import { rem, WEIGHTS, COLORS, QUERIES } from "../../constants";
import { useRef, useState } from "react";


const SelectLanguage = () => {    
    const [value, setValue] = useState("EN");
    const [ isOpen, setIsOpen ] = useState(false);


    const handleMouseDown = () => {
        setIsOpen(!isOpen);
    };
    const handleBlur = () => {
        setIsOpen(false);
    };
    const selectref = useRef(null);

    return (
        <Wrapper>
            <NativeSelect onMouseDown={handleMouseDown} onBlur={handleBlur} ref={selectref}
                value={value}
                onChange={(ev) => setValue(ev.target.value)}>
                <LanguageOption value="EN">EN</LanguageOption>
                <LanguageOption value="FR">FR</LanguageOption>
                <LanguageOption value="DE">DE</LanguageOption>
            </NativeSelect>
            <PresentationalBit>
                {value}
                {
                    isOpen ? 
                    <Arrow src="/assests/arrow-up.svg" alt="arrow-up"/>
                    :
                    <Arrow src="/assests/arrow-down.svg" alt="arrow-down"/>
                }
            </PresentationalBit>
        </Wrapper>
    )
}

export default SelectLanguage;

const Wrapper = styled.div`
    position: absolute;
    display: flex;
    right: ${rem(-50)};
    width: max-content;
    @media (${QUERIES.tabletAndBelow})
    {
        top: -5px;
        right: revert;
    }
`;


const NativeSelect = styled.select`
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    appearance: none;       
    -webkit-appearance: none;
    -moz-appearance: none;
`;

const Arrow = styled.img`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 12px;
    margin: auto;
    pointer-events: none;
`;
const PresentationalBit = styled.div`
    background-color: ${COLORS.background};
    font-weight: ${WEIGHTS.semiBold};
    font-size: ${rem(16)};
    color: ${COLORS.gray};
    padding-right: 16px;

    ${NativeSelect}:focus + & {
        outline: 1px dotted #212121;
        outline: 5px auto -webkit-focus-ring-color;
    }
    @media (${QUERIES.tabletAndBelow})
    {
        font-size: ${rem(32)};
    }
    `;

const LanguageOption = styled.option`
    font-size: ${rem(16)};
    font-weight: ${WEIGHTS.normal};
    background: ${COLORS.background};
    color: ${COLORS.gray};
`;

