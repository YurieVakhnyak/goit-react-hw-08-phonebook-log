import { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    console.log(name, value);
    //   something else
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch.authOperation.register({ name, email, password });
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit} autoComplete="off"></form>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        ></input>
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        ></input>
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        ></input>
      </label>
    </div>
  );
}
