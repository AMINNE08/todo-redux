import  { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTaskStatus, deleteTask, editTask } from "../todoSlice";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(task.description);

  const handleEdit = () => {
    dispatch(editTask({ id: task.id, description: newDescription }));
    setIsEditing(false);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => dispatch(toggleTaskStatus(task.id))}
      />
      {isEditing ? (
        <>
          <input
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <span style={{ textDecoration: task.isDone ? "line-through" : "none" }}>
          {task.description}
        </span>
      )}
      <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
      <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
    </div>
  );
};

export default Task;
