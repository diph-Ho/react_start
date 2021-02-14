import React, { Component, Fragment } from 'react';
import MyTodoListForm from './MyTodoListForm';

class MyTodoList extends Component {

    static defaultProps = {
        my_todos: [],
    }

    render() {
        const{my_todos, onRemove} = this.props;

        if(!my_todos) return null;

        const list = my_todos.map(
            mytodo_list => (
                <MyTodoListForm
                    mytodo_list={mytodo_list}
                    onRemove={onRemove}
                    key={mytodo_list.id}
                />
            )
        )

        return (
            <Fragment>
                {list}
            </Fragment>
        );
    }
}

export default MyTodoList;