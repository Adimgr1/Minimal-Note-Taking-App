import Nothing from "./Nothing";
import Dialogbox from "./Dialogbox";
import Message_box from "./Message_box";
import { useContext } from "react";
import "../CSS/Right.css";
import{My_context} from "../Context/My_context";
export default function Rightscreen(prop) {
  let {messageInfo}= useContext(My_context);
  return (
    <div
      className="right-div"
      style={{
        width: "80%",
        height: "100%",
        backgroundColor: "#DAE5F5",
        filter: prop.add ? "blur(5px)" : "blur(0px)",
      }}
    >
      {
        messageInfo?<Message_box messageInfo={messageInfo}/>:<Nothing />
      }

    </div>
  );
}
