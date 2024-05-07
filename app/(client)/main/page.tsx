"use client"


import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { date, z } from "zod"

import {
   Form,
   FormControl,
   FormDescription,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from "@/components/ui/form"
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select"



import { Button } from "@/components/ui/button"
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogFooter,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from "@/components/ui/dialog"

import React, { useState } from 'react'

import {
   CopilotKit,
   useCopilotAction,
   useCopilotReadable,
} from "@copilotkit/react-core";


import { CopilotPopup } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";

import { useorder } from '@/app/context/Ordercontext';
import Link from 'next/link';
import { Input } from "postcss"




const FormSchema = z.object({
   food: z
      .string({
         required_error: "Please select an food item to order.",
      }),
   quantity: z.string({
      required_error: "Please enter the quantity of the food item.",
   }),


})
const MainPage = () => {
   const { orders, addOrder, menu } = useorder()
   const [name, setname] = useState<string>("");
   const [quantity, setquantity] = useState<string>("0");

   const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
   })

   function onSubmit() {
      console.log({name, quantity})
      if(quantity==0){
         return;
      }
      addOrder({ name:name,  quantity: quantity, done: false })
   }
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
      <div className='bg-gray-300'>
         <div className='flex relative '>

            <h1 className='w-full font-semibold text-center text-3xl'>Welcome to Order Pilot</h1>
            <button
               className=" absolute right-0 top-0 middle none center mr-3 rounded-lg bg-pink-500 py-3 px-6 font-sans  font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none text-3xl"
               data-ripple-light="true"
            >
               <Link href="/orders"> Go to Orders Page</Link>
            </button>

         </div>
         <br /> <br /> <br />
         <h2 className='w-full font-semibold text-center text-2xl'>Menu</h2>
         <div className="w-full flex items-center justify-center">
            <br /> <br />

            <Dialog>

               <DialogTrigger asChild>
                  <Button variant="outline" className="border border-double border-black text-black  text-2xl ">Add order Manually</Button>
               </DialogTrigger>
               <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                     <DialogTitle >Add Order</DialogTitle>
                     <DialogDescription>
                        Enter the dish you want to eat
                     </DialogDescription>
                  </DialogHeader>
                  <Select onValueChange={(e)=>setname(e) 
                  } defaultValue={name}>

                     <SelectTrigger>
                        <SelectValue placeholder="Select a food to order" />
                     </SelectTrigger>


                     <SelectContent>

                        {
                           menu.map((e, index) =>
                              <SelectItem key={index} value={e.name}>{e.name}</SelectItem>
                           )
                        }

                     </SelectContent>
                  </Select>

                  <input id="default-search" type="number" className="block w-full max-w-xs px-4 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-xl placeholder-gray-900 focus:outline-none leading-relaxed" placeholder="Enter quantity"
                  value={quantity} onChange={(e)=>setquantity(e.target.value)} />

                        <Button onClick={onSubmit}>Place order</Button>
               </DialogContent>
            </Dialog>

         </div>
         <section className=" py-20 lg:py-[120px]">
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
                              {menu.map((e, index) =>

                                 <tr key={index}>
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
                                       {e.name}
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
                                       ${e.price}
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
   )
}

export default MainPage