import React, {Component} from 'react'

export default class NewTask extends Component {
    state = {
        input: ''
    }
    handleChange = e => {
        this.setState({
            input: e.target.value
        })
    }
    addTask = () => {
        this.props.add(this.state.input)
        this.setState({
            input: ''
        })
    }
    render(){
        return(
            <div>
                <input value={this.state.input} onChange={e => this.handleChange(e)} type="text"/>
                <button onClick={this.addTask}>Add</button>
            </div>
        )
    }
}