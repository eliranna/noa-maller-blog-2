import React from 'react';
import ProjectsListRow from './projects-list-row';
import styled from 'styled-components';
import Breakpoint from './breaktpoint';
import {margins} from './styles'

const Wrapper = styled.div`
    padding: 0px;
    margin-right: 65px;
    margin-left: 65px;
`

const WrapperSmall = styled.div`
    padding: 0 ${margins}
`

const RowWrapper = styled.div`
    width: 100%;
`

class ProjectsList extends React.Component {

  render() {
    const list = this.props.rows.map((row, index) => {
        const works = row.works; 
        return (
            <RowWrapper>
                <ProjectsListRow key={index} items={works}/>
            </RowWrapper>   
        )
    })
    return (
        <>
            <Breakpoint name="moreThen1200">
                <Wrapper>
                    {list}
                </Wrapper>
            </Breakpoint>
            <Breakpoint name="lessThen1200">
                <WrapperSmall>
                    {list}
                </WrapperSmall>
            </Breakpoint> 
        </>   
    );
  }
}

export default ProjectsList;