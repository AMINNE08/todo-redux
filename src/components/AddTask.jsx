import  { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../todoSlice";

const AddTask = () => {
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (description.trim()) {
      dispatch(addTask({ id: Date.now(), description, isDone: false }));
      setDescription("");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a task..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
};

export default AddTask;
