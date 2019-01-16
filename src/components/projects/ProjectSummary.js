import React from 'react';

const ProjectSummary = ({project}) => {
  return(
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>Posted by Büşra ULUDAĞ</p>
        <p className="grey-text">10 Ocak 2019, 13:00</p>
      </div>
    </div>
  )
}

export default ProjectSummary;