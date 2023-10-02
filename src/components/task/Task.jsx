import { useStore } from '../../store';

import './Task.css';

const Task = ({ title }) => {
  const task = useStore((state) =>
    state.tasks.find((item) => item.title === title)
  );

  return (
    <div className='task'>
      <div>{task.title}</div>
      <div className='bottom-wrapper'>
        <div></div>
        <div className={`status ${task.status}`}>{task.status}</div>
      </div>
    </div>
  );
};

export default Task;
