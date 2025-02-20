import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";
import {theme} from "../../styles/Theme";

export const Menu = () => {
    return (
        <StyledMenu>

            <ul>
                <FlexWrapper direction={'row'} justify={'space-between'} gap={'750px'}>
                    <li><a href="">Home</a></li>
                    <li><a href="">Projects</a></li>
                </FlexWrapper>
            </ul>

        </StyledMenu>
    );
};

const StyledMenu = styled.nav`

    ul {
        list-style: none;
        max-width: 864px;
        font-weight: 500;
        font-size: 16px;
        color: ${theme.colors.lightTheme.text};
    }
`

