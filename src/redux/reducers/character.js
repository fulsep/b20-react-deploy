const initialState = {
  characterData: [],
  detailsCharacter: {},
  pageInfo: {}
}

const character = (state=initialState, action)=>{
  switch(action.type){
    case 'GET_CHARACTER_LIST': {
      return {
        ...state,
        characterData: action.payload.results,
        pageInfo: action.payload.info
      }
    }
    case 'GET_CHARACTER_DETAIL': {
      return {
        ...state,
        detailsCharacter: action.payload
      }
    }
    default: {
      return state
    }
  }
}

export default character