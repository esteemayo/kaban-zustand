import { shallow } from 'zustand/shallow';

import Task from '../task/Task';
import { useStore } from '../../store';

import './Column.css';

const Column = ({ status }) => {
  const tasks = useStore((state) =>
    state.tasks.filter((item) => item.status === status),
    shallow
  );

  return (
    <div className='column'>
      <div className='title-wrapper'>
        <button>Add</button>
        <p>{status}</p>
      </div>
      {tasks.map((item) => {
        const { title } = item
        return <Task key={title} title={title} />
      })}
    </div>
  );
};

export default Column;
