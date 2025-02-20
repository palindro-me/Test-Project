import React from 'react';
import {Menu} from "./Menu";
import {Button} from "../../../components/button/Button";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {S} from './Header_Styles'


export const Header: React.FC = () => {
    return (
        <S.Header>
            <Container>

                <FlexWrapper direction={'row'} justify={'space-between'} align={'center'} >
                    <Menu/>
                    <Button BtnText={'Contact'} width={'105px'}/>
                </FlexWrapper>

            </Container>

        </S.Header>
    );
};



