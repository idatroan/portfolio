import { Link } from 'gatsby';
import * as React from 'react';
import Logo from './Logo';

const Navigation = () => {
    return (
        <div className='navigation'>
            <Link href='/' className='image'>
                <Logo width='80%'/>
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/#projects'>Projects</Link>
                    </li>
                    <li>
                        <Link to='/#aboutMe'>About</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;