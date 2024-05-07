"use client"
import { Children, createContext, useContext, useState } from "react";

type order={
    name: string, 
    quantity: string
    done: boolean
}
interface Ordercontexttype{
    orders: order[],
    addOrder: (order: order)=> void,
    removeOrder: (order: order)=> void
    doneorder: (index: number)=> void
    menu: {name: string, price: number}[]


}
export const Ordercontext= createContext<Ordercontexttype>({
    orders: [],
    addOrder:()=>{},
    removeOrder:()=>{},
    doneorder:()=>{},
    menu: []
    

})




const Orderstate= ({children}:{children: React.ReactNode})=>{
    const [menu, setmenu] = useState<{name:string , price: number}[]>([
        {
            name: "pizza",
            price: 10
        },
        {
            name: "burger",
            price: 5
        },
        {
            name: "fries",
            price: 3
        },
        {
            name: "coke",
            price: 2
        },
        {
            name: "salad",
            price: 4
        },
        {
            name: "icecream",
            price: 3
        },
        {
            name: "cake",
            price: 6
        },
        {
            name: "donut",
            price: 2
        },
        {
            name: "sandwich",
            price: 5
        },
        {
            name: "hotdog",
            price: 4
        },
        {
            name: "nuggets",
            price: 5
        },
        {
            name: "pasta",
            price: 7
        },
        {
            name: "coffee",
            price: 2
        },
        {
            name: "tea",
            price: 1
        },
        {
            name: "milkshake",
            price: 4
        },
        {
            name: "smoothie",
            price: 3
        },
        {
            name: "juice",
            price: 2
        },
        {
            name: "water",
            price: 1
        },
        {
            name: "beer",
            price: 5
        },
        {
            name: "wine",
            price: 6
        },
        {
            name: "whiskey",
            price: 7
        },
        {
            name: "vodka",
            price: 6
        },
        {
            name: "rum",
            price: 5
        },
        {
            name: "gin",
            price: 4
        },
        {
            name: "tequila",
            price: 7
        },
        {
            name: "brandy",
            price: 6
        },
        {
            name: "champagne",
            price: 8
        },
        {
            name: "soda",
            price: 1
        },
        {
            name: "lemonade",
            price: 2
        },
        {
            name: "margarita",
            price: 6
        },
        {
            name: "mojito",
            price: 5
        },
        {
            name: "cosmopolitan",
            price: 7
        },
        {
            name: "martini",
            price: 6
        },
        {
            name: "mimosa",
            price: 5
        },



    ])
    const [orders,setOrders]=useState<order[]>([]);
    const addOrder=(order: order)=>{
        console.log([...orders,order])
        setOrders([...orders,order])
    }
    const removeOrder=(order: order)=>{
        setOrders(orders.filter((o: order)=>o!==order))
    }
    const doneorder=(index: number)=>{
        let temp= orders
        temp[index].done = true;
        
        setOrders((value)=>temp)
    
    }
    return(
        <Ordercontext.Provider value={{orders, addOrder ,menu,doneorder, removeOrder}}>
            {children}
        </Ordercontext.Provider>
    )
}
export default Orderstate;

export const useorder = ()=> useContext(Ordercontext)