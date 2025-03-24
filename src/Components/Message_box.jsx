import { IoSend } from "react-icons/io5";
import "../CSS/message-box.css";
import "../CSS/Leftnav.css";
import Messagechips from "./Messagechips";
import { useContext, useEffect, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { AiTwotoneDelete } from "react-icons/ai";
import { My_context } from "../Context/My_context";
export default function Message_box(prop) {
  console.log("render")
  useEffect(()=>{
    setDone(true)

  },[])
  let {messageInfo, setMessageInfo}= useContext(My_context)
  let [typed, setTyped] = useState("");
  let [disabled, setDisabled] = useState(false);
  let [done, setDone] = useState(false);
  let message = "";
  let name = prop.messageInfo.name.split(/[\s_\-$]+/);
  let prof_name = "";
  if (name.length < 2) {
    prof_name = `${name[0][0].toUpperCase()}${name[0][1].toUpperCase()}`;
  } else {
    prof_name = `${name[0][0].toUpperCase()}${name[1][0].toUpperCase()}`;
  }
  useEffect(()=>{
    if(typed==""){
      setDisabled(true)
    }else{
      setDisabled(false)
    }
    
  },[typed])

  let handleChange = (e) => {
    message = e.target.value;
    setTyped(e.target.value);
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    if (
      JSON.parse(localStorage.getItem("msgs"))[prop.messageInfo.name] !=
        undefined &&
      typed != ""
    ) {
      let date = new Date();
      let refine = JSON.parse(localStorage.getItem("msgs"));
      console.log(refine);
      refine[prop.messageInfo.name].push({
        date: date.toLocaleDateString("en-GB"),
        time: date.toLocaleTimeString("en-GB"),
        message: typed,
      });
      localStorage.setItem("msgs", JSON.stringify(refine));
    } else if (typed != "") {
      let date = new Date();
      console.log(date.toLocaleDateString("en-GB"));
      console.log(date.toLocaleTimeString("en-GB"));
      let temp = JSON.parse(localStorage.getItem("msgs"));

      localStorage.setItem(
        "msgs",
        JSON.stringify({
          ...temp,
          [prop.messageInfo.name]: [
            {
              date: date.toLocaleDateString("en-GB"),
              time: date.toLocaleTimeString("en-GB"),
              message: typed,
            },
          ],
        })
      );
    }
    setTyped("");
    setDone(true);
  };
  return (
    <div className="message-box">
      <div style={{ backgroundColor: "#001F8B" }} className="header">
        <div
          style={{ backgroundColor: prop.messageInfo.color }}
          className="profile-name-div"
        >
          <h1 style={{ color: "white", fontSize: "20px" }}>{prof_name}</h1>
        </div>
        <h1 style={{ fontSize: "20px", color: "white" }}>
          {prop.messageInfo.name}
        </h1>
        <div
        onClick={()=>{
          setMessageInfo(null)
          
        }}
        className="del-style"
          style={{
            fontSize: "20px",
            position: "absolute",
            right: "10px",
          }}
        >
          <AiTwotoneDelete />
        </div>
      </div>
      <div className="notes-section">
        {JSON.parse(localStorage.getItem("msgs"))[prop.messageInfo.name] !=
          undefined && done
          ? JSON.parse(localStorage.getItem("msgs"))[prop.messageInfo.name].map(
              (item, index) => {
                return <Messagechips key={index} message={item} />;
              }
            )
          : null}
      </div>
      <div className="footer" >
        <form onSubmit={handleSubmit} action="">
          <textarea
            value={typed}
            onChange={handleChange}
            placeholder="Enter Your Text Here..."
            className="text-area"
            name=""
            id=""
          ></textarea>
          <button className={disabled?"submit-button disabled":"submit-button"} type="submit">
            <IoSend />
          </button>
        </form>
      </div>
    </div>
  );
}
