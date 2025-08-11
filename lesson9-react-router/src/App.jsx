import './App.css'
import RootLayout from './layout/RootLayout'

// react=router-dom
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom'

// pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    )
  )
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  )
}

export default App
