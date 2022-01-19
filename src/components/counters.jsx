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

    handleDelete = () => {
        console.log('Event Delete has called')
    }

    render() {
        return (
            <div>
                {this.state.counter.map(counter=><Counter key={counter.id}
                    onDelete={this.handleDelete} value={counter.value}>
                    <h4>Children Title With Id #{counter.id}</h4>
                    </Counter>)}
            </div>
        );
    }
}
 
export default Counters;