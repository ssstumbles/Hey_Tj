import { useContext, useState, useEffect } from "react"
import Global from './context'

const AddJournal = () => {
    const api = useContext(Global)

    const [journals, setJournals] = useState()

    useEffect(()=> {
        const getJournals = async () => {
    const response = await axios.get('/journals')
    setJournals(response.data)
 }  
    getJournals() 
 })

    const initialState = {
        "journal_id": '',
        "journal_name": '',
        "journal_photos": <input type="url" name="" id="" />,
        "journal_date_start": <input type="date" name="" id="" />,
        "journal_ongioing": <input type="checkbox" name="" id="" />,
        "journal_date_end": <input type="date" name="" id="" />,
        "journal_locations": '',
    }

    const { setAxiosAction } = useContext(Global)
    const [formState, setFormState] = useState(initialState)

    const handleChange = async (e)  => {
        e.preventDefault()
        console.log(formState)

        await axios.post('baseURL/journal_list', formState)

        setFormState(initialState)
        setAxiosAction(true)
    }

    return (
        <div className="add-journal">
            <form onSubmit={handleSubmit}></form>
        </div>
    )
} 