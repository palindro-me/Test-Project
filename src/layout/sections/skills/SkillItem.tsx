import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";

type SkillItemPropsType = {
    skill: string
    skillIcon: string
    // skillIcon: ReactNode
}
export const SkillItem = (props: SkillItemPropsType) => {
    return (
        <StyledSkillItem>
            <Icon iconId={props.skillIcon} height={'120px'} width={'120px'} viewBox={"0 0 120 120"} />
            <SkillText>{props.skill}</SkillText>
        </StyledSkillItem>
    );
};

export const StyledSkillItem = styled.div`
    //max-height: 164px;
    max-width: 120px;
`

const SkillText = styled.p`
    margin-top: 20px;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    text-align: center;
    color: #1f2626;
`

