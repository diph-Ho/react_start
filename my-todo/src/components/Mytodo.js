import React, { Component } from 'react';

class Mytodo extends Component {

    state = {
        desc_todo: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.onCreate(this.state);
        this.setState({
            desc_todo: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    name='desc_todo'
                    onChange={this.handleChange}
                    value={this.state.desc_todo}
                />
                <button type='submit'>할일추가</button>
            </form>
        );
    }
}

export default Mytodo;