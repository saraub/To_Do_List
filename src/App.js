import React, { Component } from 'react';
import './App.css';

class Counter extends Component{
  constructor(props) {
    super(props);
    this.state = {
      list: [
        "Go to the store",
        "Learn French",
        "Call the office"
      ],
      done:[

      ]
      
    }
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    
  }
  addItem(e) {
    
    e.preventDefault();

    let list = this.state.list;
    const newItem = document.getElementById("addInput");
    const form = document.getElementById("addItemForm");

    /
    if (newItem.value !== "") {
      
      list.push(newItem.value);
      
      this.setState({
        list: list
      });
      
      newItem.classList.remove("is-danger");
      form.reset();
    } else {
      
      newItem.classList.add("is-danger");
    }
  }
  removeItem(item) {
   
    const list = this.state.list.slice();
    
    list.some((el, i) => {
      if (el === item) {
        // If item matches, remove it from array
        list.splice(i, 1);
        return true;
      }
    });
    // Set state to list
    this.setState({
      list: list,
      

    });
    
  }
  doneitem(item){
    const done =this.state.done;
    done.push(item);
    window.alert("Task have been done! Congrats!");
    this.setState({
      done: done
    });
    this.removeItem(item);

  }
  

render(){
  return (
    
    <div className="content">
      <label>To Do List</label>
  
      <div className="container">
        <section className="section">
          <ul className=" card wrp">
            {this.state.list.map(item => (
            <li key={item}>
            {item} &nbsp;
            <span className="right-align">
              <button className="delete btn-floating btn-large waves-effect waves-light red "
              onClick={() => this.removeItem(item)}><i class="material-icons">clear</i>

              </button>
              <button className="delete btn-floating btn-large waves-effect waves-light green "
              onClick={() => this.doneitem(item) }><i class="material-icons">check</i>

              </button>

            </span>
            
            </li>
            ))}
          </ul>
        </section>
        <hr />
        <section className="section">
          <form className="form" id="addItemForm">
            <input
              type="text"
              className="input"
              id="addInput"
              placeholder="Something that needs ot be done..."
            />
            <button className="btn-floating btn-large waves-effect waves-light blue" onClick={this.addItem}>
            <i class="material-icons">add</i>
            </button>
          </form>
        </section>
        
      </div>
      <div className="card-panel hoverable c">
        <label>Tasks that have been completed</label>

        <ul>
          {this.state.done.map(item =>(<li key={item}>{item}</li>))}
        </ul>

      </div>
      
</div>
  );

}

}
  
  


export default Counter;
