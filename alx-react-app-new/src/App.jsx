import Header from './components/Header'
import UserProfile from './components/UserProfile'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div style={{ 
      minHeight: '100vh',
      backgroundColor: '#f0f2f5',
      paddingBottom: '60px' // Space for fixed footer
    }}>
      <Header />
      <UserProfile 
        name="Alice Johnson"
        age="25"
        bio="Passionate traveler and photography enthusiast"
      />
      <MainContent />
      <Footer />
    </div>
  )
}

export default App