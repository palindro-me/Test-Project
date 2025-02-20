import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";

type ButtonPropsType = {
    BtnText: string
    width?: string
    className?: string
    onClick?: () => void;
}
export const Button = (props: ButtonPropsType) => {
    return (
        <StyledBtn onClick={props.onClick}>
            {props.BtnText}
        </StyledBtn>
    );
};

const StyledBtn = styled.button`
    border-radius: 6px;
    border: none;
    padding: 12px 20px 13px 20px;
    height: 45px;
    color: white;
    background: ${theme.colors.lightTheme.purple};
    font-weight: 500;
    font-size: 16px;
    letter-spacing: 0.08em;
`
