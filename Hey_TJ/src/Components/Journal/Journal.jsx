import { Link } from 'react-router-dom'

const Journal = () => {
    return (
        <div className='journal-item'>
            <p>here I'll route entries from the Entry component</p>
            <Link to='add-entry'>Add Entry</Link>
        </div>
    )
}

export default Journal

