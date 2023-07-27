import { Link } from 'react-router-dom'

const PublicNav = () => {
    return (
        <div className='nav-links'>
            <Link to="/">Home</Link>
            <Link to="/about">How it Works</Link>
            <Link to="/profile">My Profile</Link>
            <Link to='/my-journals'>My Journals</Link>
        </div>
    )
}

export default PublicNav