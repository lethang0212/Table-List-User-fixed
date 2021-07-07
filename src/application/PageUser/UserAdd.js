import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Add, Edit } from "../../store/action";

export function UserAdd() {
  const dispatch = useDispatch();

  const setedEdit = useSelector((state) => state.Check.check);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(Add(email, name));
  };

  const handleEditToAdd = () => {
    dispatch(Edit(false));
  };

  return (
    <div>
      <h2>Add User</h2>
      <form>
        <div className="form-group">
          <label>
            <b>Email</b>
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={handleChangeEmail}
          />
        </div>
        <div className="form-group">
          <label>
            <b>Name</b>
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter name"
            onChange={handleChangeName}
          />
        </div>
        <button
          type="button"
          className={setedEdit ? "btn btn-primary" : "btn btn-success"}
          onClick={() => {
            handleSubmit();
            handleEditToAdd();
          }}
        >
          {setedEdit ? "Edit" : "Add"}
        </button>
      </form>
    </div>
  );
}
