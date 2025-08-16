import './App.css'
import RootLayout from './layout/RootLayout'
import ContactLayout from './layout/ContactLayout'

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
import Faq from './pages/help/Faq'
import Form from './pages/help/Form'

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactLayout />} >
            <Route path='faq' element={<Faq/>}/>
            <Route path='form' element={<Form/>}/>
        </Route>
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
