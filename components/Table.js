import React from 'react'

const Table = ({data}) => {
    const tableHeadings = [
        'Ticket Id',
        'Driver Id',
        'Dedection Date',
        'Speed (km/hr)',
        'Max Speed (km/hr)',
    ]
  return (
    <table className=' border flex flex-col rounded overflow-hidden w-full my-3 '>
        <thead className='rounded-md '>
            <tr className='flex items-center rounded  justify-between'>
            
                <th className='h-12 border-r w-[10%] flex items-center justify-center bg-slate-900 text-white'>{tableHeadings[0]}</th>
                <th className='h-12 border-r w-[10%] flex items-center justify-center bg-slate-900 text-white'>{tableHeadings[1]}</th>
                <th className='h-12 border-r flex-auto flex items-center justify-center bg-slate-900 text-white'>{tableHeadings[2]}</th>
                <th className='h-12 border-r w-[20%] flex items-center justify-center bg-slate-900 text-white'>{tableHeadings[3]}</th>
                <th className='h-12 border-r w-[20%] flex items-center justify-center bg-slate-900 text-white'>{tableHeadings[4]}</th>
         
            </tr>
        </thead>
        <tbody className='flex flex-col h-[65vh] overflow-auto table-scrollbar'>
                {data.map((t, key) => (
                    <TableValues t={t} key={key}/>
                ))}
        </tbody>
    </table>
  )
}


const TableHeadings = ({children}) => {
    return (
        <th className='h-12 border-r w-[20%] flex items-center justify-center bg-slate-900 text-white'>{children}</th>
    )
}

const TableValues = ({t}) => {
    return (
        <tr className='flex items-center odd:bg-blue-500 even:bg-blue-300'>
            <th className='w-[10%] flex items-center justify-center h-8  text-white border-r'>{t.id}</th>
            <td className='w-[10%] flex items-center justify-center h-8  text-white border-r'>{t.driverId}</td>
            <td className='flex-auto flex items-center justify-center h-8  text-white border-r'>{t.createdAt}</td>
            <td className='w-[20%] flex items-center justify-center h-8  text-white border-r'>{t.speed}</td>
            <td className='w-[20%] flex items-center justify-center h-8  text-white border-r'>{t.allowedMaximumSpeed}</td>
        </tr>
    )
}

export default Table