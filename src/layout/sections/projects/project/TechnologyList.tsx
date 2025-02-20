import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {theme} from "../../../../styles/Theme";

type TechnologyListPropsType = {
    techSkill: string[]
}
export const TechnologyList = (props:TechnologyListPropsType) => {
    return (
       <StyledFlexWrapper gap={'12px'} wrap={'wrap'}  justify={'left'}>
           {props.techSkill.map((tech, index) => (
               <Technology key={index}>{tech}</Technology>
           ))}
       </StyledFlexWrapper>
    );
};



const StyledFlexWrapper = styled(FlexWrapper)`
    @media (max-width: 780px) {
        justify-content: start;
    }
`;
const Technology = styled.div`
    border-radius: 4px;
    padding: 8px 16px;
    //margin-top: 10px;
    //width: 71px;
    //height: 30px;
    background: ${theme.colors.lightTheme.purple};
    font-weight: 400;
    font-size: 10px;
    line-height: 140%;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    text-align: center;
    color: ${theme.colors.lightTheme.buttonText};
    
`