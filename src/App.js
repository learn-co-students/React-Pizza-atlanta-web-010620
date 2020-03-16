import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  state = {
    pizzas:[],
    editPizza:{size:"",topping:"",vegetarian:""}
  }

  fetchPizza = () => {
    fetch('http://localhost:3000/pizzas')
    .then(resp => resp.json())
    .then(json => {this.setState({
      pizzas:json
    })
    console.log(json)
    })
  }

  componentDidMount(){
    this.fetchPizza()
  }

  editPizza = (pizza) =>{
    this.setState({
      editPizza:pizza
    })
  }

  submitPizza = () => {
    if (this.state.editPizza.topping !== "" && this.state.editPizza.size !== "" && this.state.editPizza.vegetarian !== "" && this.state.editPizza.id !== null){
      // post request 
      const objData = this.state.editPizza
      console.log("object data: ")
      console.log(objData)

      fetch(`http://localhost:3000/pizzas/${objData.id}`, {
      method: 'PATCH', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(objData),
      })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
      }else{
        console.log("need more data ")
      }
    }

  onEditChange = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    const newEditPizza = this.state.editPizza; 
    newEditPizza[e.target.name] = e.target.value; 
    return this.setState({
      editPizza: newEditPizza
    })
  }

  vegetarianChecked = (e) => {
    console.log(e.target.value)
    const newEditPizza = this.state.editPizza; 
    newEditPizza.vegetarian = true; 
    if (e.target.value === 'on'){
      this.setState({
        editPizza:newEditPizza
      })
    }
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm 
          pizza={this.state.editPizza} 
          submitPizza={this.submitPizza} 
          onEditChange={this.onEditChange}
          vegetarianChecked={this.vegetarianChecked}
        />
        <PizzaList pizzas={this.state.pizzas} editPizza={this.editPizza}/>
      </Fragment>
    );
  }
}

export default App;
