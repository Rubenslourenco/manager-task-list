import {  ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Tasks = ({tasks, onTaskClick, deleteTask}) => {
  const navegate = useNavigate();

  const onSeeDetails = (task) => 
  {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navegate(`/task?${query.toString()}`)
  }
    
    return ( 
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
            <button 
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-400 text-left w-full text-white p-2 rounded-md ${
              task.isCompleted && "line-through"
            }`}>
                {task.title}
            </button>
            <button onClick={() => onSeeDetails(task)} className="bg-slate-400  text-white p-2 rounded-md">
                <ChevronRightIcon />
            </button>
            <button onClick={() => deleteTask(task.id)} className="bg-slate-400  text-white p-2 rounded-md">
                <TrashIcon />
            </button>

        </li>
      ))}

    </ul> 
    )
}
 export default Tasks;
