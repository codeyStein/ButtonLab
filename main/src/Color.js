import React from "react"

function App() {

  const [data, setData] = React.useState(null)

  function getData(val) {
    setData(val.target.value)
    console.log(data)
  }

  return (
    <div className="App">
      <h1>Color: {data}</h1>
      <input type="text" onChange={getData}/>
    </div>
  );
}

export default App;
