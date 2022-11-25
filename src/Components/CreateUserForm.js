import { useState, useEffect } from 'react';
import axios from 'axios'
import SuccessBanner from './SuccessBanner';
import ErrorBanner from './ErrorBanner'

function CreateUserForm() {

  const BASE_URL = "https://frontend-take-home.fetchrewards.com/form";
  const [success, setSuccess] = useState(false);
  const [failure, setError] = useState({
    error: false,
    errorMessage: ''
  });
  const [states, setStates] = useState([]);
  const [occupations, setOccupations] = useState([]);
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
    occupation: '',
    state: ''
});

  const fetchData = async () => {
    try {
      let response = await axios.get(BASE_URL);
      setStates(response.data.states);
      setOccupations(response.data.occupations);
     } catch (err) {
       console.log(err);
     }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await axios.post(BASE_URL, credentials);
    if (response.status === 201) {
      console.log(response)
      setSuccess(true)
    } else {
      setError({error: true, errorMessage: response.status})
    }
  }
  
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="CreateUserForm">
      {success && <SuccessBanner credentials = {credentials}/>}
      {failure.error && <ErrorBanner failure = {failure}/>}
      <form id="createNewUserForm" onSubmit={handleSubmit}>
        <h3>Create New User</h3>
        <div id="userFullName">
          <label htmlFor="name">Full Name:</label>
          <input 
          type="text" 
          name="name" 
          value={credentials.name} 
          required 
          onChange={e => setCredentials({ ...credentials, name: e.target.value })}>
          </input>
        </div>
        <div id="userEmail">
          <label htmlFor="email">Email:</label>
          <input 
          type="text" 
          name="email" 
          value={credentials.email} 
          required 
          onChange={e => setCredentials({ ...credentials, email: e.target.value })}>
          </input>
        </div>
        <div id="userPassword">
          <label htmlFor="password">Password:</label>
          <input 
          type="password" 
          name="password" 
          value={credentials.password} 
          required
          onChange={e => setCredentials({ ...credentials, password: e.target.value })}>
          </input>
        </div>
        <div id="userOccupation">
          <label htmlFor="occupation">Occupation:</label>
          <select id="occupation" defaultValue={occupations[0]} required onChange={e => setCredentials({ ...credentials, occupation: e.target.value })}>
          { occupations.map((occupation, i) => (
              <option 
              key={i} 
              value={occupation} 
              >
                {occupation}
              </option>
          ))}
          </select>
        </div>
        <div id="userState">
          <label htmlFor="state">State:</label>
          <select id="state" defaultValue={states[0]} required onChange={e => setCredentials({ ...credentials, state: e.target.value })}>
            { states.map((state, i) => (
              <option 
              key={i} 
              value={state.name}
              >
                {state.name}
              </option>
            ))}
          </select>
          <input type="submit" value="Submit"></input>
        </div>
      </form>
    </div>
  );
}

export default CreateUserForm;