import GrandChildComponent from "./GrandChildComponent";

const ChildComponent = (props) => {
  return (
    <div
      style={{
        border: `10px solid #0000`,
        marginLeft: "50px",
        padding: "10px",
        fontSize: "30px",
        width: "300px"
      }}
    >
      <GrandChildComponent color={props.color} />
    </div>
  );
};

export default ChildComponent;
