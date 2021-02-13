import React, { Component } from 'react';

class MyTodoListForm extends Component {

    state = {
        checking: false,
        desc_todo:'',
    }

    handleCheck = () => {
        this.setState({
            checking: !this.state.checking
        })
    }

    render() {

        const {desc_todo} = this.props.mytodo_list;
        const {checking} = this.state;



        return (
            <div>
                {
                    checking ? (
                        <label><input type='checkbox' checked={checking} onChange={this.handleCheck}/><del>{desc_todo}</del></label>
                        
                    ) : (
                        <label><input type='checkbox' checked={checking} onChange={this.handleCheck}/>{desc_todo}</label>
                    )
                }
            </div>
        );
    }
}

export default MyTodoListForm;