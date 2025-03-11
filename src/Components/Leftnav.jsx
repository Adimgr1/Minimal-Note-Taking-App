import "../CSS/Leftnav.css";
import Dialogbox from "./Dialogbox";
import Leftnav_chips from "./leftnav-chips";
import { use, useContext, useEffect, useState } from "react";
import { My_context } from "../Context/My_context";
import Message_box from "./Message_box";
export default function Leftnav(prop) {
  let { messageInfo, setMessageInfo } = useContext(My_context);
  let [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    let handleREsize = () => {
      setWidth(window.innerWidth);
      console.log(width);
    };
    window.addEventListener("resize", handleREsize);
    return () => {
      window.removeEventListener("resize", handleREsize);
    };
  }, []);
  let handleClick = (e) => {
    e.stopPropagation();
    prop.setAdd(!prop.add);
  };

  return (
    <>
      {width <= 767 ? (
        <>
          {messageInfo ? (
            <div className="message-box-div">
              <Message_box messageInfo={messageInfo} />
            </div>
          ) : (
            <div
              className="textsize"
              style={{ filter: prop.add ? "blur(5px)" : "blur(0px)" }}
            >
              <h1>Pocket Notes</h1>
              <div onClick={handleClick} className="button-left">
                +
              </div>

              <div
                style={{
                  width: "90%",
                  height: "80%",
                  marginTop: "50px",
                  overflowY: "scroll",
                }}
              >
                {localStorage.getItem("grp-dtls")
                  ? JSON.parse(localStorage.getItem("grp-dtls")).map(
                      (item, index) => <Leftnav_chips item={item} key={index} />
                    )
                  : null}
              </div>
            </div>
          )}
        </>
      ) : (
        <div
          className="textsize"
          style={{ filter: prop.add ? "blur(5px)" : "blur(0px)" }}
        >
          <h1>Pocket Notes</h1>
          <div onClick={handleClick} className="button-left">
            +
          </div>

          <div
            style={{
              width: "90%",
              height: "80%",
              marginTop: "50px",
              overflowY: "scroll",
            }}
          >
            {localStorage.getItem("grp-dtls")
              ? JSON.parse(localStorage.getItem("grp-dtls")).map(
                  (item, index) => <Leftnav_chips item={item} key={index} />
                )
              : null}
          </div>
        </div>
      )}
    </>
  );
}
