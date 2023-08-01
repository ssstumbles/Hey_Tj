// import { createContext } from 'react'
// import axios from 'axios'

// const  baseURL = 'http://postgres://yootkaqj:k-HDt_Vm3hbwW-VCPYmBf7QsU3VH84Rz@hansken.db.elephantsql.com/yootkaqj'

// const api = axios.create({
//   baseURL: baseURL
// })

// export default api
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://postgres://yootkaqj:k-HDt_Vm3hbwW-VCPYmBf7QsU3VH84Rz@hansken.db.elephantsql.com/yootkaqj'
})

export default api