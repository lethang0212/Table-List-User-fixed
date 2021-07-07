import React from "react";
import { useSelector } from "react-redux";
import { UserItem } from "./UserItem";

export function UserList() {
  const userLists = useSelector((state) => state.User);
  console.log(userLists);
  return (
    <div>
      <h2>Table List</h2>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Email</th>
            <th scope="col">Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {userLists.map((user) => (
            <tr key={user.id}>
              <th>{user.id}</th>
              <th>{user.email}</th>
              <th>{user.name}</th>
              <th>
                {" "}
                <UserItem id={user.id} />{" "}
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
