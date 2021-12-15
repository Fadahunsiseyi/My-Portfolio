import React from 'react';
import Separator from '../../common/separator';
import { ProjectData } from '../../data/project';
import ProjectCard from './project-cards';
import './style.scss'
function Project() {
    const data = ProjectData
  return (
    <div className="projects">
      <Separator/>
     <label className="section-title">Project</label>
     <div>
         {data.map((project) => {
             return <ProjectCard project={project} />
         })}
     </div>
    </div>
  );
}

export default Project;
