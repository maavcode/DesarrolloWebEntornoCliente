import getPriorityColor from "../functions/getPriorityColor"

export default function TaskItem({title, priority, dueDate}) {
    // Para decidir el color de la tarea llamare a la funcion getPriorityColor y le dare la prioridad de la tarea. Esta funcion decidira el color de la tarea.
    return(
        <div style={{backgroundColor:getPriorityColor(priority), borderRadius:"20px", margin:"10px"}}>
            <h4>{title}</h4>
            
            <p>Prioridad: {priority}</p>
            <p>Fecha límite: {dueDate}</p>

        </div>
    )
}