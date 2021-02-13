import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {
  
  id = 0; //rendering 하지 않아도 되기 때문에

  //state에 들어가야 하는 건 rendering 해야하는 것들 뿐
  state = {
    information: [],
  }
 
  handleCreate = (data) => {
    const{information} = this.state;
    this.setState({
      // information: information.concat({
      //   ...data,
      //   id: this.id++
      // })
      information: information.concat(Object.assign({}, data, {id: this.id++}))
    })
  }

  handleRemove = (id) => {
    const {information} = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    });
  }

  handleUpdate = (id,data) => {
    const {information} = this.state;
    this.setState({
      information: information.map(
        info => {
          if(info.id === id){
            return {
              id,
              ...data,
            };
          }
          return info;
        }
      )
    })
  }

  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate}/>
        {/* {JSON.stringify(this.state.information)} */}
        <PhoneInfoList 
          data={this.state.information}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;