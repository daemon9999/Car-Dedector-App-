import Link from 'next/link'
import React from 'react'

export default function s() {
    return (
        <section className='h-full flex items-center justify-center '>
            <div className='h-[300px] bg-slate-900 flex flex-col items-center justify-center gap-y-10 text-white p-10 w-[50%] rounded-xl'>
                <h1 className='font-bold text-4xl text-center'>
                    This car id is not available...
                </h1>
                <Link href={'/'} className='bg-red-500 px-10 flex items-center justify-center py-2 rounded-lg border-red-500 hover:bg-white hover:text-red-500 transition-all duration-300 font-semibold text-xl'>Back to Home Page</Link>
            </div>

        </section>
    )
}
