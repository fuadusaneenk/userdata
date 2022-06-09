
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import UserDetails from './UserDetails';
import FormData from './FormData';
function App() {
  return (
    <Router>
     <Header/>
     <main className='py-3'>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/login' element={<FormData/>}/>
 
</Routes>
    </main>
     <Footer/>
     
    </Router>
  );
}

export default App;
