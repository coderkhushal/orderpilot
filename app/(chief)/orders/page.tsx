"use client"
import { useorder } from '@/app/context/Ordercontext';
import React from 'react'
import {
   Table,
   TableBody,
   TableCaption,
   TableCell,
   TableFooter,
   TableHead,
   TableHeader,
   TableRow,
} from "@/components/ui/table"
import { Button } from '@/components/ui/button';
import Link from 'next/link';


const OrdersPage = () => {
   const { orders, doneorder } = useorder();
   return (
      <div className='h-full flex flex-col  bg-blue-200 w-full'>
         <div className='flex relative'>

            <h1 className='w-full mb-10 font-semibold text-3xl text-center'>OrderPilot</h1>
            <button
               className=" absolute right-0 top-0 middle none center mr-3 rounded-lg bg-pink-500 py-3 px-6 font-sans  font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none text-3xl"
               data-ripple-light="true"
            >
               <Link href="/main"> Go to Client page</Link>
            </button>
         </div>
         <h1 className='w-full font-semibold text-2xl text-center'>Orders Page</h1>

         <div className='flex flex-col items-center justify-center w-full bg-blue-300 '>


            <section className=" py-20 lg:py-[120px] w-full">
               <div className="container">
                  <div className="flex flex-wrap -mx-4">
                     <div className="w-full px-4">
                        <div className="max-w-full overflow-x-auto">
                           <table className="table-auto w-full">
                              <thead>
                                 <tr className="bg-primary text-center">
                                    <th
                                       className="
                           w-1/3
                           min-w-[160px]
                           text-lg
                           font-semibold
                           text-white
                           py-4
                           lg:py-7
                           px-3
                           lg:px-4
                           border-l border-transparent
                           "
                                    >
                                       Name
                                    </th>
                                    <th
                                       className="
                           w-1/3
                           min-w-[160px]
                           text-lg
                           font-semibold
                           text-white
                           py-4
                           lg:py-7
                           px-3
                           lg:px-4
                           "
                                    >
                                       Quantity
                                    </th>
                                    <th
                                       className="
                           w-1/3
                           min-w-[160px]
                           text-lg
                           font-semibold
                           text-white
                           py-4
                           lg:py-7
                           px-3
                           lg:px-4
                           "
                                    >
                                       Status
                                    </th>
                                    <th
                                       className="
                           w-1/3
                           min-w-[160px]
                           text-lg
                           font-semibold
                           text-white
                           py-4
                           lg:py-7
                           px-3
                           lg:px-4
                           "
                                    >
                                       Action
                                    </th>




                                 </tr>
                              </thead>
                              <tbody>
                                 {orders.length > 0 && orders.map((e, index) =>
                                    <tr key={index}>
                                       <td
                                          className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2

                           border-b border-l border-[#E8E8E8]
                           "
                                       >
                                          {e.name}
                                       </td>
                                       <td
                                          className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2

                           border-b border-l border-[#E8E8E8]
                           "
                                       >
                                          {e.quantity}
                                       </td>
                                       <td
                                          className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2

                           border-b border-l border-[#E8E8E8]
                           "
                                       >
                                          {e.done ? "done" : "not done"}
                                       </td>
                                       <td
                                          className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2

                           border-b border-l border-[#E8E8E8]
                           "
                                       >
                                          <Button onClick={() => { doneorder(index) }}>Mark as done</Button>
                                       </td>

                                    </tr>
                                 )}



                              </tbody>
                           </table>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </div>

      </div>
   )
}

export default OrdersPage