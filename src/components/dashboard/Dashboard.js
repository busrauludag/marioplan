// class based component

import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux'; // to connect to store
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';


class Dashboard extends Component{
  render(){
    // console.log(this.props);
    const { projects } = this.props;
    return(
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    )
  }
}

const matStateToProps = (state) => {
  console.log(state);
  return{
    // projects: state.project.allProjects
    projects: state.firestore.ordered.projects
  }
}

export default compose(
  connect(matStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(Dashboard)  // to know connect which store data and mapping props