import * as React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import '../styles/globals.css';

const ProjectCard = ( props ) => {
    const { name, description, github, live, slug, image } = props.project;

    return (
        <Link to={`/project/${slug.current}`}>
            <div className='card'>
                <GatsbyImage 
                    image={image.asset.gatsbyImageData} 
                    alt={description}
                />
                <div className='content'>
                    <h3 className='title'>{name}</h3>
                    <p className='description'>{description}</p>
                </div>
            </div>
        </Link>
    )
}

export default ProjectCard;