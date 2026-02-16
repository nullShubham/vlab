import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ErrorPage from "./pages/ErrorPage"
import DashboardPage from "./pages/DashboardPage"
function App() {
  return (
    <Routes>
      <Route path="*" element={<ErrorPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  )
}

export default App
