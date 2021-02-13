import React, { Component } from 'react';
import MyTodoListForm from './MyTodoListForm';

class MyTodoList extends Component {

    static defaultProps = {
        my_todos: [],
    }

    render() {
        const{my_todos} = this.props;

        if(!my_todos) return null;

        const list = my_todos.map(
            mytodo_list => (
                <MyTodoListForm
                    mytodo_list={mytodo_list}
                    key={mytodo_list.id}
                />
            )
        )

        return (
            <div>
                {list}
            </div>
        );
    }
}

export default MyTodoList;