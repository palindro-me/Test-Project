import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../main/Main";
import {SkillItem} from "./SkillItem";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

// type SkillsPropsType = {
//     skill: string[]
//     skillIcon: string[]
// }


// const skillData1 = ['JAVASCRIPT', 'typescript', 'mongo db', 'PostgresSQL', 'Jest', 'Express JS', 'Nest JS', 'Docker', 'react js', 'react native', 'Styled Components', 'Redux', 'git']
// const skillData2 = ['js', 'ts', 'mongo', 'Postgre', 'jest', 'express', 'nest', 'docker', 'react', 'react-native', 'styled-components', 'redux', 'git',]

// const skillFullData = [
//     {skillItem:skillData2, skillIconInput: skillData1}
//    ]

const SkillData = [
    {technology: 'JAVASCRIPT', techIcon: 'js'},
    {technology: 'typescript', techIcon: 'ts'},
    {technology: 'mongo d', techIcon: 'mongo'},
    {technology: 'PostgresSQL', techIcon: 'PostgresSQL'},
    {technology: 'Jest', techIcon: 'jest'},
    {technology: 'Express JS', techIcon: 'express'},
    {technology: 'Nest JS', techIcon: 'nest'},
    {technology: 'Docker', techIcon: 'docker'},
    // {technology: 'react js', techIcon: <ReactIcon/>},
    {technology: 'react js', techIcon: 'react'},
    {technology: 'react native', techIcon: 'react-native'},
    {technology: 'Styled Components', techIcon: 'styled-components'},
    {technology: 'Redux', techIcon: 'redux'},
    {technology: 'git', techIcon: 'git'}
]

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>Skills</SectionTitle>
                <GridContainer>
                    {/*<FlexWrapper justify={'space-between'} align={'center'} wrap={'wrap'}  gap={'120px'}>*/}
                    {SkillData.map((item, index) => {
                        return (
                            <SkillItem key={index} skillIcon={item.techIcon}
                                       skill={item.technology}/>
                        )
                    })}
                    {/*</FlexWrapper>*/}
                </GridContainer>

            </Container>

        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    margin-top: 140px;
    //padding-left: 99px;
    //max-width: 1080px;
    width: 100%;

        // ${Container} {
    //     max-width: 1080px;
    //
    // }
`
const GridContainer = styled.div`
    display: grid;
    max-width: 1080px;
    grid-template-columns: repeat(auto-fit, minmax(88px, 120px));
    justify-content: center;
    column-gap: 120px;
    row-gap: 59px;

    // @media ${theme.media.tablet} {
    @media screen and (max-width: 1050px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 100px 50px;

        & > *:nth-last-child(-n +1) {
            justify-content: center;
            background-color: red;
        }
    }`
    

    




