import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = { 
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 0 },
            { id: 3, value: 4 },
            { id: 4, value: 0 },
        ]
     }

     handleIncrement = counter => {
       const counters = [...this.state.counters];
       const index = counters.indexOf(counter);
       counters[index] = {...counter }
       counters[index].value++;
       this.setState({counters})
    }

    handleDecrement = counter => {  
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter}
        counters[index].value--;
        this.setState({counters})
    }

     handleDelete = counterId => {
        const counters = this.state.counters.filter(c => c.id !== counterId)
        this.setState({counters})
     };
     handleReset = () => {
         const counters = this.state.counters.map(c => {
             c.value = 0;
             return c;
         });
         this.setState({counters})
     }
    render() { 
        return ( 
            <div className="d-block p-2">
                <button 
                className="btn btn-primary btn-sm m-2"
                onClick={this.handleReset}
                
                >
                    Reset
                    </button>
           {this.state.counters.map(counter => 
           <Counter 
           key={counter.id} 
           counter={counter}
           onDelete={this.handleDelete}
           onIncrement={this.handleIncrement}
           onDecrement={this.handleDecrement}
           />)}
            </div>
         );
    }
}
 
export default Counters;