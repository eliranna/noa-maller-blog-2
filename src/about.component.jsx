import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Breakpoint from './breaktpoint';
import {AboutText, ServicesTitleText, ServiceTitleText, ServiceDescriptionText, colorGrey, ImageDescriptionText, NavigationMenuLink, margins, fontFamily, NormalTextSmall, textLargeSize, textMedSize} from './styles'
import {getImage} from './images';
import {services, process} from './config';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';



const WrapperDesktop = styled.div`
  display: flex; 
  margin: 0 65px; 
  margin-bottom: 85px;
  flex-direction: column;
`

const WrapperMobile = styled.div`
  display: flex; 
  flex-direction: column;
`


const Right = styled.div`
  width: 45%;
  
`

const Left = styled.div`
  width: 43%;
  margin-right: 132px;
`

const ImageBox = styled.div`
    background-image: ${props => `url("${props.background}")`};
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 316px;
    margin-bottom: 5px;
`

const ImageBoxHome = styled.div`
background-image: ${props => `url("${props.background}")`};
background-size: cover;
background-position: center;
width: 100%;
height: 316px;
margin-bottom: 5px;
background-position-x: -25px;

`

const ServicesWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 60px;
`

const ServicesColRight = styled.div`
  width: 50%;
  margin-right: 80px;
`

const ServicesColLeft = styled.div`
  width: 50%;
`

const ServicesTitle = styled.div`
  width: 50%;
`

const ServicesBody = styled.div`
  width: 100%;
  display: flex;
`

const ServiceBlock = styled.div`
  margin-top: 30px;
`

const ServiceTitle = styled.div`

`

const ServiceText = styled.div`

`

const AboutTextMobileWrapper = styled.div`
  
`

const ServicesMobileWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 40px;
`

const ServicesMobileBody = styled.div`

`

const ServiceCollapse = styled.div`
  margin-top: 40px;
`

const ServiceCollapseTitle = styled.div`
  display: flex;
  justify-content: space-between;

`

const ServiceCollapseBody = styled.div`
  margin-top: 27px;
`

const InnerWrapperMobile = styled.div`
  padding-right: ${margins}
  padding-left: ${margins}
  padding-bottom: 40px;
`

const ArrowDown = styled.img`
  width: 10px;
  height: 10px;
  align-self: center;
  transform: ${props => `rotate(${props.rotate}deg)`};
`

const ImageDescriptionTextMobile = styled.div`

`


const Spacer40 = styled.div`
  margin-top: 40px;
`

const TopGallery = styled.div`
  width: 690px;
  height: 335px;
  display: flex;
  justify-content: space-between;
  align-self: center;
`

const TopGalleryMobile = styled.div`
  width: 100%;
  height: 255px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
`

const TopGalleryTablet = styled.div`
  width: 100%;
  padding-right: 14vw;
  padding-left: 14vw;
  height: 38vw;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  align-self: center;

`



const ImageBoxWork = styled.image`
  background-image: ${props => `url("${props.background}")`};
  background-size: cover;
  background-repeat: no-repeat;
  width: 382px;
  height: 353px;
  margin-bottom: 5px;
`

const ImageBoxNoa = styled.image`
  background-image: ${props => `url("${props.background}")`};
  background-size: cover;
  width: 40%;
  height: 100%;
  margin-bottom: 5px;
  margin-right: 30px;
  background-position: bottom;
`

const ImageBoxNoaShrink = styled.image`
  background-image: ${props => `url("${props.background}")`};
  background-size: cover;
  width: 40%;
  height: 100%;
  margin-bottom: 5px;
  margin-right: 30px;
  background-position: bottom;

`

const ImageBoxHouse = styled.image`
  background-image: ${props => `url("${props.background}")`};
  background-size: cover;
  background-position: center;
  width: 60%;
  height: 100%;
  margin-bottom: 5px;
  background-position-x: -20px;

`

