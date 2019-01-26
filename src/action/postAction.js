import { FETCH_POST, NEW_POSTS } from './types'

export const fetchPosts = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(result => result.json())
    .then(posts => {
      dispatch({
        type: FETCH_POST,
        payload: posts
      })
    })
}

export const createPosts = (postData) => dispatch => {
  console.log('action called')
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(posts => {
        console.log('posts============>',posts)
      dispatch({
        type: NEW_POSTS,
        payload: posts
      })
    })
}
