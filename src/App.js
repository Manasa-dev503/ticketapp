import './App.css';
import { Link, Outlet } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from './shared/Header';


function App() {
  return (
  <div>
    <div>
      <Header></Header>
      <Outlet></Outlet>

    </div>
    
  </div>
  );
}

export default App;
