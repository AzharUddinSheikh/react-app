import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count:0,
        name:'azhar',
        imgUrl:'https://picsum.photos/200'
    };

    styles = {
        fontSize: 20,
        fontWeight: 'bold'
    }

    render() { 
        return <React.Fragment>
            <h1 style={{ fontSize:30 }}>Hello {this.state.name}</h1><br/>
            <img src={this.state.imgUrl} alt="random-pic" />
            <span className={ this.getBadgeClass() } style={this.styles}>Count is {this.formatCount()}</span>
            <button className='badge btn-primary m-2'>Increment</button>
        </React.Fragment>;
    }

    getBadgeClass() {
        let classes = "badge m-2 btn-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;