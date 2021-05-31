import React from "react";
import AddTask from "../AddTask/AddTask";
import TaskList from "../TaskList/TaskList";
import "./TodoApp.css";

const TodoApp = () => {
    return (
        <div>
            <div className="header">
                <h1>TODO Application</h1>
            </div>
            <AddTask />
            <TaskList />
        </div>
    );
};

export default TodoApp;
