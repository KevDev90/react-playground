import React, {Component} from 'react';


class HelloWorld extends Component {
    state = {
      state: 'world'
    };

    render () {
        return (
        <div className = "HelloWorld">
            <p>Hello, {this.state.who}!</p>
            <button onClick={() => this.setState({who: 'world'})}>
            World
            </button>
            <button onClick={() => this.setState({who: 'friend'})}>
            Friend
            </button>
            <button onClick={() => this.setState({who: 'react'})}>
            React
            </button>
        </div>
        )   
    }
}


export default HelloWorld