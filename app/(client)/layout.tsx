"use client";
import { CopilotKit ,useCopilotAction,useCopilotReadable} from "@copilotkit/react-core";
import { CopilotSidebar , CopilotPopup} from "@copilotkit/react-ui";


import "@copilotkit/react-ui/styles.css";
import React from "react";



export default function RootLayout({children}:{children: React.ReactNode}) {

  return (
    <CopilotKit url="/api/copilotkit">
        <CopilotPopup
          instructions={
            "Help the user to give orders. If the user provides a order name and quantity, " +
            "break it down into a few specific tasks and add them to the list"
          }
          defaultOpen={true}
          labels={{
            title: "OrderPilot",
            initial: "Hi you! 👋What do you want to order.",
          }}
          clickOutsideToClose={true}
        />
        {children}
      
    </CopilotKit>
  );
}