const ImageBoxWorkMobile = styled.image`
  background-image: ${props => `url("${props.background}")`};
  background-size: cover;
  background-repeat: no-repeat;
  width: 50%;
  height: 150px;
  margin-bottom: 5px;

`

const ImageBoxNoaMobile = styled.image`
  background-image: ${props => `url("${props.background}")`};
  background-size: cover;
  width: 40%;
  height: 100%;
  margin-bottom: 5px;
  background-position: bottom;
  margin-right: 15px;

`

const ImageBoxHouseMobile = styled.image`
  background-image: ${props => `url("${props.background}")`};
  background-size: cover;
  background-position: center;
  width: 60%;
  height: 100%;
  margin-bottom: 5px;
  background-position-x: -106px;

`

const OurStorySection = styled.div`
  display: flex;
  justify-content: center; 
  padding: 60px;
  flex-direction: column;
  text-align: center;
  margin-bottom: 110px;
`

const CoolTitle = styled.div`
  color: ${colorGrey};
  font-weight: bold;
  font-stretch: normal;
  font-style: italic;
  font-family: ${fontFamily};
  font-size: ${textLargeSize}
`

const Spacer50 = styled.div`
  margin-bottom: 50px;
`

const OurStoryBlock = styled.div`
  width: 690px;
  text-align: center;
  align-self: center;

`

const ServicesSection = styled.div`
  display: flex;
  text-align: center;
  align-self: center;
  margin-bottom: 85px;
`

const ProcessSection = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 110px;
  
`

const ServiceCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  padding: 0 20px;
`

const ServiceColFirst = styled.div`
  display: flex;
  flex-direction: column;
  width: 168px;
  padding: 0 20px;
`

const ProcessCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
`

const ServiceColTitle = styled.div`
  text-align: left;
  margin-bottom: 34px;
  color:${colorGrey};
  font-weight: bold;
  font-size: ${textMedSize}
`

const ServiceColContent = styled.div`
  text-align: left;
`

const SectionDesc = styled.div`
  text-align: center;
  margin-top: 21px;
`

const DoubleColPanel = styled.div`
  display: flex;
  justify-content: space-between;
  width: 690px;
  align-self: center;
`

const ColA = styled.div`
  width: 276px;
  box-sizing: border-box;
`
const ColB = styled.div`
  width: 276px;
  box-sizing: border-box;
`

const Spacer60 = styled.div`
  margin-bottom: 60px;
`

const Spacer70 = styled.div`
margin-bottom: 70px;
`

const SectionNoteMobile = styled.div`
  margin-top: 18px;
  margin-bottom: 47px;
`

const ServiceBlockOnMobile = styled.div`

margin-bottom: 50px;
`
const aboutLocation = (
  <>
    Our studio is located at <i>Loenen aan de Vecht</i>, an old Dutch village
    which lays along the Vecht river.
    Surrounded by a small canal and watches over an old windmill, our studio provides us with a scope for the imagination and an inspiring atmosphere which drives our work.
  </>
)

const aboutNoa = (
  <>
    Originally from Israel, Noa Maller studied graphic design and illustration at <i>Shenkar College of Design</i>, before founding her Netherlands-based studio.
  </>
)

const aboutStudio = `Noa Maller Studio is a graphic design and illustration 
studio creating visual solutions across disciplines, 
focusing on Pattern design, Print & Textile design, and Editorial illustrations.`


const serviceSectionDesc = 'In case you have a different project in mind, please feel free to send us an inquiry.'
const processSectionDesc = `As each project has its own unique needs and requirements,
we will customize this process to match your project's needs.`

