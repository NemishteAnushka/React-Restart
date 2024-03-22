const rootElement = document.getElementById("root");
//type,props,childeren
// const el = React.createElement("h1",null,"Hello World");

function App(){
    return <h1>Hello World</h1>
}

ReactDOM.createRoot(rootElement).render(<App/>)