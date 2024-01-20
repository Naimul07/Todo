import { useState } from "react"

function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    
    setTodos((currentTodos)=>{
      return [
        ...currentTodos, { id: crypto.randomUUID(), title: newItem, completed: false },
      ]
    });
    setNewItem("");
  }
  

  function toggletodo(id,completed) {
    setTodos((currentTodos)=>{
      return currentTodos.map(todo=>{
        if(todo.id === id)
        {
          return {...todo, completed}
        }
      })
    })
  }

  function deleteButton(id)
  {
    setTodos(currentTodos=>{
      return currentTodos.filter(todo=> todo.id !== id)
    })
  }

  console.log(todos);

  return (
    <div className="container d-flex flex-column align-items-center">
      <div className="searchbar">
        <h1 className="text-center mb-4">Task</h1>
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-auto">
            <input type="search" className="form-control" value={newItem} onChange={e => setNewItem(e.target.value)} />
          </div>
          <div className="col-auto">
            <button className="btn btn-info">Add</button>
          </div>
        </form>
      </div>

      <div className="tasklist mt-4">
        <h1>Tasklist</h1>
        {todos.length === 0 && "No task"}
        {todos.map(todo => {
          if(todo.completed===false)
          return (
            
            <div className="row mb-2" key={todo.id}>
              <div className="form-check col-auto">
                <input className="form-check-input" type="checkbox" value="{todo.completed}" id="" onClick={e => toggletodo(todo.id, e.target.checked)} />
                <label className="form-check-label">
                 {todo.title}
                </label>
              </div>
              <button className="btn btn-outline-danger btn-sm col-auto" onClick={()=> deleteButton(todo.id) }>Delete</button>
            </div>

          )
        })}
      </div>



      <div className="tasklist mt-4">
        <h1>Completed Tasklist</h1>
        {/* {todos.length === 0 && "No task"} */}
        {todos.map(todo =>{
          if(todo.completed===true)
          return (
            
            <div className="row mb-2" key={todo.id}>
              <div className="form-check col-auto">
                <input className="form-check-input" type="checkbox" value={todo.completed} id="" onClick={e => toggletodo(todo.id, e.target.checked)} defaultChecked={true}/>
                <label className="form-check-label">
                 {todo.title}
                </label>
              </div>
              <button className="btn btn-outline-danger btn-sm col-auto" onClick={()=> deleteButton(todo.id) }>Delete</button>
            </div>

          )
        })}
      </div>
    </div>

  )
}

export default App
