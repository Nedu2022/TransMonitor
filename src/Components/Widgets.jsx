import React from 'react'

const Widgets = () => {
  return (
    <div className='mt-20 flex flex-row justify-evenly'>
<div className='bg-white flex items-center justify-around w-fit px-3'>
  <div className="flex flex-col items-start p-3">
    <h1 className='text-md lg:text-xs ' style={{ whiteSpace: 'nowrap' }}>Daily Transaction Volume</h1>
    <h2 className='text-md lg:text-xs '>2,342</h2>
  </div>

  <img className='w-10 h-8' src="/images/small-chart.png" alt="Chart" />
</div>


  <div className='bg-white flex items-center justify-around w-fit px-3'>
  <div className="flex flex-col items-start p-3">
  <h1 className='text-xs' style={{ whiteSpace: 'nowrap' }}>Daily Transaction Volume</h1>
      <h2 className='text-xs'>₦4,000,000</h2>
    </div>

    <img className='w-10 h-8' src="/images/small-chart.png" alt="Chart" />
  </div>

  <div className='bg-white flex items-center justify-around w-fit px-3'>
  <div className="flex flex-col items-start p-3">
  <h1 className='text-xs' style={{ whiteSpace: 'nowrap' }}>Daily Transaction Volume</h1>
      <h2 className='text-xs'>452,000</h2>
    </div>

    <img className=' w-10 h-8' src="/images/small-chart.png" alt="Chart" />
  </div>

  <div className='bg-white flex items-center justify-around w-fit px-3'>
    <div className="flex flex-col items-start p-3">
    <h1 className='text-xs' style={{ whiteSpace: 'nowrap' }}>Daily Transaction Volume</h1>
      <h2 className='text-xs'>₦4,000,000</h2>
    </div>

    <img className='w-10 h-8' src="/images/small-chart.png" alt="Chart" />
  </div>
</div>

  )
}

export default Widgets
