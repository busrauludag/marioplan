import React from 'react'

const ProjectDetail = (props) => {
  // console.log(props) -> match>params
  const id = props.match.params.id;  // it gets id info from url
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste fugit nobis numquam magni quasi nulla placeat tempora necessitatibus. Perferendis quod pariatur ullam nisi doloremque sit dolorem saepe sapiente ratione eaque.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Büşra ULUDAĞ</div>
          <div>6 Ocak 2019, 13:00</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail;
