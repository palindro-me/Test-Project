import styled from "styled-components";
import {theme} from "../../../../styles/Theme";
import {FlexWrapper} from "../../../../components/FlexWrapper";

const TextBlocks = styled.div`
    padding-left: 25px;
    @media ${theme.media.mobile} {
    padding-left: 18px;
    }     
`

const Project = styled.div`
    max-width: 522px;
    margin-bottom: 31.6px;
    //width: 100%; фиксир ширина мобилки вместо %:
    width: 362px;
    border-radius: 6px;
    flex-grow: 1;
    background-color: ${theme.colors.lightTheme.projectBgc};

    ${FlexWrapper} {
        margin-top: 10px;
    }

    & ${TextBlocks} {
        & ${FlexWrapper} {
            gap: 12px;
            @media screen and (max-width: 780px) {
                justify-content: start;
            }
        }
`
const Image = styled.img`
max-width: 522px;
width: 100%;
height: 388px;
object-fit: cover;
`
const ProjectTitle = styled.h3`
    margin-top: 30px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-weight: 600;
    font-size: 20px;
    color: ${theme.colors.lightTheme.title};
    @media ${theme.media.mobile} {
        margin-top: 16px;
    }
`
const TechnologyDescr = styled.p`
    margin: 20px 0 30px;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.04em;
    color: ${theme.colors.lightTheme.text};
    
    @media ${theme.media.mobile} {
        margin: 16px 0 19px 0;
    }
`

export const S = {
    TextBlocks,Project, Image, ProjectTitle, TechnologyDescr
}