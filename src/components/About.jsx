import { GatsbyImage } from 'gatsby-plugin-image';
import * as React from 'react';
import '../styles/globals.css';
import GridLayout from './GridLayout';

const About = props => {
    const { bio, image, description } = props.details;
    console.log(props);

    return (
        <>
            <h2 className='heading' id='aboutMe'>About Me</h2>
            <div className='aboutMe'>
            <GridLayout>
                <p>{bio}</p>
                <GatsbyImage
                        image={image.asset.gatsbyImageData} 
                        alt={description}
                />
                </GridLayout>
            </div>
        </>
    )
}

export default About;