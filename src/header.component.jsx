import React from 'react';
import styled from 'styled-components';
import Breakpoint from './breaktpoint';
import Logo from './logo.component';
import Menu from './menu.component';
import {margins} from './styles';
import {barspace} from './styles'

const HeaderDesktopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 114px;
  flex-direction: column;
  align-items:center;

`

const HeaderNeroWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 114px;
  padding: 0 ${margins};
  flex-direction: column;
  align-items:center;
`

const HeaderNeroWrapperMobile = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${barspace};
  padding: 0 ${margins};
  flex-direction: column;
  align-items:center;
`

const TitleAlt = styled.h1`
    font-size: 10px;
    color: white!important;
    position: absolute;
    top: 0;
    right: 0;
    user-select: none;
`


class Header extends React.Component {

  render() {

    return (
        <>
             <TitleAlt> Noa Maller Studio - Boutique Graphic Design Studio, focusing on Illustrations, Typography, Iconography and UI Design. </TitleAlt>
            <Breakpoint name="moreThen1200">
              <HeaderDesktopWrapper>
                  <Logo/>
                  <Menu/>
              </HeaderDesktopWrapper>
            </Breakpoint>
            <Breakpoint name="lessThen1200NotMobile">
              <HeaderNeroWrapper>
                  <Logo/>
                  <Menu/>
              </HeaderNeroWrapper>
            </Breakpoint> 
            <Breakpoint name="mobile">
              <HeaderNeroWrapperMobile>
                  <Logo/>
                  <Menu/>
              </HeaderNeroWrapperMobile>
            </Breakpoint> 
        </> 
    )

  }
}

export default Header;