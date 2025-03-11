import "../CSS/messagechips.css";
export default function Messagechips(prop) {
  console.log(prop.message);
  return (
    <div
      className="message-chips"
      style={{
        display: "flex",
        flexDirection: "column",
        wordWrap: "break-word",
        overflow: "hidden",
      }}
    >
      <p>{prop.message.message}</p>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "30px",
          marginTop: "10px",
        }}
      >
        <div
        // className="del-style"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            position: "absolute",
            right: "10px",
            bottom: "10px",
            gap: "10px",
          }}
        >
          <p>{prop.message.date}</p>
          <div
            style={{
              width: "8px",
              height: "8px",
              backgroundColor: "black",
              borderRadius: "50%",
            }}
          ></div>
          <p>{prop.message.time}</p>
        </div>
      </div>
    </div>
  );
}
