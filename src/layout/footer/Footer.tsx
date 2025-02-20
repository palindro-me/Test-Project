import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../styles/Theme";
import {Container} from "../../components/Container";


export const Footer = () => {
    return (
        <StyledFooter>
            <Container>

            <FlexWrapper align={'center'} justify={'center'}  direction={'column'} >

                <SocialList>

                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={'gmail'} width={'25px'}
                                  height={'24px'}
                                  viewBox={'0 0 25 24'}/>
                        </SocialLink>
                        <Naming>gmail</Naming>
                    </SocialItem>

                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={'linkedin'} width={'22px'}
                                  height={'22px'}
                                  viewBox={'0 0 22 22'}/>
                        </SocialLink>

                        <Naming>linkedin</Naming>
                    </SocialItem>

                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={'github'} width={'39px'}
                                  height={'38px'}
                                  viewBox={'0 0 39 38'}/>
                        </SocialLink>
                        <Naming>GITHUB</Naming>

                    </SocialItem>


                </SocialList>

                <Reference>
                    <ProjectLink>Projects</ProjectLink>
                    <MyContactLink>Contact</MyContactLink>
                </Reference>

                <SpanFooter>WEB DEVELOPER 2025</SpanFooter>
            </FlexWrapper>

            </Container>

        </StyledFooter>
    );
};


const StyledFooter = styled.footer`
    margin: 190px 0 100px;
    background-color: #8cf375;
    //max-width: 319px;
    //text-align: center;

`
const SocialList = styled.ul`
    display: flex;
     gap: 73px
`

//почему не по центру надписи?
const SocialItem = styled.li`
    display: flex;
   flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: center;
    
`
const SocialLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 37px;
    height: 37px;
    border-radius: 25px;
    background-color: ${theme.colors.lightTheme.purple};
`
const Naming = styled.p`
font-weight: 400;
font-size: 12px;
line-height: 93%;
letter-spacing: 0.12em;
text-transform: uppercase;
text-align: center;
color: ${theme.colors.lightTheme.text};
`
const Reference = styled.div`
    margin: 49px 0;
    display: flex;
    flex-direction: row;
    margin-top: 48px;
    gap: 48px;
    font-weight: 400;
    font-size: 14px;
    color: ${theme.colors.lightTheme.text};
`
const ProjectLink = styled.a`

`
const MyContactLink = styled.a``
const SpanFooter = styled.small`
    font-weight: 400;
    font-size: 14px;
    line-height: 186%;
    letter-spacing: 0.04em;
    text-align: center;
    color: ${theme.colors.lightTheme.text};
`