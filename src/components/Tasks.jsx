const Tasks = (prop) => {
 
    
    return ( 
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {prop.tasks.map((task) => (
        <li key={task.id} className="bg-slate-400 text-white p-2 rounded-md">{task.title}</li>
      ))}

    </ul> 
    )
}
 export default Tasks;