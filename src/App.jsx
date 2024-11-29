import tasks from '../tasks'

function App() {

  const tasksCurrent = []
  const tasksComplet = []

  tasks.filter((el) => {
    if (el.state === 'backlog' || el.state === 'in_progress') tasksCurrent.push(el)
    else return tasksComplet.push(el)
  })

  const count = 0


  return (
    // console.log(tasks)
    <>
      <header>
        <h1>Task Manager</h1>
      </header>
      <main className="content">
        <h3>Current Tasks ({tasksCurrent.length})</h3>
        <ul>
          {tasksCurrent.map((task) => <li key={task.id}>
            <p>{task.title} <span className="badge">{task.state}</span></p>
            <p>Priority: {task.priority}</p>
            <p>Es. time: {task.estimatedTime}</p>
          </li>)}
        </ul>
        <hr />
        <h3>Completed Tasks ({tasksComplet.length})</h3>
        <ul>
          {tasksComplet.map((task) => <li key={task.id}>
            <p>{task.title} <span className="badge">{task.state}</span></p>
            <p>Priority: {task.priority}</p>
            <p>Es. time: {task.estimatedTime}</p>
          </li>)}
        </ul>
      </main>
    </>
  )
}

export default App
