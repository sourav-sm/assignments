import { useState } from "react"
import { memo } from 'react';

function App() {
  const [todos, setTodos] = useState([{
    id: 0, 
    title: "go to gym",
    description: "go to gym from 1-2"
  }, {
    id: 1, 
    title: "eat food",
    description: "Eat a lot of food"
  }]);
  const [counter, setCounter] = useState(0);

  function increaseCount() {
    setCounter(counter + 1);
  }

  const filteredTodos = todos.filter(x => x.id % 2 == 0);

  return (
    <div>
      <button onClick={increaseCount}>Inrease count ({counter})</button>
      {filteredTodos.map(todo => <Todo title={todo.title} description={todo.description} />)}
    </div>
  )
}

const Todo = memo(function ({title, description}) {
  return <div>
    <h1>
      {title}
    </h1>
    <h3>
      {description}
    </h3>
  </div>
})

export default App