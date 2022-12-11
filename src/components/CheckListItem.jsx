import React from "react";
import "./CheckListItem.css";
function CheckListItem(props) {
  const { id, text, completed } = props.item;
  console.log(props);

  const Styles = { header: { color: "white" }, p: { color: "pink" } };
  return (
    <div className="checkListItem" style={Styles.header}>
      <p>{text}</p>

      <input id={id} checked={completed} type="checkbox" />
    </div>
  );
}

export default CheckListItem;
