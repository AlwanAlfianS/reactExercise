import React, {Component} from 'react';
import Contacts from "./components/contacts";

class App extends Component {
  state = {
    contact : []
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then((data) => {
          this.setState({ contacts : data })
        })
        .catch(console.log)
  }

  render() {
    return (
        <Contacts contacts={this.state.contact} />
    )
  }
}

export default App;