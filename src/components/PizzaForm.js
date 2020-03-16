import React from "react"

const PizzaForm = (props) => {
  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" name="topping" className="form-control" placeholder="Pizza Topping" value= {props.pizza.topping ? props.pizza.topping : null}
              onChange={props.onEditChange}
            />
        </div>
        <div className="col">
          <select 
            value={props.pizza.size} 
              className="form-control"
                name="size"
                  onChange={props.onEditChange}
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check"
          >
            <input className="form-check-input" type="radio" 
              // value="Vegetarian" 
                name="vegetarian" 
                  onChange={props.vegetarianChecked}
            // checked={props.pizza.vegetarian===true ? props.pizza.vegetarian : false}
            
            />
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          {/* <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" checked={!props.pizza.vegetarian}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div> */}
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={props.submitPizza}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
