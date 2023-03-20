import React from 'react';
import ProjectsListRow from './projects-list-row';
import styled from 'styled-components';
import {getImage} from './images';
import {ProjectDetailsEntry, ProjectDetailsDescriptionText} from './styles';
import Breakpoint from './breaktpoint';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
`

const WrapperNero = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const Details = styled.div`
   width: 50%;
`

const About = styled.div`
    width: 50%;
`

const DetailsWide = styled.div`
   width: 100%;
   margin-bottom: 34.5px;
`

const AboutWide = styled.div`
    width: 100%;
`

const Entry = styled.div`
    margin-bottom: 6.9px;
`

class ProjectDescription extends React.Component {
  render() {
    
    const project = this.props.project;

    const details = (
        <>
            {project.client && (<Entry>
                <ProjectDetailsEntry>
                    Client: <i>{project.client.name}</i>
                </ProjectDetailsEntry>
            </Entry>)}
            <Entry>
                <ProjectDetailsEntry>
                    Services: {project.services}
                </ProjectDetailsEntry>
            </Entry>
            <Entry>
                <ProjectDetailsEntry>
                    Year: {project.year}
                </ProjectDetailsEntry>
            </Entry>
        </>
    )

    const about = (
        <ProjectDetailsDescriptionText>
            {project.about}
        </ProjectDetailsDescriptionText> 
    )

    const content = (
        <>
            <Details>
                {details}
            </Details>
            <About>
                {about}
            </About>
        </>
    )

    return (
        <>
            <Breakpoint name="moreThen900">
                <Wrapper>
                    <Details>
                        {details}
                    </Details>
                    <About>
                        {about}
                    </About>
                </Wrapper>
            </Breakpoint> 
            <Breakpoint name="lessThen900">
                <WrapperNero>
                    <DetailsWide>
                        {details}
                    </DetailsWide>
                    <AboutWide>
                        {about}
                    </AboutWide>
                </WrapperNero>
            </Breakpoint>
        </>
    );
  }
}

export default ProjectDescription;