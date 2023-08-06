import './App.css';
import { Card } from './component';
import Footer from './component/Footer';
import Header from './component/Header';
import AllRoutes from './routes/AllRoutes';

function App() {
  return (
    <div className="App">
    <Header/>
    <AllRoutes/>
    <Card/>
    <Footer/>
    </div>
  );
}

export default App;
