import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Latest from './components/Pages/Latest/Latest'
import TopRated from './components/Pages/TopRated/TopRated'
import Home from './components/Home/Home'
import Contact from './components/Pages/Contact'
import About from './components/Pages/About'




function App() {
  return (
    <>


<Router>

<Routes>

  <Route exact path='/' element={<Home />} />
  <Route exact path='/toprated' element={<TopRated/>} />
  <Route exact path='/latest' element={<Latest/>} />
  <Route exact path='/contact' element={<Contact />} />
  <Route exact path='/about' element={<About/>} />
 


</Routes>

</Router>



   



    </>

  )
}

export default App