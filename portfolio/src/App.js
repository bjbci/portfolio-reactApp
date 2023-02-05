import {useState } from 'react'

import Navbar from './components/navbar'
import Footer from './components/footer'
import AboutPage from './pages/about'
import ContactPage from './pages/contact'
import PortfolioPage from './pages/portfolio'
import ResumePage from './pages/resume'

//PARENT COMPONENT
function App() {
const [view, setView] =useState('about')

//ROUTING TO DIFFERENT VIEWS
console.log(view)
const renderView =()=>{
if(view==='about'){
  return <AboutPage />
  }else if(view==='contact'){
  return <ContactPage />
  }else if(view==='portfolio'){
  return <PortfolioPage />
  }else if(view==='resume'){
  return <ResumePage />
  }else{
    return "No Matching View"
  }
}


  return (
    <>
      <Navbar
      view={view}
      setView={setView} />
  { renderView( )}
      <Footer 
      view={view}
      setView={setView}
      />
    </>
  );
}

export default App;
