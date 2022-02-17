import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {filterType} from "./App";


export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

 type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTasks: (tasksId: string)=> void
    filterTasks: (filterValue: filterType)=> void
     addTasks:(title: string)=> void
}


export function Todolist(props: PropsType) {
    let [title, setTitle] = useState('')

    const onChangeHandler=(event: ChangeEvent<HTMLInputElement>)=>{
        setTitle(event.currentTarget.value)
    }
    const onClickHandler = () =>{
        props.addTasks(title);
        setTitle('');
    }
    const onKeyPressHandler =(event: KeyboardEvent<HTMLInputElement>)=>{
        if (event.key==='Enter') {
            onClickHandler()
        }
    }

    const oneClickFilterHandler = (value:filterType) => {
        props.filterTasks(value)
    }
    const removeTasksHandler =(mid: string)=>{
        props.removeTasks(mid)
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={title} onChange={onChangeHandler} onKeyPress={onKeyPressHandler}/>
            <button  onClick={onClickHandler}>+</button>
        </div>
        <ul>
            {props.tasks.map((m, i) => {
                return (
                    <li key={i}>
                        <button onClick={()=>removeTasksHandler(m.id)}>x</button>
                        <input type="checkbox" checked={m.isDone}/>
                        <span>{m.title}</span>
                    </li>
                )
            })}
        </ul>
        <div>
            <button onClick={()=>oneClickFilterHandler('All')}>All</button>
            <button onClick={()=>oneClickFilterHandler('Active')}>Active</button>
            <button onClick={()=>oneClickFilterHandler('Completed')}>Completed</button>
        </div>
    </div>
}
