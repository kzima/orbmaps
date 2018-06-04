import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Markdown from'react-markdown';
import { StripeProvider } from 'react-stripe-elements';
import MyStoreCheckout from './MyStoreCheckout';

// const input = '# test';
//  const src = 

class App extends Component {
        state = {
                blob: ''
        };
        componentDidMount() {
                fetch("/content/register.md").then(response => response.text()).then(result => this.setState({blob: result}));
        }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <Markdown source={this.state.blob} />
        </p>
        <StripeProvider apiKey="pk_test_12345">
                <MyStoreCheckout />
        </StripeProvider>
        </div>
    );
  }
}

export default App;
