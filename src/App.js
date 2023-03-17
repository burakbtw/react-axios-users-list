import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      this.setState({
        users: response.data,
        isLoading: false,
      });
    });
  }

  render() {
    const { users, isLoading } = this.state;

    if (isLoading) {
      return <div>Loading</div>;
    }

    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Kullanıcılar</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <span style={{ fontWeight: "bold" }}>{user.name}</span> --{" "}
              {user.username}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
