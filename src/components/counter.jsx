import React, { Component } from 'react';

class Counter extends Component {
    state = {
        name:'azhar',
        imgUrl:'https://picsum.photos/200',
        tag: ['tag1', 'tag2','tag3']
    };

    styles = {
        fontSize: 20,
        fontWeight: 'bold'
    }

    renderTags() {
        if (this.props.counter.value ===0) return <p>There are no tags</p>
        return <ul>{ this.state.tag.map(tag=> <li key={tag}>{tag}</li> )}</ul>;
    }

    render() { 
        return <React.Fragment>
            <h1 style={{ fontSize:30 }}>Hello {this.state.name}</h1><br/>
            {this.props.children}
            <img src={this.state.imgUrl} alt="random-pic" />
            <span className={ this.getBadgeClass() } style={this.styles}>Count is {this.formatCount()}</span>
            <button onClick={() => this.props.onIncrement(this.props.counter) } className='badge btn-primary m-2' >Increment</button><br />
            <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            <div>
                {this.props.counter.value ===0 && "please create tag!"}
                {this.renderTags()}
            </div>
        </React.Fragment>;
    }

    getBadgeClass() {
        let classes = "badge m-2 btn-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value: count } = this.props.counter;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;