import { shallow } from 'zustand/shallow';
import { v4 as uuidV4 } from 'uuid';
import { useCallback, useState } from 'react';

import Task from '../task/Task';
import { useTaskModal } from '../../hooks/useTaskModal';
import { useTask } from '../../hooks/useTask';

import Modal from '../modal/Modal';

import './Column.css';

const Column = ({ status }) => {
  const { isOpen, onOpen, onClose } = useTaskModal();
  const tasks = useTask((state) =>
    state.tasks.filter((item) => item.status === status),
    shallow
  );
  const addTask = useTask((state) => state.addTask);

  const [text, setText] = useState('');

  const handleClick = useCallback(() => {
    const newTask = {
      id: uuidV4(),
      title: text,
      status,
    };

    addTask(newTask);
    setText('');
    onClose();
  }, [addTask, onClose, status, text]);

  const bodyContent = (
    <>
      <input
        type='text'
        value={text}
        placeholder='Title'
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleClick}>Submit</button>
    </>
  );

  return (
    <div className='column'>
      <div className='title-wrapper'>
        <p>{status}</p>
        <button onClick={() => onOpen()}>Add</button>
      </div>
      {tasks.map((item) => {
        const { id, title } = item;
        return <Task key={id} title={title} />;
      })}
      <Modal
        isOpen={isOpen}
        body={bodyContent}
        onClose={onClose}
      />
    </div>
  );
};

export default Column;
