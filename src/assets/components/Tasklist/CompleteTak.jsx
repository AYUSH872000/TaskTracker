import React from 'react'

const CompleteTak = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[400px] p-5 bg-blue-600 rounded-xl '>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>
                {data.category}
            </h3>
            <h4 className='text-sm font-semibold'>
                {data.taskDate}
            </h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'> 
            {data.taskTitle}
        </h2>
        <p className='text-sm mt-4'>
            {data.taskDescription}
        </p>
        <div className='mt-6'>
            <button className='w-full bg-green-600 rounded-md font-medium py-2 px-4 text-md'>Completed</button>
        </div>
    </div>
  )
}

export default CompleteTak