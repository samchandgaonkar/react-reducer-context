import { useReducer } from 'react';
import AddTask from './AddTask.js';
import TaskList from './TaskList.js';
import { tasksReducer } from './tasksReducer.js';
import { TasksContext, TaskDispatchContext } from './TasksContext.js';

const initialTasks = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false },
];


export default function TaskApp() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  return (
    <TasksContext.Provider value={tasks}>
      <TaskDispatchContext.Provider value={dispatch}>
        <h1>Prague itinerary</h1>
        <AddTask />
        <TaskList />
      </TaskDispatchContext.Provider>
    </TasksContext.Provider>
  );
}