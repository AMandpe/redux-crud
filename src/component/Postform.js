import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createPosts } from '../action/postAction'
import PropTypes from 'prop-types'

class Postform extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      body: ''
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit (e) {
    e.preventDefault()

    const post = {
      title: this.state.title,
      body: this.state.body
    }
    console.log('post---->',post)
    this.props.createPosts(post)
  }
  render () {
    return (
      <div className='app-content'>
        <h1> Add Post </h1>
        <form onSubmit={this.onSubmit}>
          <div className='center'>
            <label>Title</label><br />
            <input type='text' name='title' onChange={this.onChange} value={this.state.title} />
          </div><br />
          <div className='center'>
            <label>Body</label><br />
            <textarea name='body' onChange={this.onChange} value={this.state.body} />
          </div><br />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

Postform.PropTypes = {
  createPosts: PropTypes.func.isRequired
}

export default connect(null, { createPosts })(Postform)
