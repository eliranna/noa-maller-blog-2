import React from 'react';
import Breakpoint from './breaktpoint';
import ScrollToTop from './scroll-to-top';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import './App.css';
import Home from './home.component';
import About from './about.component';
import Contact from './contact.component';
import Project from './project.component';
import Footer from './footer.component';
import {withRouter} from 'react-router-dom';

import Header from './header.component';

import styled from 'styled-components';
import { margins, colorfadeGrey } from './styles';

const CanvasDasktop = styled.div`
  max-width: 1200px;
  margin: 10px auto;
  margin-bottom: 0px;
  padding-top: 75px;
  overflow: hidden;
`

const CanvasMobile = styled.div`
  max-width: 1200px;
  margin: 10px auto;
  margin-bottom: 0px;
  padding-top: 46px;
  overflow: hidden;
`





class App extends React.Component {

  rand = () => {
    return Math.random()
  }

  render() {

    const content = (
      <div>
      
      <Router>
        <ScrollToTop>
          <Header/>
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route exact path="/">
              <Home/>
              <Footer></Footer>
            </Route>
            <Route path="/home">
              <Home/>
              <Footer></Footer>
            </Route>
            <Route path="/about">
              <About/>
              <Footer></Footer>
            </Route>
            <Route path="/contact">
              <Contact/>
              <Footer></Footer>
            </Route>
            
            <Route 
              path="/:projectId"
              render={({match}) => <Project id={match.params.projectId} key={this.rand()}/>}/>}
              />            
          </Switch>
          
        </ScrollToTop>
      </Router>        
      </div>
    )

    const regularCanvas = (
      <Breakpoint name="desktop">
        <CanvasDasktop>
            {content}
        </CanvasDasktop>
      </Breakpoint>
    )
  
    const mobileCanvas = (
      <Breakpoint name="mobile">
        <CanvasMobile>
            {content}
        </CanvasMobile>
      </Breakpoint>
    )

    return (
      <>
      <div>
        {regularCanvas}
        {mobileCanvas} 
      </div> 
      </>          
    )

  }

}

export default App;