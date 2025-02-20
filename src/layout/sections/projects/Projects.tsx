import React, {useMemo} from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Project} from "./project/Project";
import {SectionTitle} from "../main/Main";
import {Container} from "../../../components/Container";
import {useScreen} from "../../../hooks/useScreen";
import {Button} from "../../../components/button/Button";
import {S} from '../projects/Projects_Styles'

const skillItems1 = ['Javascript', 'PostgreSQL', 'React', 'Redux']
const skillItems2 = ['Javascript', 'React Native', 'Redux']

const projectData = [
    {
        title: 'title project',
        tech: 'nernn',
        descr: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        list: skillItems1
    },
    {
        title: 'insightgram',
        tech: 'nneren',
        descr: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        list: skillItems2
    },
    {
        title: 'title project ',
        tech: 'nncdn',
        descr: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        list: skillItems1
    },
    {
        title: 'insightgram',
        tech: 'nttynn',
        descr: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        list: skillItems2
    },
]

export const Projects = () => {

    const {isMobile} = useScreen()

    const [showFullProjects, setShowFullProjects] = React.useState(!isMobile)

    const projectsToMap = useMemo(() => {
        if (showFullProjects) {
            return projectData
        }

        return projectData.slice(0, 2)
    }, [showFullProjects])

    return (
        <S.Projects>
            <Container>
                <S.Wrap>
                    <SectionTitle>Projects</SectionTitle>

                    <FlexWrapper wrap={'wrap'} justify={'space-between'} maxWidth={'1072px'}>

                        {projectsToMap.map((item, index) => (
                            <Project title={item.title} tech={item.tech} descr={item.descr} list={item.list}/>))}

                        {/*{*/}
                        {/*    isMobile ? <button onClick={() => setShowFullProjects(!showFullProjects)}>{showFullProjects ? 'hidden' : 'show more'}</button> : null*/}
                        {/*}*/}

                    </FlexWrapper>
                    <Button BtnText={showFullProjects ? 'Hide Projects' : 'Show More'} onClick={() => {
                        console.log('click');
                        setShowFullProjects(!showFullProjects)
                    }}/>
                </S.Wrap>
            </Container>
        </S.Projects>
    );
};


