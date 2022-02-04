import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';

function App() {

    // const tasks1 = [
    //     {id: 1, title: "HTML&CSS", isDone: true},
    //     {id: 2, title: "JS", isDone: true},
    //     {id: 3, title: "ReactJS", isDone: false}
    // ]
    const [tasks, setTask] = useState([
            {id: 1, title: "HTML&CSS", isDone: true},
            {id: 2, title: "JS", isDone: true},
            {id: 3, title: "ReactJS", isDone: false}
        ]
    )
    const removeTasks = (tasksId: number) => {
        setTask(tasks.filter(f=>f.id!==tasksId))
    }
    const filterTasks = (filterValue: string) => {
        console.log(filterValue)
    }

    return (
        <div className="App">
            <Todolist
                title="What to learn"
                tasks={tasks}
                removeTasks={removeTasks}
                filterTasks={filterTasks}
            />
        </div>
    );
}

export default App;
