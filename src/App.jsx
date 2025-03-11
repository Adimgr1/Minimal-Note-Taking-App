import Home from './Home'
import './App.css'

function App() {
  localStorage.setItem("grp-dtls", JSON.stringify([]));
  localStorage.setItem("msgs", JSON.stringify({}))

  return (
    <div style={{width:"100%", height:"100%"}}>
      <Home/>

    </div>
    
  )
}

export default App
