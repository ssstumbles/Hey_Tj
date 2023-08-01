import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <div className='footer-links'>
            <Link to="/about">How it Works </Link>
            <Link to="/contact">Contact</Link>
            {/* see how it looks but maybe add socials links individually? */}
        </div>
    )
}

export default Footer