import React from "react";

const Project = (props) => {
    const projectInfo = props.projectInfo;
    const demoInfo = props.demoInfo;
  return (
    <div className="details-container color-container">
      <div className="project-img-container">
        <img
          src={projectInfo.image}
          alt={projectInfo.name + " Project's Cover Image"}
          className="project-img"
        />
      </div>
      <h2 className="experience-sub-title project-title">{projectInfo.name}</h2>
      {/* <span>{projectInfo.description || "Uh Oh.. forgor the description" }</span> */}
      <div className="btn-container">
        <button
          type="button"
          className="btn btn-color-2 project-btn"
          onClick={() => {
            window.location.href = projectInfo.link || "/#projects";
          }}
        >
          {projectInfo.link ? "Github" : "Github⚠️"}
        </button>
        <button
          type="button"
          className="btn btn-color-2 project-btn"
          onClick={() => {
            window.location.href = demoInfo.link || "/#projects";
          }}
        >
          {demoInfo.link ? "Live Demo" : "Live Demo⚠️"}
        </button>
      </div>
    </div>
  );
};

export default Project;
