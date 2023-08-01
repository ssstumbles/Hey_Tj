// import { useContext, useState, useEffect } from "react"
// import Global from './Context'\
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import  Calendar from 'react-calendar'
import Global from '../../Context'

const AddJournal = () => {
    const api = useContext(Global)

    const initialState = {
        "journal_id": '',
        "journal_name": '',
        // "journal_photos": <input type="url" name="" id="" />, don't think this is necessary here, bit will be on update page
        "journal_date_start": new Date(),
        "journal_ongioing": false,
        "journal_date_end": '',
        "journal_locations": ''
    }
    
    const [formState, setFormState] = useState(initialState)

    const formatDate = (dateStr) => {
        const date = new Date(dateStr)
        const year = date.getFullYear()
        const month = String(date.getMonth() + 1).padStart(2, "0")
        const day = String(date.getDate()).padStart(2, "0")
        return `${year}-${month}-${day}`
      }

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.id]: e.target.value })
    }

    const handleOngoingChange = (e) => {
        if (e.target.id === 'journal_ongoing') {
          setFormState({ ...formState, journal_ongoing: e.target.checked })
        } else {
          setFormState({ ...formState, [e.target.id]: e.target.value })
        }
      }

    const handleCalendarChange = (date) => {
        const formattedDate = formatDate(date)
        setFormState({ ...formState, journal_date_start: (formattedDate) })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(formState)

        try {
            const response = await api.post('/api/journals/', formState);
            const newJournalId = response.data.journal_id; // Assuming your backend returns the newly created journal ID in the response
            console.log('New journal ID:', newJournalId);

            // Redirect to the newly created journal page using the new journal ID
            history.push(`/journal/${newJournalId}`)
        } catch (error) {
            console.error('Error creating journal:', error)
        }
    }


        return (
            <div className='add-journal'>
                <form onSubmit={handleSubmit}>
                    <div>Name your journal</div>
                    <input
                        type='text'
                        id='journal_name'
                        value={formState.journal_name}
                        onChange={handleChange}
                    />
                    {/* <div> photo field added here if needed </div> */}

                    <div>Start date: </div>
                    <input
                        type='date'
                        id='journal_date_start'
                        value={formState.journal_date_start}
                        onChange={handleOngoingChange}
                    />

                    <div>Is your trip still happening? </div>
                    <input
                        type='checkbox'
                        id='journal_ongoing'
                        checked={formState.journal_ongoing}
                        onChange={handleOngoingChange}
                    />

                    {formState.journal_ongoing ? null : (
                        <div>
                            <div>End date</div>
                            <input
                                type='date'
                                id='journal_date_end'
                                value={formState.journal_date_end}
                                onChange={handleChange}
                            />
                        </div>
                    )}
                    <div className='calendar'>
                        <Calendar onChange={handleCalendarChange} />
                    </div>
                    <button type='submit'>Submit</button>
                </form>
                <Link to='/manage-journals'>Back</Link>
            </div>


        )
    }
export default AddJournal