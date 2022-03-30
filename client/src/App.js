import {Routes, Route} from 'react-router-dom';
import Home from "./components/home/Home";
import Products from './pages/products';
import Navigation from './pages/navigation';
import Signin from './pages/signin';
import Register from './pages/register';
import Authenticate from './pages/authenticate/Authenticate';


function App() {
  const signin = {
    name: "Login",
    desc: 'Get access to your Orders, Wishlist and Recommendations.'
  }
  const signup = {
    name: "Signup",
    desc: 'We do not share your personal details with anyone.'
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}/>
        <Route path='products' element={<Products />} />
        <Route path='sign-in' element={<Authenticate {...signin}><Signin /></Authenticate>} />
        <Route path='/register' element={<Authenticate {...signup}><Register /></Authenticate>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
