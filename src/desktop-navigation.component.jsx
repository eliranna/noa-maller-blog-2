import React from 'react';
import styled from 'styled-components';
import {routes} from './config';
import Breakpoint from './breaktpoint';
import {
    Link,
    NavLink
  } from "react-router-dom";
import {colorBlack, colorGrey, colorfadeGrey, textMedSize, fontFamily} from './styles'

import {NavigationMenuLink, NavigationMenuLinkMobileSmall} from './styles';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 432px;
  padding-left: 23px;
`

const WrapperMobile = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-width: 200px;
`

const WrapperNerrow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`

const Item = styled.div`

  text-align: center;
`

const ItemMobile = styled.div`
  margin-top: 5.75px;
`

const NavLinkS = styled(NavLink)`
  color: ${colorfadeGrey};
  &:hover {
    color: ${colorBlack}; 
  }
  transition: all 250ms ease-in-out;
`

class DesktopNavigation extends React.Component {

  render() {

    const bullet = (
      <div >
        <Breakpoint name="notMobileSmall">
          <NavigationMenuLink style={{marginLeft: '50px', marginRight: '50px' }}>
            •
          </NavigationMenuLink>  
        </Breakpoint>
        <Breakpoint name="mobileSmall">
          <NavigationMenuLinkMobileSmall style={{marginLeft: '5vw', marginRight: '5vw' }}>
            •
          </NavigationMenuLinkMobileSmall>  
        </Breakpoint>  
      </div>    
    );

    const content2 = (
      <>
          <Item key={'/home'}>
                <Breakpoint name="notMobileSmall">
                  <NavigationMenuLink>
                    <NavLinkS to={'/home'} activeStyle={{ color: colorBlack}}>
                        Work
                    </NavLinkS>
                  </NavigationMenuLink>  
                </Breakpoint>
                <Breakpoint name="mobileSmall">
                  <NavigationMenuLinkMobileSmall>
                    <NavLinkS to={'/home'} activeStyle={{ color: colorBlack}}>
                        Work
                    </NavLinkS>
                  </NavigationMenuLinkMobileSmall>  
                </Breakpoint>
          </Item>
          {bullet}
          <Item key={'/about'} style={{textAlign: 'center'}}>
                <Breakpoint name="notMobileSmall">
                  <NavigationMenuLink>
                    <NavLinkS to={'/about'} activeStyle={{ color: colorBlack}}>
                        About
                    </NavLinkS>
                  </NavigationMenuLink>  
                </Breakpoint>
                <Breakpoint name="mobileSmall">
                  <NavigationMenuLinkMobileSmall>
                    <NavLinkS to={'/about'} activeStyle={{ color: colorBlack}}>
                        About
                    </NavLinkS>
                  </NavigationMenuLinkMobileSmall>  
                </Breakpoint>
          </Item>
          {bullet}
          <Item key={'/contact'} style={{textAlign: 'right'}}>
                <Breakpoint name="notMobileSmall">
                  <NavigationMenuLink>
                    <NavLinkS to={'/contact'} activeStyle={{ color: colorBlack}}>
                      Contact
                    </NavLinkS>
                  </NavigationMenuLink>  
                </Breakpoint>
                <Breakpoint name="mobileSmall">
                  <NavigationMenuLinkMobileSmall>
                    <NavLinkS to={'/contact'} activeStyle={{ color: colorBlack}}>
                        Contact
                    </NavLinkS>
                  </NavigationMenuLinkMobileSmall>  
                </Breakpoint>
          </Item>   
    </>                       
    )
        
    return (
      <>
       
        <Breakpoint name="notMobileSmall">
          <Wrapper>
              {content2}
          </Wrapper>
        </Breakpoint>
        <Breakpoint name="mobileSmall">
          <WrapperMobile>
              {content2}
          </WrapperMobile>
        </Breakpoint>

        

      </>           
    )
  }
}

export default DesktopNavigation;