import React from "react";
import { useDispatch } from "react-redux";
import { Remove, Edit } from "../../store/action";

export function UserItem(props) {
  const dispatch = useDispatch();
  const { id } = props;

  const handleAddToEdit = () => {
    dispatch(Edit(true));
  };

  const handleRemove = (id) => {
    dispatch(Remove(id));
  };

  return (
    <div>
      <button
        onClick={() => {
          handleAddToEdit();
          handleRemove(id);
        }}
      >
        Edit
      </button>
      <button onClick={() => handleRemove(id)}>Remove</button>
    </div>
  );
}
