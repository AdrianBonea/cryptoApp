import PropTypes from 'prop-types';

import { useId } from 'react';

function Input({ value, onChange, name, type, placeholder }) {
  const handleChange = (e) => {
    const { value: changedValue } = e.target;
    onChange(changedValue, e);
  };

  const id = useId();

  return (
    <div className="mt-1 relative rounded-md shadow-md">
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="block w-full pr-10 border-gray-300 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm rounded-md"
      />
    </div>
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
