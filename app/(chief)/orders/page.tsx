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
   

const OrdersPage = () => {
    const {orders, doneorder} = useorder();
  return (
    <div className='h-full  w-full'>
        <h1 className='w-full font-semibold text-2xl text-center'>Orders Page</h1>
        <div className='flex flex-col '>
        
        <Table >
      <TableCaption>Pending Orders</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="">Name</TableHead>
          <TableHead>Quantity</TableHead>

          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{order.name}</TableCell>
            <TableCell>{order.quantity}</TableCell>
            
            <TableCell >{!order.done ? "not done" : "done"}</TableCell>
            <Button onClick= {()=>doneorder(index)}>Mark Done</Button>
          </TableRow>
        ))}
      </TableBody>
    </Table>
        </div>

    </div>
  )
}

export default OrdersPage