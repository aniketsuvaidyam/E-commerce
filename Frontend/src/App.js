import './App.css';
import Navbar from './Common/Navbar/Navbar'
import Footer from './Common/Footer/Footer'
import Router from './Router/Router';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
