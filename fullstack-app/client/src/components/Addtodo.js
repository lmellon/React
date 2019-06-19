import React, { Component } from 'react';
import { Consumer } from '../context';

export default class Addtodo extends Component {
    state = {
        id: 4,
        title: '',
        complete: false
    }

    update = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    add = (dispatch, e) => {
        e.preventDefault();
        const newTodo = this.state
        dispatch({type: "ADD", payload: newTodo})
        this.setState({ title: ''})
    }

    render() {
        return(
            <Consumer>{ value => {
                const { dispatch } = value
                return <form onSubmit={this.add.bind(this, dispatch) }>
                    <input type="text" placeholder="new todo item" onChange={this.update} value={this.state.title}/>
                    <button type="submit">Add Todo</button>
                </form>
            }}</Consumer>
        )
    }
}
