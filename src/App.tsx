import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Test } from './pages/Test'
import { Result } from './pages/Result'

function App() {
  return (
    <div className="w-full max-w-3xl">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
