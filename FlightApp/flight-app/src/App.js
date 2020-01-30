import React, { Component } from 'react';
import axios from 'axios'
/*http://api.aviationstack.com/v1/flights?access_key=03ce07bbf3aec61d764a149b4be90037*/
const params = {
  access_key: '03ce07bbf3aec61d764a149b4be90037'
}

class App extends Component {
  state = {
    flights: []
  }

  componentDidMount(){
    axios.get('http://cors-anywhere.herokuapp.com/http://api.aviationstack.com/v1/flights?access_key=03ce07bbf3aec61d764a149b4be90037]', {params})
    .then(res => {
      const flights = res.data;
      this.setState({ flights });
    })
    //console.log(this.state.flights.data.callback);
   
  }


  render() {
    return (
      <ul>
        <h3> Hell</h3>
        
      </ul>
    );
  }
}

export default App;
