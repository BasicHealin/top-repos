import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {

  }
  handleSubmit = (event) => { 
      event.preventDefault()
      const username = event.target[0].value;
      const password = event.target[1].value
    if (username === "hamid" && password === "123"){
        this.props.setUser()
    }
  }
  render() {
    return (
      <div>
         <form onSubmit={this.handleSubmit}>
            username: <input type="text" name="username"/><br/>
            password: <input type="password" name="password"/><br/>
            <input type="submit" value="Login"/>
        </form>
      </div>       
    );
  }
  
}

export default Login;