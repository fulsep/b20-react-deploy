import axios from 'axios'

const http = (token) => {
  return axios.create({
    baseURL: "https://rickandmortyapi.com/api",
    headers: {
      'authorization': token
    }
  })
}

export default http