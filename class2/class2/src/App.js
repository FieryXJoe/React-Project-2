import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

export const App = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

const clearForm = (event) => {
  setFirstName('');
  setLastName('');
  setEmail('');
}
  return (
    <div className="Container">
      <label className="form-label">First Name</label><br />
      <input type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
      <br /><br /><label className="form-label">Last Name</label><br />
      <input type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} />
      <br /><br /><label className="form-label">Email</label><br />
      <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      <br /><br />
      <button onClick = {clearForm} className="button">
        Submit
      </button>
    </div>
  );
}

export default App;
