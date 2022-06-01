import { GatsbyImage } from 'gatsby-plugin-image';
import * as React from 'react';
import '../styles/globals.css';
import ProjectInfo from './ProjectInfo';

const Project = props => {
    const project = props;

    return (
        <div>
            <GatsbyImage 
                    image={project.image.asset.gatsbyImageData} 
                    alt={project.description}
            />
            <div>
                <h3>{project.name}</h3>
                <p>{project.report}</p>
            </div>
            <ProjectInfo info={project} />
        </div>
    )
}

export default Project;