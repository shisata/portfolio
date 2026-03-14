import { Navbar } from "./layout/navBar"
import { Routes, Route } from "react-router"
import { Home } from "./pages/Home/Home"
import { About } from "./pages/About/About"
import { Experience } from "./pages/Experience/Experience"
import { Project1 } from "./pages/Experience/Project1/Project1"

function App() {
  return (
    <>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="experience">
        <Route index element={<Experience/>}/>
        <Route path="project1" element={<Project1/>}/>
      </Route>
      <Route path="about" element={<About/>}/>
    </Routes>
    </>
  )
}


export default App