import React from 'react';
import styled from 'styled-components';
import {works} from './config';
import Photo, {VizAwareObj} from './photo.component';
import ProjectDescription from './project-description';
import Breakpoint from './breaktpoint';
import { margins, colorfadeGrey, colorGreyDark, colorShadeGrey } from './styles';
import ProjectsListItem from './projects-list-item'
import Footer from './footer.component';

const Wrapper = styled.div`
    padding: 0px;
    margin-right: 65px;
    margin-left: 65px;
`

const WrapperSmall = styled.div`
    padding: 0 ${margins};
`

const WrapperMobile = styled.div`
    padding: 0px;
`

const ProjectDescriptionWrapperMobile = styled.div`
    padding: 0 ${margins};
`

const ProjectDescriptionWrapperDesktop = styled.div`
    padding: 0;
`

const GalleryWrapper = styled.div`
    margin-top: 74.75px;
`

const GalleryWrapperNero = styled.div`
    margin-top: 34.5px;
`

const PhotoWrapper = styled.div`
    margin-bottom: 74.75px;
`

const PhotoWrapperNero = styled.div`
    margin-bottom: 34.5px;
`

const MoreProjctesPanel = styled.div`
    padding-top: 92px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;
    
`

const MoreProjctesTitleDesktop = styled.div`
    font-size: 24.4px;
    text-align: center;
    color: ${colorGreyDark};
`

const MoreProjctesTitleMobile = styled.div`
    font-size: 18px;
    text-align: center;
    color: ${colorGreyDark};
`

const MoreProjectsListWide = styled.div`
    margin-top: 86.25px;
    display: flex;
    justify-content: space-between;

`

const MoreProjectsListSmall = styled.div`
    margin-top: 86.25px;
    display: flex;
    flex-direction: column;
`

const ProjectsListItemWrapWide = styled.div`
    margin-right: 20px;
    margin-left: 20px;
    &:nth-child(1) {
        margin-left: 0px;
    }
    &:nth-child(3) {
        margin-right: 0px;
    }
`

const ProjectsListItemWrapSmall = styled.div`
    margin-bottom: 43px;
`

const BackDrop = styled.div`
    position: absolute; 
    top: 0;
    right: -100vw;
    background-color: 	#ecf0f1;
    width: 200vw;
    height: 100%;
    z-index: -1;
`


