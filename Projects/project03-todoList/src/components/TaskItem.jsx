export default function TaskItem (
    {
        task,
        onDeleteTask
    }
) {

    function handleDelete(){
        onDeleteTask(task.id);
    }
    return (
        <>
            <h3>{task.text}</h3>
            <button onClick={handleDelete}>Delete</button>
        </>
    )
}