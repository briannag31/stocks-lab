import "./App.css"
import { Route, Routes } from "react-router-dom"
import Stocks from "./pages/Stocks"
import Home from "./pages/Home"
import Nav from "./components/Nav"
import About from "./pages/About"
import SngleStock from "./pages/SngleStock"

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/stocks" element={<Stocks />} />
        <Route path="/stocks/:symbol" element={<SngleStock />} />
      </Routes>
    </div>
  )
}

export default App