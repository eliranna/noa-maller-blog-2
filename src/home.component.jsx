import React from 'react';
import {works} from './config';
import ProjectsList from './projects-list'

class Home extends React.Component {
  render() {
    return (
      <div>
        <ProjectsList rows={works}></ProjectsList>
      </div>
    )
  }
}

export default Home;