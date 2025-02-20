import {theme} from "../../../styles/Theme";
import styled from "styled-components";
import {font} from "../../../styles/Common";
import {FlexWrapper} from "../../../components/FlexWrapper";

const Main = styled.section`
    margin-top: 160px;

    @media screen and (max-width: 1050px) {
        margin-top: 70px;
        ${FlexWrapper} {
            flex-direction: column-reverse;
            row-gap: 63px;
            align-items: center;

            .about {
                margin-top: 72px;
                padding: 0 41px 47px;
            }

            .arrowDown {
                display: none;
            }
        }
    }

}

@media ${theme.media.mobile} {
    margin-top: 30px;
    ${FlexWrapper} {
        flex-direction: column-reverse;
        row-gap: 63px;
        align-items: center;

        .arrowDown {
            display: none;
        }

        .about {
            margin-top: 72px;
            padding: 0 41px 47px;
        }
    }
`

const Photo = styled.img`
    width: 533px;
    height: 399px;
    margin-bottom: 35px;
    
    @media ${theme.media.mobile} {
        width: 318px;
        height: 238px;
    }
`
const Position = styled.h1`
margin-bottom: 10px;
    ${font({family:'Tinos',weight:400, Fmax:20, Fmin:16})};
    color: ${theme.colors.lightTheme.title}
`
const Name = styled.span`
    display: inline-block;
    margin-bottom: 10px;
    letter-spacing: 0.08em;
    ${font({weight:600, Fmax:72, Fmin:40})};
    color: ${theme.colors.lightTheme.purple};
`
const DevDescription = styled.p`
    margin-bottom: 15px;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.12em;
    color: ${theme.colors.lightTheme.text};

    @media ${theme.media.mobile} {
        max-width: 330px;
        text-align: center;
    }
`

const DeveloperWrapper = styled.div`
    max-width: 514px;
    margin-top: 50px;
    margin-bottom: 66px;
    padding-left: 30px;

    button {
        margin-top: 30px;
    }

    button {
        margin-top: 16px;
    }
}

@media screen and (max-width: 1050px) {
    text-align: center;
}
@media ${theme.media.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 0px;
    padding-left: 0px;


    button {
        margin-top: 16px;
    }
}
`
const About = styled.div`
    max-width: 865px;
    margin-top: 220px;
    margin-left: 50px;
    
    @media ${theme.media.mobile} {
         margin-left: 0px;
    }
`



const AboutText = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 144%;
    letter-spacing: 0.04em;
    color: ${theme.colors.lightTheme.text};
    
    position: relative;

    &::before {
        content: '';
        display: inline-block;
        border-radius: 2px;
        width: 118px;
        height: 5px;
        background: ${theme.colors.lightTheme.purple};
        transform: rotate(90deg);

        position: absolute;
        top: 69px;
        bottom: 0;
        left: -75px;
    }
`

 export const SectionTitle = styled.h2`
    font-weight: 600;
    font-size: 24px;
    line-height: 108%;
    letter-spacing: 0.04em;
    color: ${theme.colors.lightTheme.title};
    margin-bottom: 32px;
`
const SectionTitleAbout = styled(SectionTitle)`
    margin-bottom: 20px;
    letter-spacing: 0.11em;
    text-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
`
export const S = {
    Main, Photo,Position,Name, DevDescription,DeveloperWrapper,About, AboutText, SectionTitle, SectionTitleAbout
}