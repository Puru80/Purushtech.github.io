import './index.scss';
import LogoS from "../../assets/images/pa-favicon-white.png";
import {Link, NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faHome, faUser} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faInstagram, faLinkedin, faMedium, faTwitter} from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={LogoS} alt="logo"/>
                {/*<img className='sub-logo' src={LogoSubtitle} alt="logo-subtitle"/>*/}
            </Link>
            <nav>
                <NavLink exact="true" activeclassname='active' to='/'>
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
                </NavLink>
                <NavLink activeclassname='active' className='about-link' to='/about'>
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
                </NavLink>
                <NavLink activeclassname='active' className='contact-link' to='/contact'>
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a
                        href="https://www.linkedin.com/in/puru-agarwal-05793218b/"
                        target="_blank"
                        rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/Puru80/"
                        target="_blank"
                        rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                    </a>
                </li>
                <li>
                    <a
                        href="https://medium.com/@puru-agar99"
                        target="_blank"
                        rel="noreferrer">
                        <FontAwesomeIcon icon={faMedium} color="#4d4d4e"/>
                    </a>
                </li>
                <li>
                    <a
                        href="https://twitter.com/PuruAgar99"
                        target="_blank"
                        rel="noreferrer">
                        <FontAwesomeIcon icon={faTwitter} color="#4d4d4e"/>
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.instagram.com/agarwal_puru/"
                        target="_blank"
                        rel="noreferrer">
                        <FontAwesomeIcon icon={faInstagram} color="#4d4d4e"/>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;