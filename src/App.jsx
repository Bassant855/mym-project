
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Landing from './components/landing/Landing';
import WhoWeAre from './components/who/WhoWeAre';
import Service from './components/ourService/Service';
import Help from './components/help/Help';
import Tech from './components/technologies/Tech';
import Workers from './components/workers/Workers';
import Project from './components/projects/Project';
import Develop from './components/develop/Develop';
import Footer from './components/footer/Footer';


function App() {

  return (
    <>
    <Navbar/>
    <Landing/>
    <WhoWeAre/>
    <Service/>
    <Help/>
    <Tech/>
    <Workers/>
    <Project/>
    <Develop/>
    <Footer/>
    </>
  )
}

export default App
