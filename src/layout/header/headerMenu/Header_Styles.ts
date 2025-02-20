import {theme} from "../../../styles/Theme";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from '../../../components/Container'

const Menu = styled.nav`
    max-width: 870px;
    width: 100%;

    ul {
        list-style: none;
        font-weight: 500;
        font-size: 16px;
        color: ${theme.colors.lightTheme.text};
    }
`

const Header = styled.header`
    height: 100px;
    width: 100%;

    ${Container} {
        display: flex;
        align-items: center;

        @media screen and (max-width: 1430px) {
            padding: 0 24px;
        }
    }

    ${FlexWrapper} {
        width: 100%;
        max-width: 1090px;
        padding-left: 25px;

        @media screen and (max-width: 1440px) {
            gap: 87px;
        }

        @media ${theme.media.tablet} {
            padding-left: 0px;
            column-gap: 32px;
        }
    }
`

export const S = {
    Menu, Header
}