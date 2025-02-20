import React from 'react';
import projectImg from '../../../../assets/images/pic2.webp'
import {TechnologyList} from "./TechnologyList";
import {S} from './Project_Styles'

type ProjectPropsType = {

    title: string
    tech: string
    descr: string
    list: string[]
}

export const Project = (props: ProjectPropsType) => {
    return (
        <S.Project>
            <S.Image src={projectImg}/>
            <S.TextBlocks>
                <S.ProjectTitle>{props.title}</S.ProjectTitle>
                <TechnologyList techSkill={props.list}/>
                <S.TechnologyDescr>{props.descr}</S.TechnologyDescr>
            </S.TextBlocks>
        </S.Project>
    )        ;
};


