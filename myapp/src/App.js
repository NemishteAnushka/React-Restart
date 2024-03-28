import React from "react";
import RenderList from "./components/listRender/RenderList";
// import ChildrenProps from "./components/props/ChildrenProps";
// import Props from "./components/props/Props";
// import HelloWorld from "./components/HelloWorld";
// import Greetings from "./components/Greetings";
const users = [
  { userId: 1, firstName: "Anushka", lastName: "Nemishte" },
  { userId: 2, firstName: "Anuja", lastName: "Nemishte" },
  { userId: 3, firstName: "Neha", lastName: "Kulkarni" },
  { userId: 4, firstName: "Prajkata", lastName: "Patil" },
];
function App() {
  // const arrayProps = ["fruit", "vegetable"];
  // const objectProps = { hobby: "dance" };
  return (
    <>
      {/* <HelloWorld />
      <Greetings /> */}
      {/* we can also pass array,object and numbers through props*/}
      {/* <Props
        firstName="Avinash"
        lastName="Nemishte"
        age={22}
        arrayProps={arrayProps}
        objectProps={objectProps}
      /> */}
      {/* <ChildrenProps>Hii there , How are you</ChildrenProps> */}
      {/* we use map method to render list */}

      {/* method 1
      {users.map((user) => {
        return (
          <RenderList firstName={user.firstName} lastName={user.lastName} />
        );
      })} */}
      {/* method 2 */}
      {users.map((user) => (
        <RenderList {...user} key={user.userId} />
      ))}
    </>
  );
}

export default App;
