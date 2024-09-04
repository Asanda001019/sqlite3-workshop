import React, { useState } from 'react';
import axios from 'axios';

const AddCard = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/users', { name, age });
      const newUser = response.data;
      // You can add the new user to the state or refresh the page to see the new user
      console.log(`New user added:`, newUser);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="add-card">
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
          </label>
          <br />
          <label>
            Age:
            <input type="number" value={age} onChange={(event) => setAge(event.target.value)} />
          </label>
          <br />
          <button type="submit">Add User</button>
        </form>
      )}
    </div>
  );
};

export default AddCard;