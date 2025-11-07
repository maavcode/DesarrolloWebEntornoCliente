import { useState } from "react";


export default function TaskForm(
    onAddTask
) {
    const [value, setValue] = useState("") 

    return (
        <>
            <form action="">
                <textarea 
                    value={value}
                    onChange={(e) => setValue(e.target.value)}>
                </textarea>
                <button onClick={() => onAddTask({value})}>
                    Añadir
                </button>
            </form>
        </>
    );
}