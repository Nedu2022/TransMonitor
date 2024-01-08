// Table.js
import React from 'react';

const Table = ({ data }) => {
  const columns = Object.keys(data[0]);

  const getTextColor = (name) => {
    switch (name) {
      case 'Reconcilled':
        return '#27AE60'; // Setting desired color for 'Reconcilled'
      case 'Pending':
        return '#EBC315'; // Setting desired color for 'Pending'
      case 'Un-Reconcilled':
        return '#7F8FA4'; // Setting desired color for 'Un-Reconcilled'
      default:
        return 'black'; 
    }
  };

    const getImageSource = (name) => {
      switch (name) {
        case 'Reconcilled':
          return 'images/Green-Ellipse.svg';
        case 'Pending':
          return 'images/Yellow-Ellipse.svg';
        case 'Un-Reconcilled':
          return 'images/Gray-Ellipse.svg';
        default:
          return 'images/Default-Ellipse.svg'; 
      }
  };

  return (
    <div className="overflow-x-auto">
      <table className=" border border-gray-300 w-[93%]">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column}
                className="py-2 px-4 border-b bg-gray-200 font-semibold text-gray-700 text-left"
              >
                {column}
              </th>
            ))}
            <th className="py-2 px-4 border-b bg-gray-200 font-semibold text-gray-700">
             
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className='border-b text-gray'>
              <td>
                <img src={row.Item} alt="Type Image" className="w-10 h-10 object-cover rounded-full" />
              </td>
              <td className="py-2 px-4">{row.Type}</td>
              <td className="py-2 px-4">{row.Price}</td>
              <td className="py-2 px-4">{row.Transaction}</td>
              <td className="py-2 px-4">{row.Time}</td>
              <td className="py-2 px-4 flex items-center">
              <button
                  style={{ color: getTextColor(row.Name) }}
                  className='border rounded-xl p-2 w-full flex items-center justify-center'
                >
                  <img src={getImageSource(row.Name)} alt="" className="mr-2" />
                  {row.Name}
                </button>
                <span className='pl-3'><img src="images/Object.svg" alt="" /></span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
