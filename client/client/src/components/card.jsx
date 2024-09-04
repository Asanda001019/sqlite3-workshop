import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Card = () => {
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState(null);
  const [editModal, setEditModal] = useState(false);
  const [editedUser, setEditedUser] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/users');
        setUserData(response.data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchUserData();
  }, []);

  const handleEdit = async (id) => {
    try {
      const response = await axios.get(`http://localhost:5000/users/${id}`);
      const user = response.data;
      setEditedUser(user);
      setEditModal(true);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      setUserData(userData.filter((user) => user.id !== id));
    } catch (error) {
      setError(error.message);
    }
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(`http://localhost:5000/users/${editedUser.id}`, {
        name: editedUser.name,
        age: editedUser.age,
      });
      const updatedUser = response.data;
      setUserData(
        userData.map((user) => (user.id === updatedUser.id ? updatedUser : user))
      );
      setEditModal(false);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  return (
    <div className="mard">
      {error ? (
        <p>Error: {error}</p>
      ) : (
        userData.map((user, index) => (
          <div key={index}>
            <div className="w3-container"  style={{display:"grid", gridAutoColumns:"repeat(3,1fr)"}}>
              <div className="w3-card-4" style={{ width: "50%", margin: "20px" }}>
                <header className="w3-container w3-blue">
                  <h1>{user.name}</h1>
                </header>

                <div className="w3-container">
                  <p>{user.age}</p>
                </div>

                <footer className="w3-container w3-blue">
                  <h5>{user.id}</h5>
                </footer>

                <div className="w3-container">


                      <Link to={`editpage/${user.id}`}>
                <button className="w3-button w3-green">Edit</button>
              </Link>

                  <button onClick={() => handleDelete(user.id)}>Delete</button>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
      {editModal && (
        <div className="modal">
          <div className="modal-content">
            <form onSubmit={handleUpdate}>
              <label>
                Name:
                <input
                  type="text"
                  value={editedUser.name}
                  onChange={handleInputChange}
                  name="name"
                />
              </label>
              <br />
              <label>
                Age:
                <input
                  type="number"
                  value={editedUser.age}
                  onChange={handleInputChange}
                  name="age"
                />
              </label>
              <br />
              <button type="submit">Update</button>
              <button onClick={() => setEditModal(false)}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;