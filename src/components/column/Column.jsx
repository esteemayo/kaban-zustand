import { shallow } from 'zustand/shallow';
import { v4 as uuidV4 } from 'uuid';
import { useCallback, useState } from 'react';

import Task from '../task/Task';
import { useTask } from '../../store';

import './Column.css';

const Column = ({ status }) => {
  const tasks = useTask((state) =>
    state.tasks.filter((item) => item.status === status),
    shallow
  );
  const addTask = useTask((state) => state.addTask);
  const setDraggedTask = useTask((state) => state.setDraggedTask);
  const moveTask = useTask((state) => state.moveTask);
  const draggedTask = useTask((state) => state.draggedTask);

  const [text, setText] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [drop, setDrop] = useState(false);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    setDrop(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    setDrop(false);
  }, []);

  const handleDrop = useCallback((e) => {
    const newTask = {
      title: draggedTask,
      status,
    };

    moveTask(newTask);
    setDraggedTask(null);
    setDrop(false);
  }, [draggedTask, moveTask, setDraggedTask, status]);

  const handleClose = useCallback(() => {
    setTimeout(() => {
      setShowModal(false);
    }, 300);
  }, []);

  const closeModalHandler = useCallback((e) => {
    if (e.target.classList.contains('modal')) {
      handleClose();
    }
  }, [handleClose]);

  const handleClick = useCallback(() => {
    const newTask = {
      id: uuidV4(),
      title: text,
      status,
    };

    addTask(newTask);
    setText('');
    setShowModal(false);
  }, [addTask, status, text]);

  return (
    <div
      className={drop ? 'column drop' : 'column'}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className='title-wrapper'>
        <p>{status}</p>
        <button onClick={() => setShowModal(true)}>Add</button>
      </div>
      {tasks.map((item) => {
        const { id, title } = item;
        return <Task key={id} title={title} />;
      })}
      {showModal && (
        <div className='modal' onClick={closeModalHandler}>
          <div className={showModal ? 'modal-wrapper active' : 'modal-wrapper'}>
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
