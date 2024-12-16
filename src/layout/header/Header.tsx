import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";

export const Header = () => {
    return (
        <div>
            <StyledHeader className="Header">
                <Logo/>
                <Menu/>
            </StyledHeader>
        </div>
    );
};

const StyledHeader = styled.header`
    background-color: rgba(70, 241, 150, 0.87);
`