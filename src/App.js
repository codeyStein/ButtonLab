import React from "react"

function App() {


  const [buttonData, setButtonData] = React.useState(
    {
      color: "",
      fontSize: "",
      content: "",
      fill: "",
      width: "",
      height: "",
      borderRadius: "",
      borderColor: "",
      borderWidth: ""
    }
  )

  function buttonHandler(input) {
    setButtonData(prevData => {
      return {
        ...prevData,
        [input.target.name]: input.target.value
      }
    })
  }

  function copyCode() {

    navigator.clipboard.writeText(`
      /* ${buttonData.content} */
      ${buttonData.color==="" ? "" : `color: ${buttonData.color}`} 
      ${buttonData.fontSize==="" ? "" : `font-size: ${buttonData.fontSize}px`} 
      ${buttonData.fill==="" ? "" : `background-color: ${buttonData.fill}`} 
      ${buttonData.width==="" ? "" : `width: ${buttonData.width}px`} 
      ${buttonData.height==="" ? "" : `height: ${buttonData.height}px`} 
      ${buttonData.borderRadius==="" ? "" : `border-radius: ${buttonData.borderRadius}px
      `} 
      ${buttonData.borderColor==="" ? "" : `border-color: ${buttonData.borderColor}`} 
      ${buttonData.borderWidth==="" ? "" : `border-width: ${buttonData.borderWidth}px`} 
    `)
  }

  function favourite() {
    console.log(`Favourited ${buttonData.content}`)
  }


  return (
    <div className="App">
    <img src="./logo.svg" alt="buttonLabs logo"/>

    <div className="preview">
      <div className="button" style={{
        color: `${buttonData.color==="" ? "#fff" : buttonData.color}`,
        fontSize: `${buttonData.fontSize==="" ? "50" : buttonData.fontSize}px`,
        backgroundColor : `${buttonData.fill==="" ? "#000" : buttonData.fill}`,
        width: `${buttonData.width==="" ? "480" : buttonData.width}px`,
        height: `${buttonData.height==="" ? "160" : buttonData.height}px`,
        border: `${buttonData.borderWidth==="" ? "7" : buttonData.borderWidth}px solid ${buttonData.borderColor==="" ? "#D7D7D7" : buttonData.borderColor}`,
        borderRadius: `${buttonData.borderRadius==="" ? "20" : buttonData.borderRadius}px`,
      }}>
        <p style={{textAlign: "center"}}>
          {buttonData.content==="" ? "Button" : buttonData.content}
        </p>
      </div>
    </div>


<div className="editor">
<div className="inputs">
        <h1>Content</h1>
        <input value={buttonData.content} name="content" type="text" onChange={buttonHandler} placeholder="Content"/>

        <h1>Main</h1>
        <input value={buttonData.color} name="color" type="text" onChange={buttonHandler} placeholder="Color"/>
        <input value={buttonData.fill} name="fill" type="text" onChange={buttonHandler} placeholder="Fill Color"/>
        <input value={buttonData.fontSize} name="fontSize" type="number" onChange={buttonHandler} placeholder="Font Size"/>

        <div>
        <input value={buttonData.width} name="width" type="number" onChange={buttonHandler} placeholder="Width"/>
        <input value={buttonData.height} name="height" type="number" onChange={buttonHandler} placeholder="Height"/>
        </div>

        <h1>Border</h1>
        <input value={buttonData.borderColor} name="borderColor" type="text" onChange={buttonHandler} placeholder="Border Color"/>
        <input value={buttonData.borderWidth} name="borderWidth" type="number" onChange={buttonHandler} placeholder="Border Width"/>
        <input value={buttonData.borderRadius} name="borderRadius" type="number" onChange={buttonHandler} placeholder="Border Radius"/>

      <br />
        <div>
          <button onClick={copyCode}>Copy CSS</button>
          <button onClick={favourite}>Favourite</button>
        </div>
        
      </div>

</div>

    </div>
  );
}

export default App;
