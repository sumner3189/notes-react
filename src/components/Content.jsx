import React from "react";
import CheckListItem from "./CheckListItem";
import notes from "../data/notes";
function Content() {
  const checkListItems = notes.map((item) => <CheckListItem item={item}/>);
  return <div>{checkListItems}</div>;
}

export default Content;
