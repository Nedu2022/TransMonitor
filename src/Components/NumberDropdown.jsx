import React from 'react';
import PropTypes from 'prop-types';

const NumberDropdown = ({ onChange, selectedNumber }) => {
  const numbers = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div className="relative inline-block">
      <select
        className="bg-transparent border-none px-2 py-2 pr-6 rounded focus:outline-none focus:shadow-outline text-blue-500"
        onChange={(e) => onChange(e.target.value)}
        value={selectedNumber}
        style={{ color: 'blue' }}
      >
        {numbers.map((number) => (
          <option key={number} value={number}>
            {number}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center text-gray-700">
        {/* <IoIosArrowDown/> */}
      </div>
    </div>
  );
};

NumberDropdown.propTypes = {
  onChange: PropTypes.func.isRequired,
  selectedNumber: PropTypes.number.isRequired,
};

export default NumberDropdown;
