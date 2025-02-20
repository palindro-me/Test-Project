import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {S} from './Header_Styles'

export const Menu: React.FC = () => {
    return (
        <S.Menu>

            <ul>
                <FlexWrapper direction={'row'} justify={'space-between'} >
                    <li><a href="">Home</a></li>
                    <li><a href="">Projects</a></li>
                </FlexWrapper>
            </ul>

        </S.Menu>
    );
};



