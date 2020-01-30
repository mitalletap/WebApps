import React, { Component } from 'react';
import NavBar from './components/navbar'
import Counters from './components/counters';

class App extends Component {

  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ]
  };

  handleDelete = (counterId) => {
    console.log('Event Handler Called', counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters })
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    console.log(this.state.counters[index]);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleAdd = (length) => {
    const counters = [...this.state.counters];
    const index = length;
    counters[index] = {...counters[length-1]};
    console.log(counters[index].id, counters[length].id);
    counters[index].id++;
    console.log(counters[index].id, counters[length].id);
  };


  render() { 
    return ( 
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
      <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onAdd={this.handleAdd}
            onIncrement={this.handleIncrement} />
        </main>
      </React.Fragment>
     );
  }
}
 
export default App;
