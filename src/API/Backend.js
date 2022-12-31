import axios from 'axios'

const Client=axios.create ({basURL:'http://localhost:8000'})

export default Client