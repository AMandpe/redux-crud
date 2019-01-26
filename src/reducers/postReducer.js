import { FETCH_POST, NEW_POSTS } from '../action/types'

const initState = {
  items: [],
  item: {}
}

export default function (state = initState, action) {
  switch (action.type) {
    case FETCH_POST:
      console.log('reducer')
      return {
        ...state,
        items: action.payload
      }
    case NEW_POSTS:
      console.log('reducercalled')
      return {
        ...state,
        item: action.payload
      }
    default:
      return state
  }
}
