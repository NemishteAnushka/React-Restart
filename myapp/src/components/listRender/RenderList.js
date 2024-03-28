import React from "react";

function RenderList({ firstName, lastName }) {
  return (
    <div>
      <h1>
        {firstName} {lastName}
      </h1>
    </div>
  );
}

export default RenderList;
