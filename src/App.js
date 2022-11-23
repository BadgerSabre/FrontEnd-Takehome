import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'

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
  }, []);

  return (
    <div className="App">
      <form id="createNewUserForm" action="https://frontend-take-home.fetchrewards.com/form" method="POST">
        <h3>Create New User</h3>
        <div id="userFullName">
          <label htmlFor="name">Full Name:</label>
          <input type="text" name="name" required></input>
        </div>
        <div id="userEmail">
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" required></input>
        </div>
        <div id="userPassword">
          <label htmlFor="password">Password:</label>
          <input type="text" name="password" required></input>
        </div>
        <div id="userOccupation">
          <label htmlFor="occupation">Occupation:</label>
          <select name="occupation" required>
          { occupations.map((occupation, i) => (
              <option key={i} value={occupation}>
                {occupation}
              </option>
          ))}
          </select>
        </div>
        <div id="userState">
          <label htmlFor="state">State:</label>
          <select name="state" required>
            { states.map((state, i) => (
              <option key={i} value={state.name}>
                {state.name}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
}

export default App;