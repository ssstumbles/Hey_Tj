import { createContext } from 'react'
import axio from 'axios'

const api = axios.create({
  baseURL: 'http://postgres://yootkaqj:k-HDt_Vm3hbwW-VCPYmBf7QsU3VH84Rz@hansken.db.elephantsql.com/yootkaqj'
})

const Global = createContext(api)

export default Global
