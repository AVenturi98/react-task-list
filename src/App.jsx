import tasks from '../tasks'

function App() {

  const tasksCurrent = []
  const tasksComplet = []

  tasks.filter((el) => {
    if (el.state === 'backlog' || el.state === 'in_progress') tasksCurrent.push(el)
    else return tasksComplet.push(el)
  })


  return (
    // console.log(tasks)
    <>
      <header>
        <h1>Task Manager</h1>
      </header>
      <main>
        <h4>Current Tasks (n)</h4>
        <ul>
          {tasksCurrent.map((task) => <li key={task.id}>
            <p>{task.title} <span className="text-state">{task.state}</span></p>
            <p>Priority: {task.priority}</p>
            <p>Es. time: {task.estimatedTime}</p>
          </li>)}
        </ul>
        <hr />
        <h4>Completed Tasks (n)</h4>
        <ul>
          {tasksComplet.map((task) => <li key={task.id}>
            <p>{task.title} <span className="text-state">{task.state}</span></p>
            <p>Priority: {task.priority}</p>
            <p>Es. time: {task.estimatedTime}</p>
          </li>)}
        </ul>
      </main>
    </>
  )
}

export default App
