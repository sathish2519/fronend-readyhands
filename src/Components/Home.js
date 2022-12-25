import {React} from 'react'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
import Intro from './Intro/Intro'
import Navbar from './Navbar/Navbar'
import Services from './Services/Services'
import '../App.css'

function Home() {
  return (
    <div className='App'>
    <Navbar></Navbar>
    <Intro></Intro>
    <Services></Services>
    <Contact></Contact>
    <Footer></Footer>
    </div>
  )
}

export default Home
