import React from 'react'

const Widgets = () => {
  return (
    <div className='mt-24 flex flex-row space-x-10'>
      <div className='bg-white flex p-5 justify-around w-fit'>
  <div className="flex flex-col items-start">
    <h2>Daily Transaction Volume</h2>
    <h2 className='text-md'>2,342</h2>
  </div>

  <img className='pl-2' src="/images/small-chart.png" alt="Chart" />
</div>

<div className='bg-white flex p-5 justify-around w-fit'>
  <div className="flex flex-col items-start">
    <h2>Daily Transaction Value</h2>
    <h2 className='text-md'>₦4,000,000</h2>
  </div>

  <img className='pl-2' src="/images/small-chart.png" alt="Chart" />
</div>

<div className='bg-white flex p-5 justify-around w-fit'>
  <div className="flex flex-col items-start">
    <h2>Total Transaction Volume</h2>
    <h2 className='text-md'>452,000</h2>
  </div>

  <img className='pl-2' src="/images/small-chart.png" alt="Chart" />
</div>

<div className='bg-white flex p-5 justify-around w-fit'>
<div className="flex flex-col items-start">
    <h2>Daily Transaction Value</h2>
    <h2 className='text-md'>₦4,000,000</h2>
  </div>

  <img className='pl-2' src="/images/small-chart.png" alt="Chart" />
</div>

      
    </div>
  )
}

export default Widgets
