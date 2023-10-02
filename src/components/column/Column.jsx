import { shallow } from 'zustand/shallow';
import { useCallback, useState } from 'react';

import Task from '../task/Task';
import { useStore } from '../../store';

import './Column.css';

const Column = ({ status }) => {
  const tasks = useStore((state) =>
    state.tasks.filter((item) => item.status === status),
    shallow
  );

  const addTask = useStore((state) => state.addTask);

  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);

  const handleClick = useCallback((status) => {
    addTask(`Task ${status}`, status);
  }, [addTask]);

  return (
    <div className='column'>
      <div className='title-wrapper'>
        <p>{status}</p>
        <button onClick={() => setOpen(true)}>Add</button>
      </div>
      {tasks.map((item) => {
        const { title } = item
        return <Task key={title} title={title} />
      })}
      <div className='modal'>
        <div className='modal-content'>
          <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
    </div>
  );
};

export default Column;
