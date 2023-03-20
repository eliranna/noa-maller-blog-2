import React from 'react';
import styled from 'styled-components';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {routes} from './config';
import {
  Link
} from "react-router-dom";
import {NavigationMenuLink, MobileMenuButton} from './styles';

const Wrapper = styled.div`
  overflow: hidden; 
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const Item = styled.div`
  text-align: center;
`

class MobileNavigation extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }

  toggleMenu = () => {
    this.setState((prevState) => {
      return {
        show: !prevState.show
      }
    })
  }

  render() {

    const transitionOptions = {
      transitionName: "spicy",
      transitionEnterTimeout: 0,
      transitionLeaveTimeout: 0
    }

    const items = routes.map(route => {
      return (
        <Item key={route.path}>
          <Link to={route.path}>
            <NavigationMenuLink>
              {route.caption}
            </NavigationMenuLink>
          </Link>
        </Item>
      )
    })

    return (
      <Wrapper>
        <ReactCSSTransitionGroup {...transitionOptions}>
          {this.state.show && (
            <div>
              {items}  
            </div>                      
          )}
        </ReactCSSTransitionGroup>
        <div onClick={this.toggleMenu}>
          <MobileMenuButton>Menu</MobileMenuButton>
        </div>
      </Wrapper>
    )
  }
}

export default MobileNavigation;