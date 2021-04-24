import React, { Component } from 'react';
import Item from './item'

class ItemList extends Component {
    state = { counters: [
        {id: 0, name:"Brush teeth", value: 4}], 
        id:1,
        name:"A Thing",
        value:0
    }
    
    handleIncrement = counter =>{
        const counters = [...this.state.counters]
        const index = counters.indexOf(counter)
        counters[index] = {...counter}
        if(counters[index].value<10){
            counters[index].value++
            this.setState({counters})
        }

    }

    handleDecrement = counter =>{
        const counters = [...this.state.counters]
        const index = counters.indexOf(counter)
        counters[index] = {...counter}
        if(counters[index].value>0){
            counters[index].value--
            this.setState({counters})
        }
    }
    
    handleDelete = counterId => {
        const counters = this.state.counters.filter(c=> c.id !== counterId)
        this.setState({counters})
    }
    
    handleAdd = (e) => {
        e.preventDefault()
        this.setState(state => {
          const counters = [...state.counters,{id: this.state.id,name: this.state.name,value: this.state.value}];
          return {
            counters
          }
        })
        const id= this.state.id + 1
        this.setState({id})
      }

    handleValueChange = (event) =>{
        this.setState({value: parseInt(event.target.value)})
    }

    handleNameChange = (event) =>{
        this.setState({name: event.target.value})
    }

    render() {
        return ( <div class="centered">
            <form onSubmit={(e) => {this.handleAdd(e)}}>
                <label>
                    Name:
                    <input type="text" name='name' onChange={this.handleNameChange} />
                </label>
                <label for="value">Importance</label>
                <select id="value" name= 'value' onChange={this.handleValueChange}>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
                <button className="btn btn-primary btn-sm m-2">
                    Add
                </button>
            </form>
            {this.state.counters.map(counter =>
                <Item key = {counter.id} onDecrement={this.handleDecrement} onIncrement={this.handleIncrement} onDelete={this.handleDelete} counter = {counter}/>)}
        </div>);
    }
}
 
export default ItemList;