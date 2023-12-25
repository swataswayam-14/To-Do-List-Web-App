import React from "react";
import Header from "./Header";
import TodoItems from "./TodoItems";
import "./App.css"

function App(){
  var [inputText, setInputText] = React.useState()
  const [items , setItems] = React.useState([])
  
  function handelChange(event){
    inputText = event.target.value
    setInputText(inputText)
  }

  function addItem(){
    setItems((prevItems) =>{
        return [...prevItems, inputText]
    })
    setInputText("")
  }
  function deleteItem(id){
    setItems((prevItems) =>{
      return prevItems.filter(
        (item, index) =>{
          return index !== id
        }
      )
      
    })
  }


  return<div className="container">
    <Header/>
    <div className="todoInput">
      <input className="input-task" onChange = {handelChange} type="text" value={inputText}></input>
      <button className="button-add"onClick={addItem}>
        <span className="add">Add</span>
      </button>
      <ul>
        {items.map((todoItem, index) => <TodoItems key={index} id={index} text={todoItem}
          onChecked = {deleteItem}//passing a function to child ToDo Item
        />)}
      </ul>
    </div>
  </div>
}


export default App