import React from 'react';
import styled from 'styled-components';
import {ProjectThumbnailProjectName, ProjectThumbnailServiceName} from './styles'
import Breakpoint from './breaktpoint';
import {
    Link
  } from "react-router-dom";
import Photo from './photo.component';

const Image = styled.div`
    width: 100%;
    height: 100%;
    transition: all 0.6s;
`

const Wrapper = styled.div`
  cursor: pointer;
  &:hover ${Image} {
    filter: brightness(0.85);
  }
  width: 100%;
`

const ProjectName = styled.div`
    margin-top: 5px;
`

const ProjectService = styled.div`
    text-align: right;
    margin-top: 5px;
`

const FooterDasktop = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
`

const FooterMobile = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
`

class ProjectsListItem extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            imageIsLoaded: false
        }
    }

    imageIsLoaded = () => {
        this.setState({
            imageIsLoaded: true
        })
    }

  render() {
    const footerContent = (
        <>
            <ProjectName>
                <ProjectThumbnailProjectName>
                    {this.props.project.title}
                </ProjectThumbnailProjectName>
            </ProjectName>
            <ProjectService>
                <ProjectThumbnailServiceName>
                    {this.props.project.services}
                </ProjectThumbnailServiceName>
            </ProjectService>
        </>
    );

    const footerDesktop = this.state.imageIsLoaded && (
        <Breakpoint name="desktop">
            <FooterDasktop>
                {footerContent}
            </FooterDasktop>
        </Breakpoint>
    ) 

    const footerMobile = (
        <Breakpoint name="mobile">
            <FooterMobile>
                {footerContent}
            </FooterMobile>
        </Breakpoint>
    )

    const photoMobileSmall = (
        <Breakpoint name="mobileSmall">
            <Image>
                <Photo name={this.props.project.thumbnailImageMobile ? this.props.project.thumbnailImageMobile : this.props.project.thumbnailImage} type='vertical' onLoad={this.imageIsLoaded}/>
            </Image>
        </Breakpoint>        
    )

    const photo = (
        <Breakpoint name="notMobileSmall">
            <Image>
                <Photo name={this.props.project.thumbnailImage} onLoad={this.imageIsLoaded}/>
            </Image>
        </Breakpoint>        
    )

    return (
        <Link to={`${this.props.project.id}`}>
            <Wrapper>
                {photoMobileSmall}
                {photo}
                {footerDesktop}
                {footerMobile}
            </Wrapper>  
        </Link>      
    )

  }
}

export default ProjectsListItem;