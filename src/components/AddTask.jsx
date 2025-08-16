import { useState } from "react";

const AddTask = ({onAddTaskSubmit}) => {
  const [title, setTitle]= useState("");
  const [description, setDescription]= useState("");
    return ( 
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
             <input 
              type="text"
              placeholder="Digite o titulo da tarefa" 
              className="border 0border-slate-300 outline-slate-400 px-4 py-2"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              />

             <input
              type="text"
              placeholder="Digite a descrição da tarefa"
              className="border border-slate-300 outline-slate-400 px-4 py-2"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              />

             <button onClick={() => {
              if(!title.trim() || !description.trim()) return alert("Preencha todos os campos")
              onAddTaskSubmit(title, description)
              setTitle("")
              setDescription("")      
              }}
               className="bg-slate-500 text-white p-2 rounded-md font-medium">
                Adicionar
             </button>
        </div>
     );
}
 
export default AddTask;