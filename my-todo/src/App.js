import React, { Component, Fragment } from 'react';
import Mytodo from './components/Mytodo';
import MyTodoList from './components/MyTodoList';

class App extends Component {

  id = 0;

  state = {
    my_todo: [],
  }

  handleInput = (new_todo) => {
    const {my_todo} = this.state;
    this.setState({
      my_todo: my_todo.concat(Object.assign({},new_todo,{id: this.id++})),
      // my_todo: my_todo.concat({...new_todo,id: this.id++}) 
    });
  }

  render() {

    return (
      <Fragment>
        <h1>My Todo</h1>
        <Mytodo onCreate={this.handleInput}/>
        <MyTodoList
          my_todos={this.state.my_todo}
        />
      </Fragment>
    );
  }
}

export default App;