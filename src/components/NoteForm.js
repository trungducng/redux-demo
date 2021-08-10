import React, { useRef } from "react";
import { connect } from "react-redux";
import { addItem, toggleStatus } from "../action";

const NoteForm = (props) => {
  const txtRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch } = props;
    dispatch(addItem(txtRef.current.value));
    showAddForm();
  };

  const showAddForm = () => {
    const { dispatch } = props;
    dispatch(toggleStatus());
  };

  let compoenentToRender = "";
  if (props.status === true) {
    compoenentToRender = (
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter a note" ref={txtRef} />
        <button>ADD</button>
      </form>
    );
  } else {
    compoenentToRender = <button onClick={() => showAddForm()}>+</button>;
  }

  return compoenentToRender;
};

export default connect((state) => {
  return { status: state.status };
})(NoteForm);
