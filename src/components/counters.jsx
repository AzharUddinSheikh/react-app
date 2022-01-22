import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {
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
        // when variable are state property has same name
    }

    render() {
        return (
            <div>
                <button onClick={this.handleReset} className="btn btn-primary btn-sm m-2">Reset</button>
                {this.state.counter.map(counter=><Counter key={counter.id}
                    onDelete={this.handleDelete}
                    onIncrement={this.handleIncrement}
                    counter={counter}>
                    <h4>Children Title With Id #{counter.id}</h4>
                    </Counter>)}
            </div>
        );
    }
}

export default Counters;