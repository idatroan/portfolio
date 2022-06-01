import * as React from 'react';
import { FiGithub, FiGlobe } from 'react-icons/fi';

const ProjectInfo = props => {
    const { github, live } = props.info;

    return (
        <div className='projectInfo'>
            {github && <a href={github} label='GitHub Repository'><FiGithub /></a>}
            {live && <a href={live} label='Live Server'><FiGlobe /></a>}
        </div>
    )
}

export default ProjectInfo;