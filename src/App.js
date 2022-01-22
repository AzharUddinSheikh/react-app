import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters'

class App extends Component {
  state = { 
    counter:[
        {id:1, value:1},
        {id:2, value:0},
        {id:3, value:0},
        {id:4, value:0}
    ]
  }

  handleIncrement = (counter) => {
      let newCounter = this.state.counter.map(c => {
          if (c === counter) {
              c.value += 1;
          }
          return c
      })
      this.setState({counter:newCounter})
  }

  handleDelete = (counterId) => {
      let counters = this.state.counter.filter(c => c.id !== counterId)
      this.setState({counter:counters})
  }

  handleReset = () => {
    let counter = this.state.counter.map(c=>{
        c.value = 0;
        return c;
    })
    this.setState({counter})
  }

  render() {
    return (
      <React.Fragment>
        <NavBar totalCounter={this.state.counter.filter(c=>c.value>0).length} />
        <main className='container'>
        <Counters
          counters={this.state.counter}
          onDelete={this.handleDelete}
          onIncrement={this.handleIncrement}
          onReset={this.handleReset}
          length={this.state.counter.length}
        />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
