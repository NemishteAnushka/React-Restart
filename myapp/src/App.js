import React from "react";
import SetStateAsync from "./components/setStateAsync/SetStateAsync";
// import RemoveRedundantState from "./components/moreAboutStates/RemoveRedundantState";
// import ExampleUseRefForm from "./components/useRef/ExampleUseRefForm";
// import ExampleUseRef from "./components/useRef/ExampleUseRef";
// import MultipleInputs from "./components/form/MultipleInputs";
// import Radio from "./components/form/Radio";
// import TodoList from "./components/todolist/TodoList";
// import UsestateExample from "./components/useState/Example/UsestateExample";
// import Form from "./components/form/Form";
// import StateExampleObject from "./components/useState/StateExampleObject";
// import StateExampleArray from "./components/useState/StateExampleArray";
// import Counter from "./components/useState/Counter";
// import UseState from "./components/useState/UseState";
// import Events from "./components/events/Events";
// import RenderList from "./components/listRender/RenderList";
// import ChildrenProps from "./components/props/ChildrenProps";
// import Props from "./components/props/Props";
// import HelloWorld from "./components/HelloWorld";
// import Greetings from "./components/Greetings";
// const users = [
//   { userId: 1, firstName: "Anushka", lastName: "Nemishte" },
//   { userId: 2, firstName: "Anuja", lastName: "Nemishte" },
//   { userId: 3, firstName: "Neha", lastName: "Kulkarni" },
//   { userId: 4, firstName: "Prajkata", lastName: "Patil" },
// ];
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
      {/* {users.map((user) => (
        <RenderList {...user} key={user.userId} />
      ))} */}

      {/* <Events /> */}

      {/* <UseState/> */}

      {/* <Counter/> */}

      {/* <StateExampleArray/> */}

      {/* <StateExampleObject/> */}

      {/* <UsestateExample/> */}

      {/* <Form/> */}

      {/* <TodoList/> */}

      {/* <Radio/> */}

      {/* <MultipleInputs/> */}

      {/* <ExampleUseRef /> */}

      {/* <ExampleUseRefForm /> */}

      {/* <RemoveRedundantState /> */}

      <SetStateAsync/>
    </>
  );
}

export default App;
