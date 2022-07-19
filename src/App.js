import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Main from './components/Main';


function App() {
  const year = new Date().getFullYear();
 
  return (
    <div >
     <NavBar year={year} />
     <Main/>
     <Footer />
    </div>
  );
}

export default App;
