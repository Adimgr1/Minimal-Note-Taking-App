import "../CSS/leftnav-chips.css";
import { useContext } from "react";
import {My_context} from "../Context/My_context";
export default function Leftnav_chips(prop) {
  let {setMessageInfo}= useContext(My_context);
  let name = prop.item.name.split(/[\s_\-$]+/);
  let prof_name = "";
  if (name.length < 2) {
    prof_name = `${name[0][0].toUpperCase()}${name[0][1].toUpperCase()}`;
  } else {
    prof_name = `${name[0][0].toUpperCase()}${name[1][0].toUpperCase()}`;
  }
  return (
    <div
    onClick={()=>{
      setMessageInfo({name:prop.item.name, 
        color:prop.item.color
      });

    }}
     className="chips">
      <div
        style={{ backgroundColor: prop.item.color }}
        className="profile-name-div"
      >
        <h1 style={{ color: "white", fontSize: "20px" }}>{prof_name}</h1>
      </div>
      <h1 style={{fontSize:"20px"}}>{prop.item.name}</h1>
    </div>
  );
}
