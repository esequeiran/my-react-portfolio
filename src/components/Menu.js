//fragment is uses to wrap the elements
import React, { Fragment } from 'react'
//withRouter you access to the using history, link
import { Link, withRouter } from 'react-router-dom'

import { RiDownload2Fill } from 'react-icons/ri'
import Resume from '../files/EvelynSequeiraResume.pdf'

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: '#006068' }
    } else {
        return { color: '#ffffff' }
    }
}

//we can access the props for the withRouter
const Menu = ({ history }) => {
    return (
        <div>

            <ul className="nav nav-tabs mynav">

                <li className="nav-item">
                    <Link className="nav-link mylink" style={isActive(history, '/my-react-portfolio/')} to="/my-react-portfolio/">Home
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link mylink" style={isActive(history, '/my-react-portfolio/autobiography')} to="/my-react-portfolio/autobiography">Autobiography</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link mylink" style={isActive(history, '/my-react-portfolio/education')} to="/my-react-portfolio/education">Education</Link>
                </li>


                <li className="nav-item">
                    <Link className="nav-link mylink" style={isActive(history, '/my-react-portfolio/skills')} to="/my-react-portfolio/skills">My skills</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link mylink" style={isActive(history, '/my-react-portfolio/projects')} to="/my-react-portfolio/projects">Web projects</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link mylink" style={isActive(history, '/my-react-portfolio/experience')} to="/my-react-portfolio/experience">Experience</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link mylink" style={isActive(history, '/my-react-portfolio/achievements')} to="/my-react-portfolio/achievements">Achievements</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link mylink" style={isActive(history, '/my-react-portfolio/interests')} to="/my-react-portfolio/interests">Interests</Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link mylink" style={{ color: 'white' }} download href={Resume}>
                        <span style={{ color: 'white' }} className="me-2">Download resume</span>
                        <RiDownload2Fill />
                    </a>
                </li>





            </ul>

        </div>
    )
}

export default withRouter(Menu);

