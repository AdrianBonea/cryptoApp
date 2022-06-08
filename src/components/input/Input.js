import PropTypes from 'prop-types';

import { useId } from 'react';

function Input({ value, onChange, name, type, placeholder }) {
  const id = useId();

  const handleChange = (e) => {
    const { value: changedValue } = e.target;
    onChange(changedValue, e);
  };

  return (
    <input
      value={value}
      onChange={handleChange}
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
    />
  );
}

Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  name: 'DOGE',
  placeholder: 'DOGE',
  onChange: () => {},
  value: 0,
};

export default Input;
