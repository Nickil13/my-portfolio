import React, { useState , useEffect } from 'react';
import { projectData } from "../assets/data";
import ProjectCard from "./ProjectCard";

export default function ProjectList() {
    const[projects,setProjects] = useState([]);
    const loadAmount = 4;
    
    useEffect(()=>{
      setProjects(projectData.slice(0,loadAmount));
    },[])

    const loadMoreProjects = () =>{
      let newLoadNum = projects.length + loadAmount;
      setProjects(projectData.slice(0,newLoadNum));
    }

    return(
        <div className="project-container">
          <div className="project-list">
              {projects.length<1 ? <p>No current projects</p> : projects.map((project)=>{
                    return(
                      <ProjectCard key={project.id} {...project}/>
                    );
                  })} 
          </div>

          {(projectData.length>projects.length && projects.length!==projectData.length) && <button className="btn-secondary" onClick={loadMoreProjects}>See more projects</button>}
        </div>
      )
}
