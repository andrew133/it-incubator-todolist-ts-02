import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from "uuid";
export type filterType = 'All'| 'Active'|'Completed'


function App() {

    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: "HTML&CS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "Rest A", isDone: false},
        {id: v1(), title: "GraphQL", isDone: false},
        ]
    )
    const removeTasks = (tasksId: string) => {
        setTasks(tasks.filter(f => f.id !== tasksId))
    }
    const addTasks = (title: string) => {
      let newTasks = {id: v1(), title: title, isDone: false}
        setTasks([newTasks, ...tasks])
    }

     const [filter, setFilter] = useState<filterType>('All')
     let filteredT = tasks
     if (filter === 'Active') {
         filteredT = tasks.filter(f => !f.isDone)
     }

     if (filter === 'Completed') {
         filteredT = tasks.filter(f => f.isDone)
   }

     const filterTasks = (filterValue: filterType) => {
         setFilter(filterValue)
    }


    return (
        <div className="App">
            <Todolist
                title="What to learns"
                tasks={filteredT}
                removeTasks={removeTasks}
                filterTasks={filterTasks}
                addTasks={addTasks}

            />
        </div>
    );
}

export default App;
