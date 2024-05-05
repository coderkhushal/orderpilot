
"use client"
import React, { useState } from 'react'
import { Card, Typography } from "@material-tailwind/react";
const TABLE_HEAD = ["Name", "Job", "Employed", ""];
 
const TABLE_ROWS = [
  {
    name: "John Michael",
    job: "Manager",
    date: "23/04/18",
  },
  {
    name: "Alexa Liras",
    job: "Developer",
    date: "23/04/18",
  },
  {
    name: "Laurent Perrier",
    job: "Executive",
    date: "19/09/17",
  },
  {
    name: "Michael Levi",
    job: "Developer",
    date: "24/12/08",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
];
import {
  CopilotKit,
  useCopilotAction,
  useCopilotReadable,
} from "@copilotkit/react-core";
import { CopilotPopup } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";
const MainPage = () => {
  const [Todos, setTodos] = useState<{ title: string, description: string }[]>([{title:"demo", description:"demo description"}]);
  const [title,settitle] = useState<string>("");
  const [description,setdescription] = useState<string>("");

  useCopilotReadable({
    description: "The user's todo list.",
    value: Todos,
  });
  useCopilotAction({
    name: "update todo list",
    description: "Add a new todo to the list",
    parameters: [
      {
        name: 'title',
        description: title,
      },
      {
        name: 'description',
        description: description
      }
    ],
    handler: (item) => {
      setTodos([...Todos, item])

    },
    render: "Updating the todo list...",
  })
  const addTodo= async()=>{
    if(title=="" || description=="") return;
    setTodos([...Todos, {title,description}])
    settitle("")
    setdescription("")
  }
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };
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