import { FaTrash } from 'react-icons/fa';

import { useTask } from '../../hooks/useTask';
import './Task.css';

const Task = ({ title }) => {
  const task = useTask((state) =>
    state.tasks.find((item) => item.title === title)
  );

  const deleteTask = useTask((state) => state.deleteTask);
  const setDraggedTask = useTask((state) => state.draggedTask);

  return (
    <div className='task' draggable onDragStart={() => setDraggedTask(task.title)}>
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
