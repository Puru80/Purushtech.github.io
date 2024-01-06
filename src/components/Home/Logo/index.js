import './index.scss'

const Logo = () => {

    return (
        <div className="logo-container" >
            <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                {/* Outline */}
                <rect width="100%" height="100%" fill="white" />
                <rect x="10%" y="10%" width="80%" height="80%" fill="none" stroke="black" strokeWidth="5" />

                {/* Filled Letter P */}
                <text x="50%" y="50%" fontSize="40" textAnchor="middle" dy=".3em" fill="black">
                    P
                </text>
            </svg>

        </div>
    )
}

export default Logo