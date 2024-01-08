import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SlArrowDown } from "react-icons/sl";

const ListDropdown = ({ onSelect, options, selectedOption }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      <div className="flex items-center ">
        <button
          onClick={handleToggle}
          className="py-2 px-4 w-52 flex justify-between items-center rounded border border-gray-300 focus:outline-none focus:border-blue-300"
        >
          {selectedOption}
          <SlArrowDown />
        </button>
        {/* <span className="ml-2">{selectedOption}</span> */}
      </div>

      {isOpen && (
        <div className="absolute z-10 left-0 mt-2 w-52 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          {options.map((option) => (
            <div
              key={option}
              className="py-2 px-4 cursor-pointer hover:bg-gray-100"
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

ListDropdown.propTypes = {
  onSelect: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  selectedOption: PropTypes.string.isRequired,
};

export default ListDropdown;
