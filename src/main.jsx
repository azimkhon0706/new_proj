import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contacts/Contacts.jsx'
import Github, {githubInfoLoader} from './components/Github/Github.jsx'
import User from './components/User/User.jsx'
import { Route,RouterProvider, createBrowserRouter,createRoutesFromElements } from 'react-router-dom'



const router = createBrowserRouter(
createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route  path='Home'  element={<Home/>}  />
    <Route path='About' element={<About/>} />
    <Route path='Contacts' element={<Contact />} />
    <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />} />
    <Route path='user/' element={<User />} >
    <Route path=':userid' element={<User/>} />
    </Route>
    <Route path='*' component={<div>Not found</div>}/>
</Route>
)

)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router }/>
  </React.StrictMode>
)
