import "../CSS/Dialog.css";
import Colour_div from "./Colour-div";
import { useState } from "react";
export default function Dialogbox(prop) {
  let [selected, setSelected] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
  });
  let arr = [1, 2, 3, 4, 5, 6];
  let [error, setError] = useState({
    error1: false,
    error2: false,
  });
  let [grpinfo, setGrpinfo] = useState({
    name: "",
    color: "",
  });
  let handleChange = (e) => {
    setGrpinfo({ ...grpinfo, name: e.target.value });
  };
  let handleSubmit = () => {
    if (grpinfo.name.length < 2) {
      setError({ error1: true, error2: false });
    } else if (grpinfo.color.length == 0) {
      setError({ error1: false, error2: true });
    } else {
      setError({ error1: false, error2: false });
      const a = JSON.parse(localStorage.getItem("grp-dtls") || "[]");
      if (a.length == 0) {
        a.push(grpinfo);
        localStorage.setItem("grp-dtls", JSON.stringify(a));
        setGrpinfo({
          name: "",
          color: "",
        });
        prop.setAdd(false);
      } else {
        let check = true
        a.forEach((item)=>{
          if(item.name== grpinfo.name){
            check= false
            window.alert("Group name already existes")
          }

        })
        if(check){
          a.push(grpinfo);
        localStorage.setItem("grp-dtls", JSON.stringify(a));
        setGrpinfo({
          name: "",
          color: "",
        });
        prop.setAdd(false);

        }else{
          prop.setAdd(false);

        }
        
      }
    }
  };
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      style={{ filter: prop.add ? "blur(0px)" : "blur(0px)" }}
      className="dialog"
    >
      <h1>Create New group</h1>
      <form action="">
        <div className="grp-name-input">
          <label htmlFor="group-name">Group Name</label>
          <input
            className={error.error1 ? "err" : ""}
            onChange={handleChange}
            placeholder="Enter Group Name"
            type="text"
            name="group-name"
            required
          />
        </div>
        
        <div className="color-input">
          <p>Choose Color</p>

          <div className="color-section">
            {arr.map((item) => (
              <Colour_div
                key={item}
                item={item}
                grpinfo={grpinfo}
                setGrpinfo={setGrpinfo}
                selected={selected}
                setSelected={setSelected}
                bcg={`color-box${item}`}
              />
            ))}
          </div>
        </div>
      </form>
      <button onClick={handleSubmit} className="btn-submit">
        Create
      </button>
      {error.error1 ? (
          <p className="grp-err-msg">
            Group name should be of atleat two letters
          </p>
        ) : null}
        {error.error2 ? (
          <p className="grp-err-msg2">Please select a color</p>
        ) : null}
    </div>
  );
}
