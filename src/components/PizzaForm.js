import React from "react"

class PizzaForm extends React.Component {
    
  
    
  render() {
    return(
        <form className="form-row">
          <div className="col-5">
              <input type="text" className="form-control" onChange={this.props.onChangeTopping} placeholder="Pizza Topping" value={
                  //Pizza Topping Should Go Here
                  this.props.pizza.topping
                }/>
          </div>
          <div className="col">
            <select value={this.props.pizza.size} onChange={this.props.onChangeSize} className="form-control">
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>
          <div className="col">
            <div className="form-check">
              <input className="form-check-input" type="radio" onChange={this.props.toggleVegetarian} value="Vegetarian" checked={this.props.pizza.vegetarian}/>
              <label className="form-check-label">
                Vegetarian
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" onChange={this.props.toggleVegetarian} value="Not Vegetarian" checked={!this.props.pizza.vegetarian}/>
              <label className="form-check-label">
                Not Vegetarian
              </label>
            </div>
          </div>
          <div className="col">
            <button type="submit" className="btn btn-success" onClick={this.props.handleSubmit}>Submit</button>
          </div>
        </form>

    )
  }
}

export default PizzaForm
