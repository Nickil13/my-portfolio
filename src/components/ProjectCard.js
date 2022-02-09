import React from 'react';
import {FaGithub,FaGlobe} from "react-icons/fa";

export default function ProjectCard({image,title,tags,description,repoLink,liveDemoLink}) {
    return (
        <article className="project-card">
            <div className="card-img-container">
            <img src={image} alt={title} className="card-img" />
            </div>
            <div className="card-content-container">
                <div className="card-content">
                    <h3 className="card-title">{title}</h3>
                    <ul className="card-tags">
                        {tags.map((tag,index)=>{
                            return(
                                <li key={index} className="tag">{tag}</li>
                            )
                        })}
                    </ul>
                    <p className="card-description">{description}</p>
                </div>
                <div className="project-links">
                    <a className="project-link btn-primary" href={liveDemoLink} target="_blank" rel="noreferrer">
                        <span className="project-link-icon"><FaGlobe/></span>
                        <span>Live Demo</span>
                    </a>
                    <a className="project-link btn-primary" href={repoLink} target="_blank" rel="noreferrer">
                        <span className="project-link-icon"><FaGithub/></span>
                        <span>Repo</span>
                    </a>
                </div>
            </div>
            
        </article>
    )
}
