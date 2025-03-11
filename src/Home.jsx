import { useState } from "react";
import Leftnav from "./Components/Leftnav";
import RightScreen from "./Components/Rightscreen";
import Dialogbox from "./Components/Dialogbox";
import {My_context_provider } from "./Context/My_context";
export default function Home() {
  let [add, setAdd]= useState(false);
  return (
    <My_context_provider>
    <div
    onClick={(e)=>{
      setAdd(false);
      
    }}
      style={{
        filter: "",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        boxSizing: "border-box",
      }}
    >
      <Leftnav add={add} setAdd={setAdd} />
      <RightScreen add={add} setAdd={setAdd} />
      {add?<Dialogbox add={add} setAdd={setAdd}/>:null}
    </div>
    </My_context_provider>
  );
}
