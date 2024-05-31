// frontend/src/components/Task.js

import React from 'react';

const Task = ({ task, onDelete }) => {
  const handleDelete = () => {
    onDelete(task._id);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <h3 className="text-xl font-bold mb-2">{task.title}</h3>
      <p className="mb-2">{task.description}</p>
      <p className="mb-2">Status: {task.status}</p>
      <button
        onClick={handleDelete}
        className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  );
};

export default Task;
