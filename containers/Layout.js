import React from 'react'

export default function Layout({ children }) {
    return (
        <main className="h-full  relative flex flex-col ">
            <div className='bg-slate-900 h-[80px]'>
                <header className='h-[80px] w-5/6 mx-auto flex items-center justify-center'>
                    <h1 className='font-bold tracking-widest text-5xl text-white'>CAR DEDECTOR</h1>
                </header>
            </div>
            <main className='flex-auto bg-gradient-to-t from-blue-900  to-transparent'>
                <div className='w-5/6 mx-auto h-full'>
                    {children}
                </div>
            </main>
            <div className='bg-slate-900 h-[80px]'>
                <footer className='flex items-center justify-center h-[80px]'>
                    <h4 className='uppercase text-2xl text-white '>&copy;car dedection</h4>
                </footer>

            </div>
        </main>
    )
}
