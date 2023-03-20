import React from 'react';
import ProjectsListRow from './projects-list-row';
import styled from 'styled-components';
import {getImage} from './images';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import VizSensor from 'react-visibility-sensor';


const Wrapper = styled.div`

`

const RowWrapper = styled.div`
    margin-bottom: 60px;
`

const ImageBox = styled.div`
    width: 100%;
    height: 100%;
`

const VerticalImageBox = styled.div`
    background-image: ${props => `url("${props.background}")`};
    background-size: cover;
    width: 100%;
    height: 100vw;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    transition: all 0.6s;
`

const transition = 'padding-top 1.2s  0s, opacity 0.6s linear 0.1s';

class VizAwareImg extends React.Component {
    state = {
      imgViz: false
    }
    render() {
      return (

          <img
            src={this.props.src}
            style={{
              width: '100%',
              height: '100%',
              opacity: this.state.imgViz ? 1 : 0,
              transition: transition
            }}
          />
 
      );
    }
  }

  export class VizAwareObj extends React.Component {
    state = {
      imgViz: false
    }
    render() {
      return (
        <VizSensor
            partialVisibility
          onChange={(isVisible) => {
            this.setState({imgViz: isVisible})
          }}
        >
          <div
            style={{
              opacity: this.state.imgViz ? 1 : 0,
              transition: transition
            }}
          >
              {this.props.children}
              </div>
        </VizSensor>
      );
    }
  }

class Photo extends React.Component {

  render() {

    const transitionOptions = {
      transitionName: "example",
      transitionAppear: true,
      transitionEnterTimeout: 0,
      transitionLeaveTimeout: 0,

    }

    if (this.props.type == 'vertical') {
        return (
           <VerticalImageBox background={getImage(this.props.name)}>

           </VerticalImageBox> 
        )
    }

    return (

            <ImageBox>
              <ReactCSSTransitionGroup {...transitionOptions}>
                <Image src={getImage(this.props.name)} onLoad={this.props.onLoad}/>
              </ReactCSSTransitionGroup>  
            </ImageBox>


    );
  }
}

export default Photo;