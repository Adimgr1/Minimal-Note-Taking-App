import { createContext, useState } from "react";
let My_context = createContext({});
function My_context_provider({children}) {
     let [messageInfo, setMessageInfo] = useState(null);

     return (
          <My_context.Provider value={{messageInfo, setMessageInfo}}>
               {children}
          </My_context.Provider>
     )
     

}
export {My_context, My_context_provider};