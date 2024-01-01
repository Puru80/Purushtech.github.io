import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/p-logo-transparent.png'
import './index.scss'
import Logo from "./Logo";
import Loader from 'react-loaders'


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const nameArray = ['u', 'r', 'u']
    const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r']

    useEffect(() => {
        const timerId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);

        // Cleanup function to clear the timer when the component unmounts
        return () => clearTimeout(timerId);
    }, []);

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br/>
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                        <img src={LogoTitle} alt='developer'/>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={nameArray}
                            idx={15}
                        />
                        <br/>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={jobArray}
                            idx={18}
                        />
                    </h1>
                    <h2>Java Developer | Athlete | Musician</h2>
                    <Link to='/contact' className='flat-button'>CONTACT ME</Link>
                </div>
                <Logo/>
            </div>

            <Loader type="pacman"/>
        </>
    );

};

export default Home;