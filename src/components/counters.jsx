import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {
    render() {
        let {onReset, onDelete, onIncrement, counters} = this.props
        return (
            <div>
                <button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button>
                {counters.map(counter=><Counter key={counter.id}
                    onDelete={onDelete}
                    onIncrement={onIncrement}
                    counter={counter}>
                    <h4>Children Title With Id #{counter.id}</h4>
                    </Counter>)}
            </div>
        );
    }
}

export default Counters;