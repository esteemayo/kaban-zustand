import './App.css'
import Column from './components/Column'

function App() {
  return (
    <div className='app'>
      <Column state='PLANNED' />
      <Column state='ONGOING' />
      <Column state='DONE' />
    </div>
  )
}

export default App
