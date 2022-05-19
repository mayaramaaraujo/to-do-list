import { TaskFormComponent } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import { useCreateTask } from "./hooks/useCreateTask";
import { useLoadTasks } from "./hooks/useLoadTasks";

import check from "./assets/check.svg"
import Loading from "./components/Loading";

function App() {
  const { tasklist, loadTasks, loading } = useLoadTasks();
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

      {loading ? <Loading /> : <TaskList tasklist={tasklist} loadTasks={loadTasks}/>}      
    </div>
  );
}

export default App;
