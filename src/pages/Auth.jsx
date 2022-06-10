import { useState } from 'react';
import PropTypes from 'prop-types';

import { Input } from '../components';

function InputField({ label, type, value, onChange, id }) {
  return (
    <label htmlFor={id}>
      {label}
      <Input type={type} value={value} onChange={onChange} />
    </label>
  );
}

function LogInForm({ initialData, onSubmit }) {
  const [logInData, setLogInData] = useState(initialData);
  const { email, password, nickname } = logInData;

  const handleInputChange = (key) => (value) => {
    setLogInData({ ...logInData, [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(logInData);
  };

  return (
    <form style={{ display: 'grid' }} onSubmit={handleSubmit}>
      <InputField
        label="Enter your nickname"
        value={nickname}
        onChange={handleInputChange('nickname')}
      />
      <InputField
        label="Enter your email"
        type="email"
        value={email}
        onChange={handleInputChange('email')}
      />
      <InputField
        label="Enter your password"
        type="password"
        value={password}
        onChange={handleInputChange('password')}
      />
      <button
        type="submit"
        className="flex items-center justify-center font-medium w-full bg-gray-100 px-4 py-4 sm:px-6 text-md text-gray-500 hover:text-gray-600 hover:bg-gray-200 hover:opacity-20 transition-all focus:outline-none"
      >
        Submit
      </button>
    </form>
  );
}

const initialData = {
  nickname: 'John',
  email: 'maklovich@gmail.com',
  password: 'ilikecats',
};

function Auth() {
  const handleSubmit = (data) => {
    // console.log(data);
  };

  return (
    <div>
      <LogInForm initialData={initialData} onSubmit={handleSubmit} />
    </div>
  );
}

InputField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  id: PropTypes.string,
};

InputField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
  label: '',
  id: '',
};

LogInForm.propTypes = {
  initialData: PropTypes.shape({
    nickname: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
  }),
  onSubmit: PropTypes.func,
};

LogInForm.defaultProps = {
  initialData: {
    nickname: '',
    email: '',
    password: '',
  },
  onSubmit: () => {},
};

export default Auth;
