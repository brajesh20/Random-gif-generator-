import './App.css'
import Random from './Components/Random'
import Tag from './Components/Tag'

function App () {
  return (
    <div className='App'>
      <div className='heading'>
        <h1>GIPHY GENERATOR</h1>
      </div>
      <Random />
      <Tag />
    </div>
  )
}

export default App
