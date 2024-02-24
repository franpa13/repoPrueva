import React from 'react'
import Header from '../Header/Header'
import { useState, useEffect } from 'react'
import Card from '../Main/Card/Card'


export default function Empresa() {
  const [data, setData] = useState()

  useEffect(() => {
    fetch("http://localhost:3030/api/aspirantes")
      .then((response) => response.json())
      .then((data) =>
        setData(data.data),
      );
  }, [])

  console.log(data)

  return (
    <div className=' w-8/12 md:w-full' >
      <Header></Header>
      <h2 className=' pl-2 text-center font-semibold text-lg text-gray-400 md:text-2xl md:text-start'>Url´s de Linkedin</h2>

      <div className='flex flex-wrap'> 
        {data && data.length > 0 && data.map((dat, index) => {
        return (
          <Card key={dat.dni} nombre={dat.nombre} apellido={dat.apellido} linkedin={dat.url_linkedin} index={index}></Card>
        )
      })}
      </div>

    </div>
  )
}
