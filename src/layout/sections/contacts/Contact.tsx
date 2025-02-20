import React from 'react';
import styled from "styled-components";
import {Button} from "../../../components/button/Button";
import {SectionTitle} from "../main/Main";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Contact = () => {
    return (
        <StyledContacts>

            <Container>
                <SectionTitle>Contacts</SectionTitle>
                <StyledForm action={'handler.js'} method={'post'}>

                    <BlockItem>
                        <label htmlFor={'username'}> Name</label>
                        <Field type='text' name='username' id='name'
                               placeholder='Name'/>
                    </BlockItem>

                    <BlockItem>
                        <label htmlFor='email'>Email</label>
                        <Field type='email' name='email' id='email'
                               placeholder={'Value'}/>

                    </BlockItem>
                    <Notice>input required</Notice>

                    <BlockItem>
                        <label htmlFor='message'>Message</label>
                        <Field name='message' placeholder={'Hi, I will...'}
                               as={'textarea'}/>
                    </BlockItem>


                    <Button BtnText='Submit' width={'532px'}
                            margin-top={'22px'}/>
                </StyledForm>

            </Container>

        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    margin-top: 140px;
    background-color: rgba(70, 215, 241, 0.87);
    //min-height: 49vh;
    @media ${theme.media.tablet} {
        max-width: 364px;
        margin: 125px auto 0;
}
`
const StyledForm = styled.form`

    margin: 0 auto;
    max-height: 532px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    max-width: 532px;
    width: 100%;

    textarea {
        resize: none;
        height: 165px;
    }
    
    

    
`
const BlockItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`
const Field = styled.input`
    //margin-top: 6px;
    padding: 15px 18px;
    border: 1px solid ${theme.colors.lightTheme.border};
    border-radius: 6px;

    font-family: Montserrat, sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: ${theme.colors.lightTheme.text};

    &::placeholder {
        text-transform: capitalize;
        color: ${theme.colors.lightTheme.inputColor};
    }

    &:focus-visible {
        outline: 1px solid ${theme.colors.lightTheme.border};
    }

`


const Notice = styled.small`
    align-self: flex-end;
    color: #c05353;
    margin-top: -18px;
    
        
     @media ${theme.media.mobile} {
         display: none;
     }
`
