import React from 'react';
import { connect } from "react-redux";

function SortUsers(props) {
  return (
      <div>
        Sort Users On:
        <select onChange={
          (e)=>{
            if(props.set){
              props.set(e.target.value);
            }
          }
        }>
          <option value="first_name">First Name</option>
          <option value="last_name">Last Name</option>
        </select>
      </div>
  );
}
export default SortUsers;
