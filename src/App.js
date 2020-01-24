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
          this.setState({ contact : data })
        })
        .catch(console.log(this.state.contact))
  }

  render() {
    return (
        <Contacts contacts={this.state.contact} />
    )
  }
}

export default App;