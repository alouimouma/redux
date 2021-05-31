import React, { useState } from "react";
import "./AddTask.css";
import { useDispatch } from "react-redux";
import { addTask } from "../../JS/Actions/Task";

const AddTask = () => {
    const dispatch = useDispatch();
    const [Taskvalue, setTaskvalue] = useState("");
    return (
        <div className="ADD">
            <h2>ADD Task</h2>
            <input
                onChange={(e) => setTaskvalue(e.target.value)}
                value={Taskvalue}
            />
            <button
                onClick={() => {
                    if (Taskvalue) {
                        dispatch(
                            addTask({
                                id: Math.random(),
                                description: Taskvalue,
                                isDone: false,
                            })
                        );
                        setTaskvalue("");
                    } else {
                        alert("You can't add an empty task !!");
                    }
                }}
            >
                ADD
            </button>
        </div>
    );
};

export default AddTask;
