import React, { useState } from "react";
import "./index.css";

function ToDolist() {
  const [tasks, setTasks] = useState([]);
  const [newtask, setNewtask] = useState("");

  function handleInputChange(event) {
    setNewtask(event.target.value);
  }
  function addtask() {
    if (newtask.trim() !== "") {
      setTasks((t) => [...t, newtask]);
      setNewtask("");
    }
  }
  function deleteTask(index) {
    const updatedtasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedtasks);
  }
  function moveTaskUp(index) {
    if (index > 0) {
      const updatedtasks = [...tasks];
      [updatedtasks[index], updatedtasks[index - 1]] = [
        updatedtasks[index - 1],
        updatedtasks[index],
      ];
      setTasks(updatedtasks);
    }
  }
  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedtasks = [...tasks];
      [updatedtasks[index], updatedtasks[index + 1]] = [
        updatedtasks[index + 1],
        updatedtasks[index],
      ];
      setTasks(updatedtasks);
    }
  }
  return (
    <>
      <div className="to-do-list">
        <h1>To-Do-List</h1>
        <p className="description">
          Easily manage your daily tasks. Add tasks, move them up or down to
          reorder, and delete them once completed. Stay organized!
        </p>
        <div>
          <input
            type="text"
            placeholder="Enter a task"
            value={newtask}
            onChange={handleInputChange}
          />
          <button className="add-button" onClick={addtask}>
            ADD
          </button>
        </div>

        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <div className="task-content">
                <span className="text">{task}</span>
                <div className="button-group">
                  <button
                    className="delete-button"
                    onClick={() => deleteTask(index)}
                  >
                    Delete
                  </button>
                  <button
                    className="move-button"
                    onClick={() => moveTaskUp(index)}
                  >
                    Up
                  </button>
                  <button
                    className="move-button"
                    onClick={() => moveTaskDown(index)}
                  >
                    Down
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <footer className="footer">
        <p>Made with 💻 by Abdul Ahad • © {new Date().getFullYear()}</p>
      </footer>
    </>
  );
}
export default ToDolist;