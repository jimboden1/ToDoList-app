import React, { Component } from 'react';

class Item extends Component {
    state = {
        name: this.props.counter.name,
        value: this.props.counter.value
    }
    render() { 
        
        return (
            <div>
                <button onClick ={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m2">Delete</button>
                <span className="badge m-2 badge- primary">{this.props.counter.name}</span>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick ={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">+</button>
                <button onClick ={() => this.props.onDecrement(this.props.counter)} className="btn btn-secondary btn-sm">-</button>
            </div>);
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value: value } = this.props.counter;
        return value;
    }
}
 
export default Item;