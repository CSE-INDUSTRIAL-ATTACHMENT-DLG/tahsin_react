import React, { Component } from 'react'
import State from './State'
class Maincounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        counterArray : [1]
      }
    }
    increment = () => {
        this.setState({
            counterArray : [...this.state.counterArray,1]
        },()=>console.log(this.counterArray))
    }
    decrement = () => {
        let counterArraycopy = this.state.counterArray
        counterArraycopy.pop()
        this.setState({
            counterArray : counterArraycopy
        },()=>console.log(this.counterArray))
    }
    render() {
        const{counterArray}=this.state
        return (
            <div>

                <div>
                    {counterArray.map((elem,index) => <State key={index}/>)}
                </div>

                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement} disabled={counterArray.length===1 ? true : false}>-</button>
            </div>
        );
    }
}

export default Maincounter;