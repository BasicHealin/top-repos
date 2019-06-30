import React, { Component } from 'react';
import Repos from './component/Repos';
import Login from './component/Login';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false
    };
  }

  componentDidMount() {
  }
  setUser = () =>{
    this.setState({
      loggedIn: true
    })
  }
  render() {
    const {loggedIn} =this.state

    if (!loggedIn){
      return <Login setUser={this.setUser} />
    }

    return (
      <Repos />
    );
  }
  
}

export default App;