import React from 'react';
import styled from 'styled-components';
import {LogoText} from './styles';
import { getImage } from './images';
import {
  Link,
  NavLink
} from "react-router-dom";

const Wrapper = styled.div`
    width: 65px;
`



class Logo extends React.Component {
    
  render() {

    return (
        <Wrapper>
          <NavLink to={'/home'}>
            <img src={getImage('logo.svg')} alt="Noa Maller Studio Boutique Graphic Design Studio, focusing on Illustrations, Typography, Iconography and UI Design."/>
          </NavLink>
        </Wrapper>
    )
  }
}

export default Logo;