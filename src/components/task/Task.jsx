import './Task.css';

const STATUS = 'PLANNED';

const Task = ({ title }) => {
  return (
    <div className='task'>
      <div>{title}</div>
      <div className='bottom-wrapper'>
        <div></div>
        <div className={`status ${STATUS}`}>{STATUS}</div>
      </div>
    </div>
  );
};

export default Task;
