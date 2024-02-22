import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { FiUserPlus } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";
import Input from '@mui/material/Input';


// or


export default function Header() {
    return (
        <div className='p-4 w-full flex flex-col justify-center md:flex-row md:justify-between items-center md:w-full gap-4 md:gap-12 bg-white shadow-md sticky top-0 z-50'>
            <div className='flex gap-4 justify-center items-center'>
                <button>
                    <IoSearchSharp className='text-blue-500 md:text-2xl' />
                </button>
                <Input placeholder="Buscar..." variant="soft" />
            </div>
            <div className='w-full flex justify-around md:justify-end items-center md:gap-8'>
                <FiUserPlus className='text-blue-500 text-lg font-bold cursor-pointer md:text-2xl' />
                <FaRegUser className='text-blue-500 text-lg font-bold cursor-pointer md:text-2xl' />
                <IoExitOutline className='text-blue-500 text-lg font-bold cursor-pointer md:text-2xl' />
            </div>
        </div>
    )
}



