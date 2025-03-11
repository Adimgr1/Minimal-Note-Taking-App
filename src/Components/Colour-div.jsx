import { useState } from "react";
import "../CSS/Dialog.css";

export default function Colour_div(prop) {
  let handleClick = (e, item) => {
    prop.setGrpinfo({
      ...prop.grpinfo,
      color: window.getComputedStyle(e.target).backgroundColor,
    });
   prop.setSelected({1:false,2:false,3:false,4:false,5:false,6:false})
    prop.setSelected((prev)=>{
     return{...prev,[item]:true}
    })
    console.log(prop.selected)
  };
  return (
    <div
      onClick={(e)=>{
          handleClick(e, prop.item);
      }}
      className={`color-box ${prop.bcg} ${prop.selected[prop.item] ? "selected" : ""}`}
    ></div>
  );
}
