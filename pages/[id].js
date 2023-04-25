import Table from '@/components/Table'
import React from 'react'

export default function CarDetail(/*{data}*/) {
    const fakeData =  [
        {
            id: 4,
            createdAt: "2023-04-25",
            speed: 37,
            allowedMaximumSpeed: 50,
            driverId: 3
        },
        {
            id: 5,
            createdAt: "2023-04-23",
            speed: 37,
            allowedMaximumSpeed: 50,
            driverId: 3
        },
        {
            id: 6,
            createdAt: "2023-04-23",
            speed: 39,
            allowedMaximumSpeed: 50,
            driverId: 3
        },
        {
            id: 7,
            createdAt: "2023-04-24",
            speed: 34,
            allowedMaximumSpeed: 50,
            driverId: 3
        },
        {
            id: 7,
            createdAt: "2023-04-24",
            speed: 34,
            allowedMaximumSpeed: 50,
            driverId: 3
        },
        {
            id: 7,
            createdAt: "2023-04-24",
            speed: 34,
            allowedMaximumSpeed: 50,
            driverId: 3
        },
        {
            id: 7,
            createdAt: "2023-04-24",
            speed: 34,
            allowedMaximumSpeed: 50,
            driverId: 3
        },
        {
            id: 7,
            createdAt: "2023-04-24",
            speed: 34,
            allowedMaximumSpeed: 50,
            driverId: 3
        },
        {
            id: 7,
            createdAt: "2023-04-24",
            speed: 34,
            allowedMaximumSpeed: 50,
            driverId: 3
        },

        {
            id: 7,
            createdAt: "2023-04-24",
            speed: 34,
            allowedMaximumSpeed: 50,
            driverId: 3
        },
        {
            id: 7,
            createdAt: "2023-04-24",
            speed: 34,
            allowedMaximumSpeed: 50,
            driverId: 3
        },
        {
            id: 7,
            createdAt: "2023-04-24",
            speed: 34,
            allowedMaximumSpeed: 50,
            driverId: 3
        },
        {
            id: 7,
            createdAt: "2023-04-24",
            speed: 34,
            allowedMaximumSpeed: 50,
            driverId: 3
        },
        {
            id: 7,
            createdAt: "2023-04-24",
            speed: 34,
            allowedMaximumSpeed: 50,
            driverId: 3
        },
        {
            id: 7,
            createdAt: "2023-04-24",
            speed: 34,
            allowedMaximumSpeed: 50,
            driverId: 3
        },
        {
            id: 7,
            createdAt: "2023-04-24",
            speed: 34,
            allowedMaximumSpeed: 50,
            driverId: 3
        },
        {
            id: 7,
            createdAt: "2023-04-24",
            speed: 34,
            allowedMaximumSpeed: 50,
            driverId: 3
        },
        {
            id: 7,
            createdAt: "2023-04-24",
            speed: 34,
            allowedMaximumSpeed: 50,
            driverId: 3
        },
        {
            id: 7,
            createdAt: "2023-04-24",
            speed: 34,
            allowedMaximumSpeed: 50,
            driverId: 3
        },
        {
            id: 7,
            createdAt: "2023-04-24",
            speed: 34,
            allowedMaximumSpeed: 50,
            driverId: 3
        },
        {
            id: 7,
            createdAt: "2023-04-24",
            speed: 34,
            allowedMaximumSpeed: 50,
            driverId: 3
        },
        {
            id: 7,
            createdAt: "2023-04-24",
            speed: 34,
            allowedMaximumSpeed: 50,
            driverId: 3
        },

        {
            id: 7,
            createdAt: "2023-04-24",
            speed: 34,
            allowedMaximumSpeed: 50,
            driverId: 3
        },
    ]
  return (
    <div className='flex items-center justify-center h-auto '><Table data={fakeData /*silib data yaz*/} /></div>
  )
}

// export async function getServerSideProps({params}) {
//     const baseUrl = ''
//     const res = await fetch(`${baseUrl}/cars/id/${params.id}`)
//     const data = await res.json()

//     if (!data){
//         return {
//             notFound: true,
//         }
//     }

//     return {
//         props: {
//             data
//         }
//     }
// }
