import { useState } from "react"

function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([
      ...todos, { id: crypto.randomUUID(), title: newItem, completed: false },
    ]);
    setNewItem("");
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
            <button type="button" className="btn btn-info">Add</button>
          </div>
        </form>
      </div>

      <div className="tasklist mt-4">
        <h1>Tasklist</h1>

        {todos.map(todo => {
          return (
            <div className="row mb-2" key={todo.id}>
              <div className="form-check col-auto">
                <input className="form-check-input" type="checkbox" value="" id="" />
                <label className="form-check-label">
                 {todo.title}
                </label>
              </div>
              <button className="btn btn-outline-danger btn-sm col-auto">Delete</button>
            </div>

          )
        })}
      </div>
    </div>

  )
}

export default App
