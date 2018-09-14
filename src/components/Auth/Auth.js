import React, {Component} from 'react' 
import axios from 'axios'

class Auth extends Component {

  constructor (props) {
    super(props) 

    this.state = {
      username: '',
      password: ''
    }
    this.handelInput = this.handelInput.bind(this)
    this.login = this.login.bind(this)
  }

  handelInput (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  login () {
    let {username, password} = this.state
    console.log(username, password)
    axios.post(`/api/login`, {username: username, password: password})
    
  }

  render () {
    console.log(this.state)
    return (
      <div>
        <h1>Auth</h1>
        <div>
          <input
          name = 'username'
          onChange = {this.handelInput} 
          placeholder = 'Please Enter UserName'
          value = {this.state.username}
          type="text"/>
          <input
          name = 'password'
          onChange = {this.handelInput} 
          placeholder = 'Please Enter Password'
          value = {this.state.password}
          type="text"/>
        </div>
        <div>
          <button
            onClick = {this.login}
          >Login, My Dude!</button>
          <button>Register Bro!</button>
        </div>
      </div>
    )
  }
}

export default Auth