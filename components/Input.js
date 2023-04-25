import React from 'react'
import { AiFillCar } from "react-icons/ai"
export default function Input({ label, ...props }) {
    return (
        <label className='relative flex'>
            <input required={true} type='text' className='w-[300px] h-12 rounded-lg outline-none valid:pt-2 px-2 peer pr-10 text-blue-700 focus:shadow-lg focus:shadow-blue-500 transition-shadow' {...props} />
            <span className='absolute text-blue-300 left-2 top-1/2 -translate-y-1/2 peer-valid:top-2 peer-valid:text-xs transition-all duration-200'>{label}</span>
            <span className='flex h-12  items-center justify-center text-blue-500 absolute top-0 right-2'>
                <AiFillCar />
            </span>
        </label>
    )
}
