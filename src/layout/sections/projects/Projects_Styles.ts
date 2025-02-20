import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {FlexWrapper} from "../../../components/FlexWrapper";

const Wrap = styled.div`
    margin-left: 30px;

    @media ${theme.media.mobile} {
        margin-left: 0px;
    }
`
const Projects = styled.section`
    margin-top: 140px;

    ${FlexWrapper} {
        column-gap: 27px;
        row-gap: 43px;

        @media screen and (max-width: 780px) {
            justify-content: center;
            row-gap: 20px;
        }
        @media ${theme.media.mobile} {
            gap: 15px;
        }
    }

    Button {
        display: block;
        margin: 0 auto;
    }

    @media ${theme.media.mobile} {
        margin: 100px 26px 0;
    }
`

export const S = {
    Wrap, Projects, FlexWrapper
}


