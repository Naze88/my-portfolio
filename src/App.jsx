import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./components/Home.jsx"
import ProjectDetail from "./components/ProjectDetail.jsx"
import Resume from "./components/Resume.jsx"

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

export default App
