import './App.css'
import Home from "./pages/Home"
import NavBar from "./components/NavBar"

export default function App() {
  return (
    <div className='grid_container'>
      <NavBar />
      <Home />
    </div>
  )
}

