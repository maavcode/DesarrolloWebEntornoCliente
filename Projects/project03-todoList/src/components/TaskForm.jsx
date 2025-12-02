import { useState } from "react";


export default function TaskForm({onAddTask}) {
    const [value, setValue] = useState("") 
    
    function handleSubmit(e){
        e.preventDefault();
                        onAddTask(value); 
                        setValue(''); 
    }

    function handleValueChange(e) {
        setValue(e.target.value)
    }
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <textarea 
                    value={value}
                    onChange={handleValueChange}
                        >
                </textarea>
                <button type="submit">
                    Añadir
                </button>
            </form>
        </>
    );
}