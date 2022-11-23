import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'

// Map using Object.keys.map to generate select options

function App() {

  const [states, setStates] = useState([]);
  const [occupations, setOccupations] = useState([]);

  const fetchData = async () => {
    try {
      let response = await axios.get("https://frontend-take-home.fetchrewards.com/form");
      setStates(response.data.states);
      setOccupations(response.data.occupations);
     } catch (err) {
       console.log(err)
     }
  }
  
  useEffect(() => {
    fetchData();
    console.log(states)
    console.log(occupations)
  }, []);

  return (
    <div className="App">
      <form id="createNewUserForm" action="https://frontend-take-home.fetchrewards.com/form" method="POST">
        <h3>Create New User</h3>
        <div id="userFullName">
          <label for="name">Full Name:</label>
          <input type="text" name="name"></input>
        </div>
        <div id="userEmail">
          <label for="email">Email:</label>
          <input type="text" name="email"></input>
        </div>
        <div id="userPassword">
          <label for="password">Password:</label>
          <input type="text" name="password"></input>
        </div>
        <div id="userOccupation">
          <label for="occupation">Occupation:</label>
          <select name="occupation"></select>
        </div>
        <div id="userState">
          <label for="state">State:</label>
          <select name="state"></select>
        </div>
      </form>
    </div>
  );
}

export default App;
