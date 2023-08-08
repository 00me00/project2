import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import AllRoutes from './routes/AllRoutes';

function App() {
  return (
    <div className="App">
    <Header/>
    <AllRoutes/>
    <Footer/>
    </div>
  );
}

export default App;
