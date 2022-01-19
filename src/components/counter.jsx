import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value:this.props.value,
        name:'azhar',
        imgUrl:'https://picsum.photos/200',
        tag: ['tag1', 'tag2','tag3']
    };

    styles = {
        fontSize: 20,
        fontWeight: 'bold'
    }

    renderTags() {
        if (this.state.value ===0) return <p>There are no tags</p>
        return <ul>{ this.state.tag.map(tag=> <li key={tag}>{tag}</li> )}</ul>;
    }

    handleIncrement = (product) => {
        this.setState({value:this.state.value + 1})
    }

    render() { 
        return <React.Fragment>
            <h1 style={{ fontSize:30 }}>Hello {this.state.name}</h1><br/>
            {this.props.children}
            <img src={this.state.imgUrl} alt="random-pic" />
            <span className={ this.getBadgeClass() } style={this.styles}>Count is {this.formatCount()}</span>
            <button onClick={() => this.handleIncrement({id:1}) } className='badge btn-primary m-2' >Increment</button><br />
            <div>
                {this.state.value ===0 && "please create tag!"}
                {this.renderTags()}
            </div>
        </React.Fragment>;
    }

    getBadgeClass() {
        let classes = "badge m-2 btn-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value: count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;