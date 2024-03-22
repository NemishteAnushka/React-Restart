import React from 'react'
import ReactDOM from 'react-dom/client'

function HelloWorld(){
    return <h1>Hello World</h1>
}
ReactDOM.createRoot(document.getElementById('root')).render(<HelloWorld/>);
