import React, { Component } from 'react';
import Mytodo from './components/Mytodo';
import MyTodoList from './components/MyTodoList';

class App extends Component {

  id = 0;

  state = {
    my_todo: [],
  }

  handleRemove = (id) => {
    const{my_todo} = this.state;
    this.setState({
      my_todo: my_todo.filter(del_todo => del_todo.id !== id)  
    });
  }

  handleInput = (new_todo) => {
    const {my_todo} = this.state;
    this.setState({
      my_todo: my_todo.concat(Object.assign({},new_todo,{id: this.id++})),
      // my_todo: my_todo.concat({...new_todo,id: this.id++}) 
    });
  }

  render() {

    const style = {
      paddingLeft: '37%',
    };

    return (
      <div className="container mt-5">
        <div className="d-flex vh-20 flex-column align-items-center">
          <h1 className="text-center">My Todo</h1>
          <Mytodo onCreate={this.handleInput}/>
        </div>
        <div className="d-flex hv-80 flex-column-reverse" style={style}>
          <MyTodoList
            my_todos={this.state.my_todo}
            onRemove={this.handleRemove}
          />
        </div>
      </div>
    );
  }
}

export default App;