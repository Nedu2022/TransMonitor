import React from 'react'

const GraphChart = () => {
  return (
    <div className='bg-white w-fit '>
      <div className='flex items-center justify-between px-8 py-4'>
        <h1 className='text-black text-bold text-md'>Today: 5, Aug 2018</h1>
        <div className='flex space-x-7'>
        <div>
          <img src="/images/Dropdown.svg" alt="Dropdown" />
        </div>
        <div className='flex space-x-4'>
          <img src="/images/Left-Button.svg" alt="Left Button" />
          <img src="/images/Right-Button.svg" alt="Right Button" />
        </div>
        </div>

      </div>
      <div className='flex justify-around items-center text-black'>
        <h3>Jan</h3>
        <h3>Feb</h3>
        <h3>Mar</h3>
        <h3>Apr</h3>
        <h3>May</h3>
        <h3>Jun</h3>
      </div>
      <img src="/images/big graph.png" alt="Big Graph" />
    </div>
  )
}

export default GraphChart
