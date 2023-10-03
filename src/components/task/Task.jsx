import { FaTrash } from 'react-icons/fa';

import { useStore } from '../../store';
import './Task.css';
import { useCallback } from 'react';

const Task = ({ title }) => {
  const task = useStore((state) =>
    state.tasks.find((item) => item.title === title)
  );
  const deleteTask = useStore((state) => state.deleteTask);
  const setDraggedTask = useStore((state) => state.setDraggedTask);

  const handleDragStart = useCallback(() => {
    const selectedTask = {
      id: task.id,
      title: task.title,
    };

    setDraggedTask(selectedTask);
  }, [setDraggedTask, task]);

  return (
    <div className='task' draggable onDragStart={handleDragStart}>
      <div>{task.title}</div>
      <div className='bottom-wrapper'>
        <div className='delete-icon'>
          <FaTrash onClick={() => deleteTask(task.id)} />
        </div>
        <div className={`status ${task.status}`}>{task.status}</div>
      </div>
    </div>
  );
};

export default Task;
