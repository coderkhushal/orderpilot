"use client"
import { Children, createContext, useContext, useState } from "react";

type order={
    name: string, 
    quantity: number
    done: boolean
}
interface Ordercontexttype{
    orders: order[],
    addOrder: (order: order)=> void,
    removeOrder: (order: order)=> void
    doneorder: (index: number)=> void


}
export const Ordercontext= createContext<Ordercontexttype>({
    orders: [],
    addOrder:()=>{},
    removeOrder:()=>{},
    doneorder:()=>{}
    

})




const Orderstate= ({children}:{children: React.ReactNode})=>{
    const [orders,setOrders]=useState<order[]>([{
        name: "Pizza",
        quantity: 2,
        done: false

    },
    {
        name: "Burger",
        quantity: 1,
        done: false
    },
    {
        name: "Pasta",
        quantity: 3,
        done: false
    },
    {
        name: "Noodles",
        quantity: 1,
        done: false
    },
    {
        name: "French Fries",
        quantity: 2,
        done: false
    },
    {
        name: "Sandwich",
        quantity: 1,
        done: false
    },
]);
    const addOrder=(order: order)=>{
        setOrders([...orders,order])
    }
    const removeOrder=(order: order)=>{
        setOrders(orders.filter((o: order)=>o!==order))
    }
    const doneorder=(index: number)=>{
        let temp= orders
        temp[index].done = true;
        setOrders(temp)
    
    }
    return(
        <Ordercontext.Provider value={{orders, addOrder,doneorder, removeOrder}}>
            {children}
        </Ordercontext.Provider>
    )
}
export default Orderstate;

export const useorder = ()=> useContext(Ordercontext)