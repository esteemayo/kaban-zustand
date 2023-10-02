import Task from '../task/Task';
import './Column.css';

const Column = ({ state }) => {
  return (
    <div className='column'>
      <p>{state}</p>
      <Task title='Todo' />
    </div>
  );
};

export default Column;
