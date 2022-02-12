import React, {ChangeEvent, useState} from 'react';
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
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={title} onChange={onChangeHandler}/>
            <button  onClick={onClickHandler}>+</button>
        </div>
        <ul>
            {props.tasks.map((m, i) => {
                return (
                    <li key={i}>
                        <button onClick={()=>props.removeTasks(m.id)}>x</button>
                        <input type="checkbox" checked={m.isDone}/>
                        <span>{m.title}</span>
                    </li>
                )
            })}
        </ul>
        <div>
            <button onClick={()=> props.filterTasks('All')}>All</button>
            <button onClick={()=>props.filterTasks('Active')}>Active</button>
            <button onClick={()=>props.filterTasks('Completed')}>Completed</button>
        </div>
    </div>
}
