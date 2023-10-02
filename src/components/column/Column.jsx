import { shallow } from 'zustand/shallow';
import { v4 as uuidV4 } from 'uuid';
import { useCallback, useState } from 'react';

import Task from '../task/Task';
import { useTask } from '../../hooks/useTask';

import './Column.css';

const Column = ({ status }) => {
  const tasks = useTask((state) =>
    state.tasks.filter((item) => item.status === status),
    shallow
  );

  const addTask = useTask((state) => state.addTask);

  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);

  const handleClick = useCallback(() => {
    const newTask = {
      id: uuidV4(),
      title: text,
      status,
    };

    addTask(newTask);
    setText('');
    setOpen(false);
  }, [addTask, status, text]);

  return (
    <div className='column'>
      <div className='title-wrapper'>
        <p>{status}</p>
        <button onClick={() => setOpen(true)}>Add</button>
      </div>
      {tasks.map((item) => {
        const { id, title } = item
        return <Task key={id} title={title} />
      })}
      {open && (
        <div className='modal'>
          <div className={open ? 'modal-wrapper active' : 'modal-wrapper'}>
            <div className='modal-content'>
              <input
                type='text'
                value={text}
                placeholder='Title'
                onChange={(e) => setText(e.target.value)}
              />
              <button onClick={handleClick}>Submit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Column;
