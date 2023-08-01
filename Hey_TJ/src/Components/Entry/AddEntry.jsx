import { Link } from 'react-router-dom'
import { useState, useContext, useEffect } from 'react'
import  Calendar from 'react-calendar'
import axios from 'axios'

const AddEntry = () => {

    const [entries, setEntry] = useState([])

    const initialState = {
        "name": '',
        "writeup": '',
        "photo_album": '',
        "journal": ','
    }

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.id]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(formState)

        await axios.post('http://127.0.0.1:8000/journal-item/', formState)
            .then((response) => {
                console.log(response)

            })
            .catch((error) => {
                console.error('Error creating entry:', error)
            })
    }

    return (
        <div className='add-journal'>
            <form onSubmit={handleSubmit}>
                <div>Title your entry</div>
                <input
                    type='text'
                    id='entry_name'
                    value={formState.entry_name}
                    onChange={handleChange}
                />
                <div>Writeup: </div>
                <input
                    type='text'
                    id='writeup'
                    value={formState.writeup}
                    onChange={handleChange}
                />
                <input
                    type='image'
                    id='photo_album'
                    value={formState.entry_name}
                    onChange={handleChange}
                />
                  <input
                    type='image'
                    id='photo_album'
                    value={formState.entry_name}
                    onChange={handleChange}
                />
                <button type='submit'>Submit</button>
            </form>
            <div className='journal-id'>
        Journal ID: {journal.id}
      </div>
            <Link to='/manage-journals'>Back</Link>
        </div>

    )
}

export default AddEntry
