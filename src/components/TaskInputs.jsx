import { useState } from "react";

const TaskInputs = ({ getTasks }) => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/todo", {
      method: "POST",
      body: JSON.stringify({ title, note }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        setTitle("");
        setNote("");
        getTasks();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="task-inputs">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <textarea
          placeholder="note"
          onChange={(e) => setNote(e.target.value)}
          value={note}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default TaskInputs;
