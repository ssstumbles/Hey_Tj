// import { useContext, useState, useEffect } from "react"
// import Global from './Context'\
import { Link } from 'react-router-dom'
import { useState } from 'react'

const AddJournal = () => {
 
    const initialState = {
        "journal_id": '',
        "journal_name": '',
        "journal_photos": <input type="url" name="" id="" />,
        "journal_date_start": <input type="date" name="" id="" />,
        "journal_ongioing": <input type="checkbox" name="" id="" />,
        "journal_date_end": <input type="date" name="" id="" />,
        "journal_locations": ''
    }
        const [formState, setFormState] = useState(initialState)

        const handleChange = (e) => {
            setFormState({ ...formState, [e.target.id]: e.target.value })
        }

        const handleSubmit = async (e) => {
            e.preventDefault()
            console.log(formState)

    return (
        <div className='add-journal'>
            <form onSubmit={handleSubmit}>
                <div>Name your journal</div>
            </form>
        <Link to="/manage-journals">Back</Link>
       </div>

    )

//     const api = useContext(Global)

//     const [journals, setJournals] = useState()

//     useEffect(()=> {
//         const getJournals = async () => {
//      const response = await axios.get('/journals')
//     setJournals(response.data)
//  }  
//     getJournals() 
//  })

,
//     }

//     const { setAxiosAction } = useContext(Global)
//     const [formState, setFormState] = useState(initialState)

//     const handleChange = async (e)  => {
//         e.preventDefault()
//         console.log(formState)

//         await axios.post('baseURL/journal_list', formState)

//         setFormState(initialState)
//         setAxiosAction(true)
//     }

//     return (
//         <div className="new-journal">
//             <form onSubmit={handleSubmit}></form>
//         </div>
//     )
    )
}

export default AddJournal