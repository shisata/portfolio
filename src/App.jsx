import { Navbar } from "./layout/Navbar"
import { Routes, Route } from "react-router"
import { Home } from "./pages/Home/Home"
import { About } from "./pages/About/About"
import { Works } from "./pages/Works/Works"
import { Project1 } from "./pages/Works/Project1/Project1"
import { Contact } from "./pages/Contact/Contact"
import { Footer } from "./layout/Footer"
import { useEffect, useState } from "react"

// Todo: implement light/dark mode

function App() {
  const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  useEffect(() => {
    isDarkMode? console.log(`dark mode`) : console.log(`light mode`);
    // console.log(`${isDarkMode? `dark` : `light`}`)
  }, [isDarkMode])

  return (
    <>
    {/* <div id="site-container" className="min-h-screen overflow-x-hidden"> */}
    <div id="site-container" className={`overflow-x-hidden pt-body-padding-top relative`}>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="works">
          <Route index element={<Works/>}/>
          <Route path="project1" element={<Project1/>}/>
        </Route>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Routes>
      <Footer/> 
    </div>
    </>
  )
}


export default App