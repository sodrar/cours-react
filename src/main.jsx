import React from "react"
import ReactDOM from "react-dom/client"

const root = ReactDOM.createRoot(document.querySelector("#root"))

root.render(<App />)

function App() {
  let eleves = [
    {
      name: "Sofian",
      grade: "4e"
    },
    {
      name: "So",
      grade: "3e"
    },
    {
      name: "fian",
      grade: "2e"
    },
    {
      name: "Soan",
      grade: "1e"
    }
  ]

  return <div>
    {eleves.map((eleve,index) => {
      return <div key={index}>
        <h3>{eleve.name}</h3>
        <p>{eleve.grade}</p>
      </div>
    })}
  </div>
}







