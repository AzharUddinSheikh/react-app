import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count:1,
        name:'azhar'
    };
    render() { 
        return <React.Fragment>
            <h1>Hello {this.state.name}</h1><br/>
            <span>Count is {this.formatCount()}</span>
            <button>Increment</button>
        </React.Fragment>;
    }
    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;