import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state ={
    pizzas: [],
    currentPizza: ''
  }

  onChangeTopping = (e) => {
    let newpizza = {...this.state.currentPizza}
    newpizza.topping = e.target.value
    this.setState({
      currentPizza: newpizza,
    })
  }

  onChangeSize = (e) => {
    let newpizza = {...this.state.currentPizza}
    newpizza.size = e.target.value
    this.setState({
      currentPizza: newpizza,
    })
  }

  toggleVegetarian = () => {
    let newpizza = {...this.state.currentPizza}
    newpizza.vegetarian = !newpizza.vegetarian
    this.setState({
      currentPizza: newpizza,
    })
  }

  componentDidMount() {
    fetch('http://localhost:3000/pizzas')
    .then(resp => resp.json())
    .then(pizzas => this.setState({pizzas: pizzas}))
  }

  selectPizza = (pizza) => {
    this.setState({currentPizza: pizza})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let newPizzas = this.state.pizzas.map(pizza => (pizza.id === this.state.currentPizza.id ? this.state.currentPizza : pizza))
    this.setState({pizzas: newPizzas})
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm onChangeTopping={this.onChangeTopping} onChangeSize={this.onChangeSize} toggleVegetarian={this.toggleVegetarian} key={this.state.currentPizza} pizza={this.state.currentPizza} handleSubmit={this.handleSubmit}/>
        <PizzaList selectPizza={this.selectPizza} pizzas={this.state.pizzas}/>
      </Fragment>
    );
  }
}

export default App;
