import './App.css'
import Column from './components/column/Column'

function App() {
  return (
    <div className='app'>
      <Column status='PLANNED' />
      <Column status='ONGOING' />
      <Column status='DONE' />
    </div>
  )
}

export default App
