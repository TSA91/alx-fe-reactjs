// src/App.jsx
import Counter from './components/Counter'
import './App.css'

function App() {
  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px'
    }}>
      <h1 style={{
        textAlign: 'center',
        color: '#333',
        marginBottom: '30px'
      }}>React Counter App</h1>
      <Counter />
    </div>
  )
}

export default App