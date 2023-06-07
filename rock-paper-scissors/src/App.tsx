import './App.css'
import Playground from './components/Playground'
import Header from './components/layouts/Header'

function App() {
  return (
    <div className='container max-w-3xl'>
      <Header/>
      <Playground />
    </div>
  )
}

export default App
