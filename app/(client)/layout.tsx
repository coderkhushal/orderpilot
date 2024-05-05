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
            "Help the user manage a todo list. If the user provides a high level goal, " +
            "break it down into a few specific tasks and add them to the list"
          }
          defaultOpen={true}
          labels={{
            title: "Todo List Copilot",
            initial: "Hi you! 👋What do you want to order.",
          }}
          clickOutsideToClose={true}
        />
        {children}
      
    </CopilotKit>
  );
}
