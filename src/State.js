import React, { Component } from 'react'

class State extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        count:1
      }
    }
    increment = () => {
        this.setState({
            count : this.state.count +1
        })
    }
    decrement = () => {
            this.setState({
                count : this.state.count -1
            })
    }
    render() {
        const{count}=this.state
        return (
            <div>
                <h1>Count : {count}</h1>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement} disabled={count===0 ? true : false}>-</button>
            </div>
        );
    }
}

export default State;