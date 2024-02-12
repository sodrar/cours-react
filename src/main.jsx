import React from "react"
import ReactDOM from "react-dom/client"

const root = ReactDOM.createRoot(document.querySelector("#root"))

root.render(<App />)

function App() {

  const name = "Sofian"
  const birth = new Date("07-24-1999")
  const age = 2024 - birth.getFullYear() - 1

  const myAnimals = ["chat1", "chat2", "chat3", "chat4"]
  const animalsElements = myAnimals.map(animal => <li>{animal}</li>)

  const maxNotes = [20, 10, 11, 7, 13]

  function moyenne(notes) {
    let total = 0
    notes.forEach(note => total += note)
    return total / notes.length
  }

  return <div>
    <h1>Hello</h1>
    <p>Mon nom est {name} et j'ai {age} ans</p>
    <p>Mes animaux sont :</p>
    <ul>
      {myAnimals.map((animal, index) => <li key={index} >{animal}</li>)}
    </ul>
    <div>
      <h2>Exercice 1 : La moyenne de maxime</h2>
      <h3>Notes : </h3>
      <ul>
        {maxNotes.map((note, index) => <li key={index}>{note}</li>)}
      </ul>
      <p>Moyenne générale : {moyenne(maxNotes)}</p>
    </div>

  </div>
}







