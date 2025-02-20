// src/App.jsx
import Header from './components/Header'
import UserProfile from './components/UserProfile'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      paddingBottom: '60px',
      position: 'relative'
    }}>
      <Header />
      <UserProfile 
        name="Alice Johnson"
        age="25"
        bio="Loves hiking and photography"
      />
      <MainContent />
      <Footer />
    </div>
  )
}

export default App;