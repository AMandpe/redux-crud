import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../action/postAction'
import PropTypes from 'prop-types'

class Posts extends Component {
  componentWillMount () {
    this.props.fetchPosts()
    console.log(this.props)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.newPost) {
      console.log('nextProps.newPost----->', nextProps.newPost)
      this.props.posts.unshift(nextProps.newPost)
      console.log(' this.props.posts----->', this.props.posts)
    }
  }
  render () {
    const postItems = this.props.posts.map(post => {
      return (
        <div key={post.id}>
          <h3> {post.title} </h3>
          <p> {post.body} </p>
        </div>
      )
    })
    return (
      <div>
        <h1>Post</h1>
        {postItems}
      </div>
    )
  }
}

Posts.PropTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
}

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
})

export default connect(mapStateToProps, { fetchPosts })(Posts)
