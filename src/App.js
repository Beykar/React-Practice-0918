import React, { Component } from "react";
import Person from "./Person/Person";
import "./App.css";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 }
    ]
  };

  switchNameHandler = newName => {
    //alert('button clicked');
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Manu", age: 29 },
        { name: "Stephanie", age: 36 }
      ]
    });
  };

  nameChangeHandler = event => {
    this.setState({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 29 },
        { name: "Stephanie", age: 26 }
      ]
    });
  };

  render() {
    const style = {
      width: "300px",
      margin: "30px 310px",
      padding: "30px",
      fontSize: "16px",
      borderRadius: "5px",
      boxShadow: "5px 5px 5px gray",
      color: "brown",
      cursor: "pointer"
    };

    return (
      <div className="App">
        <div className="App-header">
          <h2 className="headerH2">Welcome to my React App</h2>
        </div>
        <p className="App-intro">
          <button
            style={style}
            onClick={() => this.switchNameHandler("Karim!")}
          >
            Switch Name
          </button>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, "Hamid!")}
            changed={this.nameChangeHandler}
          >
            My hobbies are: Racing
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          />
        </p>
      </div>
    );
  }
}

export default App;
