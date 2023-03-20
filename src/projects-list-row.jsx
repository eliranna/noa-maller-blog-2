import React from 'react';
import ProjectsListItem from './projects-list-item'
import styled from 'styled-components';
import Breakpoint from './breaktpoint';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 60px;
`

const ItemWrapper = styled.div`
    margin-bottom: 60px;
    width: 100%;
`

const ItemWrapperLeft = styled.div`
    margin-right: 30px
    width: 50%;
`

const ItemWrapperRight = styled.div`
    margin-left: 30px
    width: 50%;
    height: 100%;
`

const WrapperMobileSmall = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`

class ProjectsListRow extends React.Component {

  render() {

    if (this.props.items.length == 1) {
        return (
            
            <>
                <Breakpoint name="notMobileSmall">
                    <Wrapper>
                        <ItemWrapper>
                            <ProjectsListItem project={this.props.items[0]}></ProjectsListItem>
                        </ItemWrapper>
                    </Wrapper>
                </Breakpoint>

                <Breakpoint name="mobileSmall">
                    <WrapperMobileSmall>
                        <ItemWrapper>
                            <ProjectsListItem project={this.props.items[0]}></ProjectsListItem>
                        </ItemWrapper>
                    </WrapperMobileSmall>              
                </Breakpoint>
            </>

        )
    }

    if (this.props.items.length == 2) {
        return (
            <>
                <Breakpoint name="notMobileSmall">
                    <Wrapper>
                        <ItemWrapperLeft>
                            <ProjectsListItem project={this.props.items[0]}></ProjectsListItem>
                        </ItemWrapperLeft>
                        <ItemWrapperRight>
                            <ProjectsListItem project={this.props.items[1]}></ProjectsListItem>
                        </ItemWrapperRight>
                    </Wrapper>
                </Breakpoint>

                <Breakpoint name="mobileSmall">
                    <WrapperMobileSmall>
                        <ItemWrapper>
                            <ProjectsListItem project={this.props.items[0]}></ProjectsListItem>
                        </ItemWrapper>
                        <ItemWrapper>
                            <ProjectsListItem project={this.props.items[1]}></ProjectsListItem>
                        </ItemWrapper>
                    </WrapperMobileSmall>              
                </Breakpoint>
            </>
        )
    }

  }
}

export default ProjectsListRow;