class About extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      services: services,
      showSectionI: true,
      showSectionII: false,
      showSectionIII: false
    }
    this.ref = React.createRef();
  } 

  handleScrollToElement = (event) => {
    this.ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }  


  renderServiceBlockDesktop = (title, about) => {
    return (
            <ServiceBlock>
              <ServiceTitle>
                <ServiceTitleText> 
                  {title}
                </ServiceTitleText> 
              </ServiceTitle>
              <ServiceText>
                <ServiceDescriptionText> 
                  {about}
                </ServiceDescriptionText>
              </ServiceText>
            </ServiceBlock>      
    )
  }

  renderServiceBody = (service,i) => {
     
    return ((i==0 && this.state.showSectionI) || (i==1 && this.state.showSectionII) || (i==2 && this.state.showSectionIII)) ? (
      
      <ServiceCollapseBody key={i}>
          {i==2 && (
            <SectionNoteMobile>
                    <NormalTextSmall>
                      {processSectionDesc}
                    </NormalTextSmall>
            </SectionNoteMobile>
          )}
        <ServiceDescriptionText>
          {service.about}
        </ServiceDescriptionText>
        {i==1 && (
            <SectionNoteMobile>
                    <NormalTextSmall>
                      {serviceSectionDesc}
                    </NormalTextSmall>
            </SectionNoteMobile>
          )}

      </ServiceCollapseBody>
    ) : <div></div>
  }

  render() {

    const transitionOptions = {
      transitionName: "example2",
      transitionEnterTimeout: 0,
      transitionLeaveTimeout: 0
    }


    const servicesMobileList = [
      {
        title: 'The Studio',
        about: (
          <>
                <p>
                  {aboutStudio}
                </p>
                <br/>
                <p>
                  {aboutLocation}
                </p>
                <br/>
                <p>
                  {aboutNoa}
                </p>            
          </>
        )
      },
      {
        title: 'Our Services',
        about: services.map((service,i) => {
          return (
            <ServiceBlockOnMobile>
            <ProcessCol>
              {<ServiceColTitle>
                {service.title}
              </ServiceColTitle>} 
              <ServiceColContent>
                {service.about}
              </ServiceColContent>  
            </ProcessCol>     
            </ServiceBlockOnMobile>     

          )
        })
      },
      /*
      {
        title: 'Our Process',
        about: process.map((process,i) => {
          return (
            <ServiceBlockOnMobile>
            <ProcessCol>
              <ServiceColTitle>
                {`0${i+1}. ${process.title}`}
              </ServiceColTitle> 
              <ServiceColContent>
                {process.about}
              </ServiceColContent>  
            </ProcessCol>     
            </ServiceBlockOnMobile>     

          )
        })
      }
      */
  ].map((service,i,arr) => {
     let isOpen = false;
     if (i==0 && this.state.showSectionI) {
      isOpen = true
     }
     if (i==1 && this.state.showSectionII) {
      isOpen = true
     }
     if (i==2 && this.state.showSectionIII) {
      isOpen = true
     }
      return service.title && (
        <ServiceCollapse key={i}>
          <ServiceCollapseTitle onClick={() => {
            this.setState((prev) => {
              if (i==0) {
                return {
                  showSectionI: (i==0) && prev.showSectionI ? false : true,
                }                
              }
              if (i==1) {
                return {
                  showSectionII: (i==1) && prev.showSectionII ? false : true,
                }                
              }
              if (i==2) {
                return {
                  showSectionIII: (i==2) && prev.showSectionIII ? false : true,
                }                
              }
            })
          }}>
            <CoolTitle>
            {service.title}
            </CoolTitle>             
            {(<ArrowDown rotate={!isOpen ? '0' : '180'} src="https://img.icons8.com/ios/30/000000/expand-arrow--v2.png"></ArrowDown>)}
          </ServiceCollapseTitle>
      
          
            {this.renderServiceBody(service,i)}
          
        </ServiceCollapse>
      )
    })



    const processInfo = process.map(item => {
      return (
        <>
          <p>
            {item.title} <br/>
            {item.about}
          </p>
          <br></br>  
        </>    
      )
    })

    const noaImagePath = 'noa5.jpg'



    return (
      <>

      <Breakpoint name="moreThen900">

        <WrapperDesktop>
          <TopGallery>
            <ImageBoxNoa background={getImage(noaImagePath)}></ImageBoxNoa>
            <ImageBoxHouse background={getImage('home.jpg')}></ImageBoxHouse>
          </TopGallery>

          <OurStorySection>
            <CoolTitle>
              The Studio
            </CoolTitle>
            <Spacer50></Spacer50>
            <OurStoryBlock>
            <AboutText>
              <p>
                {aboutStudio}
              </p>
              <br/><br/>
              <p>
                {aboutLocation}
              </p>
              <br/><br/>
              <p>
                {aboutNoa}
              </p>       
            </AboutText>
            </OurStoryBlock>
          </OurStorySection>

          <ServicesSection>
                <ServiceColFirst>
                  <ServiceColTitle>
                    <CoolTitle>
                      Our Services
                    </CoolTitle>
                  </ServiceColTitle>
                  <ServiceColContent>
                    <NormalTextSmall>
                      {serviceSectionDesc}
                    </NormalTextSmall>
                    
                  </ServiceColContent>
                </ServiceColFirst>            
            {services.map((service,i) => {
              return (
                <>

                <ServiceCol>
                  {(<ServiceColTitle>
                    {service.title}
                  </ServiceColTitle>)}
                  <ServiceColContent>
                    <AboutText>
                    {service.about}
                    </AboutText>
                    
                  </ServiceColContent>
                </ServiceCol>
                </>
              )
            })}


          </ServicesSection>

{false && (          <ProcessSection>

            <CoolTitle>
              Our Process
            </CoolTitle> 
            <SectionDesc>
              <NormalTextSmall>
              {processSectionDesc}
              </NormalTextSmall>
               
            </SectionDesc> 
            <Spacer70></Spacer70>
            <DoubleColPanel>
              <ColA>
                <ProcessCol>
                  <ServiceColTitle>
                    01. {process[0].title}
                  </ServiceColTitle>
                  <ServiceColContent>
                    <AboutText>
                    {process[0].about}
                    </AboutText>
                  </ServiceColContent>
                </ProcessCol> 
                <Spacer60></Spacer60> 
                <ProcessCol>
                  <ServiceColTitle>
                  02. {process[1].title}
                  </ServiceColTitle>
                  <ServiceColContent>
                    <AboutText>
                    {process[1].about}
                    </AboutText>
                  </ServiceColContent>
                </ProcessCol> 
            
              </ColA>

              <ColB>
                <ProcessCol>
                  <ServiceColTitle>
                  03. {process[2].title}
                  </ServiceColTitle>
                  <ServiceColContent>
                    <AboutText>
                    {process[2].about}
                    </AboutText>
                  </ServiceColContent>
                </ProcessCol> 
                <Spacer60></Spacer60> 
                <ProcessCol>
                  <ServiceColTitle>
                  04. {process[3].title}
                  </ServiceColTitle>
                  <ServiceColContent>
                    <AboutText>
                    {process[3].about}
                    </AboutText>
                  </ServiceColContent>
                </ProcessCol>               
              </ColB>
            
            </DoubleColPanel>          


          </ProcessSection>)}

        </WrapperDesktop>



      </Breakpoint>

      <Breakpoint name="lessThen900">
        <WrapperMobile>

          <Breakpoint name="mobileSmall">
            <TopGalleryMobile>
              <ImageBoxNoaMobile background={getImage(noaImagePath)}></ImageBoxNoaMobile>
              <ImageBoxHouseMobile background={getImage('home.jpg')}></ImageBoxHouseMobile>
            </TopGalleryMobile> 
          </Breakpoint> 

          <Breakpoint name="notMobileSmall">
            <TopGalleryTablet>   
              <ImageBoxNoaShrink background={getImage(noaImagePath)}></ImageBoxNoaShrink>
              <ImageBoxHouse background={getImage('home.jpg')}></ImageBoxHouse>
            </TopGalleryTablet> 
          </Breakpoint> 

          <InnerWrapperMobile>
            {servicesMobileList}                         
          </InnerWrapperMobile>

        </WrapperMobile>
      </Breakpoint>
   
          
      </>
    )
  }
}

export default About;
