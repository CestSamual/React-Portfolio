import React from "react";
function Project(props){
    return (
        <div className="card"> 
          <div className="img-container">
            <img alt={props.name} src={props.image}/>
          </div>
          <div className="content">
            <ul>
              <li>
                <p className="project-title">{props.name}</p>
              </li>
              <li>
                <div className="project-icons">
                <a href={props.github}><img width="50" height="50" src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/50/FFFFFF/external-Github-social-media-tanah-basah-basic-outline-tanah-basah.png"  alt="github-icon" id="port-icon"/></a> 
                <a href={props.deployedapp}><img width="50" height="50" src="https://img.icons8.com/ios/50/FFFFFF/internet--v1.png"  alt="app-icon" id="port-icon"/></a> 
                </div>
              </li>
            </ul>
          </div>
        </div>
      );
}

export default Project