import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const username = e.target[0].value;
    const password = e.target[1].value;
    const data = {
      username,
      password,
    };

    try {
      const response = await axios.post(
        'http://localhost:4000/v1/api/auth/login',
        data,
        { withCredentials: true }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFetch = async () => {
    try {
      const response = await axios.get('http://localhost:4000/v1/api/blogs', {
        withCredentials: true,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Username :</p>
        <input
          value={username}
          onChange={({ target }) => setUsername(target.value)}
          placeholder="enter username"
        />
        <p>Password :</p>
        <input
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          placeholder="enter password"
          type="password"
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        <button onClick={handleFetch}>Fetch</button>
      </div>
    </div>
  );
};

export default Login;
