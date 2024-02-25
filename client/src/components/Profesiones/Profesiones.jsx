import React from 'react'
import Header from '../Header/Header'
import { useState, useEffect } from 'react'

export default function Profesiones() {
  const [data, setData] = useState()

  useEffect(() => {
    fetch("http://localhost:3030/api/profesiones")
      .then((response) => response.json())
      .then((data) =>
        setData(data.data),
      );
  }, [])

  console.log(data)
  return (
    <div className=' w-8/12 md:w-full' >
      <Header />

      <div className='bg-gray-100 md:flex md:flex-col  '>
        <div className='mt-3 p-2'>
          <h2 className=' text-center font-semibold text-lg text-gray-400 md:text-2xl md:text-start'>Profesiones</h2>
        </div>
        <div className='w-full md:flex md:flex-col justify-center items-center  '>
          <ul className='flex flex-col justify-center gap-2 items-center w-full p-2 shadow-lg border md:w-3/4 md:m-6'>
            <span className='bg-blue-600 w-full rounded-sm p-1 text-white text-sm md:text-lg text-center' >Listado de Profesiones</span>
            {data && data.length > 0 && data.map((dat) => {
              return (
                <li className='w-full text-center text-sm shadow-md hover:bg-gray-200 md:text-lg' key={dat.id} >{dat.profesion}</li>
              )
            })}
          </ul>
        </div >
      </div>
    </div>
  )
}
