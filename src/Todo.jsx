import React, { useState } from "react";
import "./todo.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Todo() {
  const [tasks, setTasks] = useState(["Good morning", "How are you?", "Are you fine?"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim()) {
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  }

  function moveTaskup(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  function moveTaskdown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  return (
    <Container className="todo-list">
      <Row>
        <Col>
          <div className="todo">
            <h1>To-Do List</h1>
            <div>
              <input
                type="text"
                placeholder="Enter a task"
                value={newTask}
                onChange={handleInputChange}
              />
              <button className="addbutton" onClick={addTask}>Add</button>
            </div>
            <ol>
              {tasks.map((task, index) => (
                <li key={index}>
                  <span className="text">{task}</span>
                  <button className="delete" onClick={() => deleteTask(index)}>
                    <i className="fa-solid fa-trash"></i>
                  </button>
                  <button className="move" onClick={() => moveTaskup(index)} disabled={index === 0}>
                    <i className="fa-solid fa-upload"></i>
                  </button>
                  <button className="move" onClick={() => moveTaskdown(index)} disabled={index === tasks.length - 1}>
                    <i className="fa-solid fa-download"></i>
                  </button>
                </li>
              ))}
            </ol>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Todo;
