import { Link } from 'react-router-dom'

const PublicNav = () => {
    return (
        <div className='nav-links'>
            <Link to="/">Home</Link>
            <Link to="/manage-journals">Manage Journals</Link>
            <Link to="/login">Log In</Link>

        </div>
    )
}

export default PublicNav