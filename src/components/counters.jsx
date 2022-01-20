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

    handleDelete = (counterId) => {
        let counters = this.state.counter.filter(c => c.id !== counterId)
        this.setState({counter:counters})
    }

    render() {
        return (
            <div>
                {this.state.counter.map(counter=><Counter key={counter.id}
                    onDelete={this.handleDelete} counter={counter}>
                    <h4>Children Title With Id #{counter.id}</h4>
                    </Counter>)}
            </div>
        );
    }
}

export default Counters;