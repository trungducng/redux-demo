import React from "react";
import { connect } from "react-redux";
import { removeItem } from "../action";

const Note = (props) => {
  const { dispatch } = props.dispatch;

  const removeNote = () => {
    dispatch(removeItem(props.item));
  };

  return (
    <div>
      <h4>{props.children}</h4>
      <button onClick={() => removeNote()}>Delete</button>
    </div>
  );
};

export default connect((state) => {
  return {};
})(Note);
