import { useEffect, useState } from "react";
import {v4} from "uuid";

import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks"; 



const App = () => {
      const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);


     useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10",
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setTasks(data);
    };
    // SE QUISER, VOCÊ PODE CHAMAR UMA API PARA PEGAR AS TAREFAS
    // fetchTasks();
  }, []);


      function onTaskClick(taskId) {
        const newTasks = tasks.map(task => {
          if(task.id === taskId) {
            return {...task, isCompleted: !task.isCompleted}
          }
          return task
      });
      setTasks(newTasks);
      }

      const deleteTask = (taskId) => {
        const newTasks = tasks.filter(task => task.id !== taskId)
        setTasks(newTasks)
      }

      const onAddTaskSubmit = (title, description) => {
        const newTasks = {
          id: v4(),
          title,
          description,
          isCompleted: false
        };
         setTasks([...tasks, newTasks]);
        }
      
        useEffect(() => {
          localStorage.setItem('tasks', JSON.stringify(tasks))
        }, [tasks])


  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
        <div className="w-[500px] space-y-4">

        <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de Tarefas</h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks tasks={tasks} onTaskClick={onTaskClick} deleteTask={deleteTask}/>
       </div>
      </div>
    );
}
 
export default App