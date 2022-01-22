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
            <button onClick={() => this.props.onIncrement(this.props.counter) } className='badge btn-primary m-2' >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
            </button>
            <button onClick={() => this.props.onDecrement(this.props.counter) } className='badge btn-primary m-2' 
            disabled={this.props.counter.value<=0?true:false}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-minus" viewBox="0 0 16 16">
                <path d="M5.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </button>
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