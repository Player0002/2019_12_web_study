import React, { Component } from 'react';
import './App.css'
import MyName from './MyName'
import Counter from './Counter'
class App extends Component{
  render(){
    const style = {
      backgroundColor: 'black',
      padding: '16px',
      color: 'white'
    }
    return (
      <div>
        <div className="App" style={style}>
          Hello world!
        </div>
        <MyName/>
        <Counter/>
      </div>
    );
  };
}

export default App;
