import Modal from './components/modal/Modal';
import Column from './components/column/Column';

import './App.css'

function App() {
  return (
    <div className='app'>
      <Column status='PLANNED' />
      <Column status='ONGOING' />
      <Column status='DONE' />
      <Modal />
    </div>
  )
}

export default App
