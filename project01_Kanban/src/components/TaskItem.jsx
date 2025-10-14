import getPriorityColor from "../functions/getPriorityColor"

export default function TaskItem({title, priority, dueDate}) {
    return(
        <div style={{backgroundColor:getPriorityColor(priority)}}>
            <h4>{title}</h4>
            
            <p>Prioridad: {priority}</p>
            <p>Fecha límite: {dueDate}</p>

        </div>
    )
}