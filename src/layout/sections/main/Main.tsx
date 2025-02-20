import React from 'react';
import {Button} from "../../../components/button/Button";
import photo from '../../../assets/images/pic1.png'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {Container} from "../../../components/Container";
import {S} from './Main_Styles'
import styled from "styled-components";
import {theme} from "../../../styles/Theme";

export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper  justify='space-between' wrap={'wrap'} >

                    <S.DeveloperWrapper>
                        <S.Position>DEVELOPER</S.Position>
                        <S.Name>Erica Font</S.Name>
                        <S.DevDescription>Amet minim mollit non deserunt ullamco
                            est sitaliqua dolor do amet sint. Velit officia
                            consequat duis enim
                            velit mollit. Exercitation veniam consequat
                            sunt.</S.DevDescription>
                        <Button className={'BtnUserContact'} BtnText={'Contact Me'} />
                    </S.DeveloperWrapper>

                    <S.Photo src={photo} alt="#"/>
                </FlexWrapper>

                <FlexWrapper justify={'center'} align={'center'}>
                    <Icon iconId={'arrow'} className={"arrowDown"} width="32" height="32"
                          viewBox="0 0 32 32"/>
                </FlexWrapper>

                <FlexWrapper direction={'column'} align='left'
                             justify='space-between'>


                    <S.About className={'about'}>

                        <SectionTitleAbout>About me</SectionTitleAbout>
                        <S.AboutText className={'aboutText'}>The long barrow was built on land previously
                            inhabited in
                            the Mesolithic period. It consisted of a
                            sub-rectangular earthen tumulus, estimated to have
                            been 15 metres(50 feet) in length, with a chamber
                            built from sarsen megaliths on its
                            eastern end. Both inhumed and cremated human remains
                            were placed within this chamber during the Neolithic
                            period, representing at least nine or ten
                            individuals.</S.AboutText>
                    </S.About>
                </FlexWrapper>

            </Container>

        </S.Main>
    )
};



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