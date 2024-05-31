// frontend/src/components/TaskList.js

import React, { useState, useEffect, useContext } from 'react';
import { getTasks, deleteTask } from '../services/apiService';
import { AuthContext } from '../context/AuthContext';
import Task from './Task';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchTasks = async () => {
      if (user) {
        const fetchedTasks = await getTasks(user.token);
        setTasks(fetchedTasks);
      }
    };
    fetchTasks();
  }, [user]);

  const handleDelete = async (id) => {
    if (user) {
      await deleteTask(id, user.token);
      setTasks(tasks.filter((task) => task._id !== id));
    }
  };

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-4">Task List</h1>
      {tasks.map((task) => (
        <Task key={task._id} task={task} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default TaskList;
