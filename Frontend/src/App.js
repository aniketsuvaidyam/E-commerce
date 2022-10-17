import './App.css';
import Navbar from './Common/Navbar/Navbar'
import Footer from './Common/Footer/Footer'
import Router from './Router/Router';

function App() {
  return (
    <div className="App">
      <div className="fixed z-[1500] w-full">
        <Navbar />
      </div>
      <div className="h-[106px] md:h-[74px]"></div>
      <Router />
      <Footer />
    </div>
  );
}

export default App;
