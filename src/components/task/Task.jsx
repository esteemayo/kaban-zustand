import './Task.css';

const STATUS = 'PLANNED';

const Task = ({ title }) => {
  return (
    <div className='task'>
      <div>{title}</div>
      <div>
        <div></div>
        <div className='status'>{STATUS}</div>
      </div>
    </div>
  );
};

export default Task;
