import React from 'react'
import NavBar from './Components/NavBar'
//import Count from './Components/Count'
import Footer from './Components/Footer'



import './App.css'
import Login from './Components/Login'
import MediaCard from './Components/MediaCard'
import Card2 from './Components/Card2'
import Card3 from './Components/Card3'

import Card4 from './Components/card4'
import Myapp from './Components/Myapp'


const App = () => {
  return (
    <>
      <header>
        <NavBar/>
        
      </header>
      <body>
        <section>
          <div className='main '>
          <div className='sv'><MediaCard/></div>
          <div className='ai'><Card2/></div>
          <div className='li'><Card3/></div>
          

          </div>
          <div className='container-2'>
          <div className='pi'><Card4/></div>

          </div>
          <Myapp />
          
         
          
          
        </section>
        <footer>
          <Footer/>
        </footer>
      </body>

    </>
  )
}

export default App