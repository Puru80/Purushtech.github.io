import LogoS from '../../../assets/images/p-logo-transparent.png'
import './index.scss'

const Logo = () => {

    return (
        <div className="logo-container" >
            <img
                className="solid-logo"
                src={LogoS}
                alt="Java,  Developer"
            />

        </div>
    )
}

export default Logo