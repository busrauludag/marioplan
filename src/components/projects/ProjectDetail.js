import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';


const ProjectDetail = (props) => {
  // console.log(props) -> match>params
  // const id = props.match.params.id;  // it gets id info from url
  const { project } = props;
  if(project){
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{ project.title }</span>
            <p>
            { project.content }
            </p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by { project.authorFirstName } { project.authorLastName }</div>
            <div>6 Ocak 2019, 13:00</div>
          </div>
        </div>
      </div>
    )
  }else{
    return (
      <div className="container center">
        <p>Loading Project...</p>
      </div>
    ) 
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;

  return{
    project: project
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection : 'projects' }
  ])
)(ProjectDetail);
