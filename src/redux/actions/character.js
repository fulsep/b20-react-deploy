import http from '../../helpers/http'

export const getCharacter = ()=> {
  return (dispatch)=> {
    const get = async ()=> {
      const {data} = await http().get('/character')
      dispatch({
        type: 'GET_CHARACTER_LIST',
        payload: data
      })
    }
    get()
  }
}

export const getCharacterOnNav = (url) => {
  return dispatch => {
    const get = async ()=> {
      dispatch({
        type: 'GET_CHARACTER_LIST',
        payload: {
          info: {},
          results: []
        }
      })
      const {data} = await http().get(url)
      dispatch({
        type: 'GET_CHARACTER_LIST',
        payload: data
      })
    }
    get()
  }
}

export const getCharacterOnPage = (page) => {
  return dispatch => {
    const get = async ()=> {
      dispatch({
        type: 'GET_CHARACTER_LIST',
        payload: {
          info: {},
          results: []
        }
      })
      const {data} = await http().get(`/character?page=${page}`)
      dispatch({
        type: 'GET_CHARACTER_LIST',
        payload: data
      })
    }
    get()
  }
}

export const getDetails = (id)=> {
  return (dispatch) => {
    const get = async () => {
      const {data} = await http().get(`/character/${id}`)
      dispatch({
        type: 'GET_CHARACTER_DETAIL',
        payload: data
      })
    }
    get()
  }
}

export const clearDetails = ()=> {
  return {
    type: 'GET_CHARACTER_DETAIL',
    payload: {}
  }
}