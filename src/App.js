import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideNav from './components/_SideNav'
import Description from './components/_Description';

function App() {
  return (
    <div className="App">
      {/* <Description/> */}
      <SideNav/>
    </div>
  );
}

export default App;
