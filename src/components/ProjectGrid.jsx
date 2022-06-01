import * as React from 'react';
import '../styles/globals.css';
import ProjectCard from './ProjectCard';

const ProjectGrid = ( props ) => {
    const projects = props.nodes;
    
    return (
        <>
            <h2 className='heading' id='projects'>My Projects</h2>
            <div className='gridContainer'>
                {projects.map((p) => (
                    <ProjectCard key={p._id} project={p} />
                ))}
            </div>
        </>
    )
}

export default ProjectGrid;