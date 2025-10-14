import getPriorityColor from "../functions/getPriorityColor";
import TaskItem from "./TaskItem";

export default function TaskColumn({title, tasks}) {
    return (
        <div style={{width:200, margin:50, backgroundColor:"gray"}}>
            <h1>{title}</h1>
            {tasks.map(task=>
                <TaskItem title={task.title} priority={task.priority} dueDate={task.dueDate} />
            )}
        </div>
    )
}