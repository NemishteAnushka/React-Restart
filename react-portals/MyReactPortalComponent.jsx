import React from "react";
import { createPortal } from "react-dom";

function MyReactPortalComponent() {
  return createPortal(
    <>
      <h1>My React Portal Component</h1>
      <p>
        React Portals are a powerful feature in React that allows you to render
        components outside the current React tree hierarchy.
      </p>
      <p>
        With portals, you can easily render elements into different parts of the
        DOM, such as modals, tooltips, or any other component that needs to
        break out of the component's container.
      </p>
    </>,
    document.getElementById("newRoot")
  );
}

export default MyReactPortalComponent;
