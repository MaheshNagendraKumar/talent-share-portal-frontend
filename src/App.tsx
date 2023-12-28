import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/registration/Register';
import Dashboard from './pages/dashBoard/Dashboard';
import { Provider } from 'react-redux';
import store from './store/store';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<><Home /></>} />
            <Route path='/register' element={<><Register /></>} />
            <Route path='/login' element={<><Login /></>} />
            <Route path='/dashboard' element={<><Dashboard /></>} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
