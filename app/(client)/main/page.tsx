
"use client"
import React, { useState } from 'react'
import { Card, Typography } from "@material-tailwind/react";

import {
  CopilotKit,
  useCopilotAction,
  useCopilotReadable,
} from "@copilotkit/react-core";
import { CopilotPopup } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";
import { useorder } from '@/app/context/Ordercontext';
const MainPage = () => {
   const {orders, addOrder} =useorder()
  const [name,setname] = useState<string>("");
  const [quantity,setquantity] = useState<string>("0");

  useCopilotReadable({
    description: "The user's order list.",
    value: orders,
  });
  useCopilotAction({
    name: "update orders list",
    description: "Add a new order to the list",
    parameters: [
      {
        name: 'name',
        description: name,
      },
      {
        name: 'quantity',
        description: quantity.toString()
      }
    ],
    handler: (item) => {
      addOrder({ name: name, quantity: quantity.toString(), done: false })

    },
    render: "Updating the todo list...",
  })

  return (
    <div>
      <h1 className='w-full font-semibold text-center text-3xl'>Welcome to Order Pilot</h1>
      <br /> <br /> <br />
      <h2 className='w-full font-semibold text-center text-2xl'>Menu</h2>
     
      <section className="bg-white py-20 lg:py-[120px]">
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
                           Price
                        </th>
                        
                     
                   
                        
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td
                           className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-[#F3F6FF]
                           border-b border-l border-[#E8E8E8]
                           "
                           >
                           curry Rice
                        </td>
                        <td
                           className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-white
                           border-b border-[#E8E8E8]
                           "
                           >
                            $10 
                        </td>


                     </tr>
                     <tr>
                        <td
                           className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-[#F3F6FF]
                           border-b border-l border-[#E8E8E8]
                           "
                           >
                           Combo Meal ( burger, fries and coke)
                        </td>
                        <td
                           className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-white
                           border-b border-[#E8E8E8]
                           "
                           >
                            $20 
                        </td>


                     </tr>
                     <tr>
                        <td
                           className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-[#F3F6FF]
                           border-b border-l border-[#E8E8E8]
                           "
                           >
                           Coffee
                        </td>
                        <td
                           className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-white
                           border-b border-[#E8E8E8]
                           "
                           >
                            $5 
                        </td>


                     </tr>
                     <tr>
                        <td
                           className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-[#F3F6FF]
                           border-b border-l border-[#E8E8E8]
                           "
                           >
                           Rajma Rice
                        </td>
                        <td
                           className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-white
                           border-b border-[#E8E8E8]
                           "
                           >
                            $5 
                        </td>


                     </tr>
                     <tr>
                        <td
                           className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-[#F3F6FF]
                           border-b border-l border-[#E8E8E8]
                           "
                           >
                           Choco Lava special
                        </td>
                        <td
                           className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-white
                           border-b border-[#E8E8E8]
                           "
                           >
                            $20 
                        </td>


                     </tr>
                     <tr>
                        <td
                           className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-[#F3F6FF]
                           border-b border-l border-[#E8E8E8]
                           "
                           >
                           Chicken Buger
                        </td>
                        <td
                           className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-white
                           border-b border-[#E8E8E8]
                           "
                           >
                            $5
                        </td>


                     </tr>

                     
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   </div>
</section>

    </div>
  )
}

export default MainPage