import React from "react";
import DefaultProps from "./DefaultProps";

function Props({ firstName, lastName, age, objectProps,arrayProps }) {
  //parameter destructuring
  // const firstName = props.firstName
  // const lastName = props.lastName
  // const {firstName,lastName}=props
    const [user1, user2] = arrayProps;
  return (
    <div>
      {/* <h1>Hii {props.firstName} {props.lastName}</h1> */}
      <h1>
        {firstName} {lastName}
      </h1>
      <h1>{age}</h1>
      <h1>{objectProps.hobby}</h1>
      <h1>{user1}</h1>
      <h1>{user2}</h1>
      {/* we can pass props to child like {...props} */}
      <DefaultProps/> 
    </div>
  );
}

export default Props;
