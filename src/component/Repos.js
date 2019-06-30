import React, { Component } from 'react';

class Repos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch('https://api.github.com/search/repositories?l=&o=desc&q=stars%3A>1&s=stars&p=2&ref=advsearch')
        .then(response => response.json())
        .then(data => this.setState({ items: data.items, isLoading: false }))
        .catch(error => this.setState({ error, isLoading: false }));
  }
  render() {
    const { items, isLoading, error } = this.state;

    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return <p>Loading ...</p>;
    }

    return (
      <ul>
        {items.map(item =>
          <li key={item.id}>
            <div>name:{item.name}</div>
            <div>langage:{item.language}</div>
            <div>stars:{item.stargazers_count}</div>
            <img src={item.owner.avatar_url} alt="" />
          </li>
        )}
      </ul>
    );
  }
  
}

export default Repos;