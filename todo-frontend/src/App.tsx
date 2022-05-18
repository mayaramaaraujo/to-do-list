import { TaskFormComponent } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import { useCreateTask } from "./hooks/useCreateTask";
import { useLoadTasks } from "./hooks/useLoadTasks";

import check from "./assets/check.svg"

function App() {
  const { tasklist, loadTasks } = useLoadTasks();
  const { newTask, handleInputChange, clearForm } = useCreateTask();

  return (
    <div className="container">
      <div className="container_header"> 
        <img className="container_img" src={check} alt="check"/>
        <p className="container_title">LISTA DE TAREFAS</p>
      </div>
      <TaskFormComponent
        clearForm={clearForm}
        newTask={newTask}
        loadTasks={loadTasks}
        handleInputChange={handleInputChange}
      />

      <TaskList tasklist={tasklist} loadTasks={loadTasks}/>
    </div>
  );
}

export default App;
