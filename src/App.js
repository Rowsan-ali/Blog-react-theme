import 'react-dom';
import './App.css';

import NavBar from './Components/NavBar';
import Feature_blog from './Components/Feature_blog';
import Blog_section from './Components/Blog_section';
import Subscription from './Components/Subscription'
import Footer from './Components/Footer'

function App(){
  return(
    <>
    <NavBar/>
    <Feature_blog/>
    <Blog_section/>
    <Subscription/>
    <Footer/>
    </>
  )
}

export default App;