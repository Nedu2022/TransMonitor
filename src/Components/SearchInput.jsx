import React from 'react';
import PropTypes from 'prop-types';

const SearchInput = ({ onChange, value }) => {
  return (
    <div className="relative border-b flex items-center w-80">
    <img src="/images/Search.svg" alt="Search" />
      <input
        type="text"
        placeholder="Search Payments"
        className="py-2 pl-3 text-sm rounded-none border-none border-b border-blue-300 focus:outline-none bg-transparent text-gray-700"
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">


      </div>
    </div>
  );
};

SearchInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default SearchInput;
