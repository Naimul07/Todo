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
    <div className="container">
      <div className="searchbar">
        <h1>Task</h1>
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-auto">
            <input type="search" className="form-control" value={newItem} onChange={e => setNewItem(e.target.value)} />
          </div>
          <div className="col-auto">
            <button type="button" className="btn btn-info">Add</button>
          </div>
        </form>
      </div>

      <div className="tasklist">
        <h1>Tasklist</h1>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="" />
          <label className="form-check-label">
            Default checkbox
          </label>
        </div>

      </div>
    </div>

  )
}

export default App