class Project extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            work: null,
            mainPhotoLoaded: false
        }
    }

    componentDidMount() {
        const projectId = this.props.id;
        console.log(projectId)
        works.forEach(row => {
            const works = row.works;
            const work = works.find((item) => {
                return item.id === projectId
            })
            if (work) {
                this.setState({
                    work
                })
            }
        })
    }

    componentWillReceiveProps(nextProps) {
        this.state = {
            work: null,
            mainPhotoLoaded: false
        }
        /*
        var projectId = nextProps.id; // from the new url
        works.forEach(row => {
            const works = row.works;
            const work = works.find((item) => {
                return item.id === projectId
            })
            if (work) {
                this.setState({
                    work
                })
            }
        })
        */
    }

  renderPhoto = (image, key) => {
      return (
        <PhotoWrapper key={key}>
            <Photo onLoad={this.mainPhotoLoaded} name={image}></Photo>
        </PhotoWrapper>          
      )
  }

  renderPhotoNerrow = (image, key) => {
      return (
        <PhotoWrapperNero key={key}>
            <Photo onLoad={this.mainPhotoLoaded} name={image}></Photo>
        </PhotoWrapperNero>          
      )
  }

  mainPhotoLoaded = () => {
      this.setState({
        mainPhotoLoaded: true
      })
  }

  render() {
    const work = this.state.work;

    const galleryPhotos = work && work.rows.map((image,i) => {
        return (
            <>
                <Breakpoint name="moreThen900">
                    <PhotoWrapper key={i}>
                        <Photo name={image} ></Photo>
                    </PhotoWrapper>  
                </Breakpoint> 
                <Breakpoint name="lessThen900">
                    <PhotoWrapperNero key={i}>
                        <Photo name={image}></Photo>
                    </PhotoWrapperNero>
                </Breakpoint> 
            </>                   
        )
    })

    const projectDescriptionWrapperDesktop = this.state.mainPhotoLoaded && (
        <Breakpoint name="desktop">
          <ProjectDescriptionWrapperDesktop>
            <ProjectDescription project={work}/>
          </ProjectDescriptionWrapperDesktop>
        </Breakpoint>
      )
    
      const projectDescriptionWrapperMobile = this.state.mainPhotoLoaded && (
        <Breakpoint name="mobile">
          <ProjectDescriptionWrapperMobile>
            <ProjectDescription project={work}/>
          </ProjectDescriptionWrapperMobile>
        </Breakpoint>
      )

      const relatedWorksContent = work ? (
        work.relatedWorks.map((workId,i)=> {
            const work = works.find((item) => {
                return item.works[0].id === workId
            })
            return (
                <>
                <Breakpoint name="lessThen900">
                    {(i > 0 ? <></> : 
                    (<ProjectsListItemWrapSmall>
                        <ProjectsListItem project={work.works[0]}></ProjectsListItem>
                    </ProjectsListItemWrapSmall>)
                    )}
                </Breakpoint>
                <Breakpoint name="moreThen900">
                    <ProjectsListItemWrapWide>
                        <ProjectsListItem project={work.works[0]} ></ProjectsListItem>
                    </ProjectsListItemWrapWide>
                </Breakpoint>
                </>

            )
        })      
      ) : <></>


    const content = work ? (
        <>
            <Breakpoint name="moreThen900">
                {this.renderPhoto(work.headImage)}
                    {projectDescriptionWrapperDesktop}
                    {projectDescriptionWrapperMobile}
                <GalleryWrapper>
                    {galleryPhotos}
                </GalleryWrapper>                
            </Breakpoint> 
            <Breakpoint name="lessThen900">
                {this.renderPhotoNerrow(work.headImage)}
                {projectDescriptionWrapperDesktop}
                {projectDescriptionWrapperMobile}
                <GalleryWrapperNero>
                    {galleryPhotos}
                </GalleryWrapperNero>  
            </Breakpoint>
            <MoreProjctesPanel>
                    
                    <Breakpoint name="notMobileSmall">
                        <MoreProjctesTitleDesktop>
                        More Projects
                        </MoreProjctesTitleDesktop>  
                    </Breakpoint>
                    <Breakpoint name="mobileSmall">
                        <MoreProjctesTitleMobile>
                        More Projects
                        </MoreProjctesTitleMobile>  
                    </Breakpoint>
                    <Breakpoint name="lessThen900">
                        <BackDrop></BackDrop>
                        <Breakpoint name="mobiletotablet">
                            <MoreProjectsListSmall>
                                {relatedWorksContent}
                            </MoreProjectsListSmall>
                        </Breakpoint>
                        <Breakpoint name="mobile">
                            <WrapperSmall>
                                <MoreProjectsListSmall>
                                    {relatedWorksContent}
                                </MoreProjectsListSmall>
                            </WrapperSmall>
                        </Breakpoint>
                    </Breakpoint>
                    <Breakpoint name="moreThen900">
                        <MoreProjectsListWide>
                            {relatedWorksContent}
                        </MoreProjectsListWide>
                    </Breakpoint>
                    <Footer type='headless'></Footer>
            </MoreProjctesPanel>


        </> 
    ) : <div> not found </div>

    return (
        <>
            <Breakpoint name="moreThen1200">
                <Wrapper>
                    {content}
                </Wrapper>
            </Breakpoint>
            <Breakpoint name="mobile">
                <WrapperMobile>
                    {content}
                </WrapperMobile>
            </Breakpoint> 
            <Breakpoint name="lessThen1200NotMobile">
                <WrapperSmall>
                    {content}
                </WrapperSmall>
            </Breakpoint>             
        </>       
    )
  }
}

export default Project;