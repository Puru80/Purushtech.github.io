import LogoTitle from '../../assets/images/logo-s.png';
import {Link} from "react-router-dom";
import './index.scss';

const Home = () => {

    return (
        <div className="container home-page">
            <div className='test-zone'>
                <h1>
                    Hi, <br/> I am
                    <img src={LogoTitle} alt='developer'/>
                    lobodan
                    <br/>
                    Software Engineer
                </h1>
                <h2>Java Developer / Athlete / Musician</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    );
};

export default Home;