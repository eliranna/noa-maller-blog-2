import React from 'react';
import styled from 'styled-components';
import Breakpoint from './breaktpoint';
import DesktopNavigation from './desktop-navigation.component';
import MobileNavigation from './mobile-navigation.component';
import {barspace} from './styles'

const Wrapper = styled.div`
  display: flex;
  justify-content: center; 
  margin-top: 114px;
  width: 100%;
`

const WrapperMobile = styled.div`
  display: flex;
  justify-content: center; 
  margin-top: ${barspace};
  width: 100%;
`





class Menu extends React.Component {
    
  render() {

    return (

      <>

            <Breakpoint name="moreThen1200">

            <Wrapper>
             <DesktopNavigation/>
        </Wrapper>
            </Breakpoint>
            <Breakpoint name="lessThen1200NotMobile">

            <Wrapper>
             <DesktopNavigation/>
        </Wrapper>
            </Breakpoint> 
            <Breakpoint name="mobile">

            <WrapperMobile>
             <DesktopNavigation/>
        </WrapperMobile>
            </Breakpoint> 



      </>


    )
  }
}

export default Menu;