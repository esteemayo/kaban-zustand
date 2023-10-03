import { FaTrash } from 'react-icons/fa';

import { useStore } from '../../store';
import './Task.css';

const Task = ({ title }) => {
  const task = useStore((state) =>
    state.tasks.find((item) => item.title === title)
  );

  const deleteTask = useStore((state) => state.deleteTask);
  const setDraggedTask = useStore((state) => state.setDraggedTask);

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
