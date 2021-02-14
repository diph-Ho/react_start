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
            <form class="form-inline text-center" onSubmit={this.handleSubmit}>
                <input
                    class="form-control"
                    name='desc_todo'
                    onChange={this.handleChange}
                    value={this.state.desc_todo}
                    required
                />
                <button className="form-control btn btn-primary m-2" type='submit'>할일추가</button>
            </form>
        );
    }
}

export default Mytodo;