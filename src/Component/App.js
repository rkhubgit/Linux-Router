import { Route, Routes } from 'react-router-dom';
// import './App.css';
import { AuthContext } from './Context/AuthContext';
import { Header } from './Header';
import { Navigator } from './Navigator/Navigator';
import { Home } from './Page/Home';
import { Login } from './Page/Login';
import { MyOrders } from './Page/MyOrder';
import { PageNotFound } from './Page/PageNotFound';
import { Product } from './Page/Product';
import { Profile } from './Page/Profile';
import { Signup } from './Page/Signup';
import { User } from './Page/User'

function App() {
  return (
    <AuthContext>
    <div className="App">
      <h1 className='bg-dark'>React Router</h1>
      <Header/>
      {/* <Home/>
      <Profile/>
      <Login/> */}
      <Routes>
        <Route path='/' element={<h3>Welcome to my App</h3>}/>
        <Route path='/homepage' element={<Navigator><Home/></Navigator>}/>
        <Route path='profile/*' element={<Navigator><Profile/></Navigator>}>
          <Route path='myorders' element={<MyOrders/>}/>
          <Route path='mywishlist' element={<div>My wishlist page</div>}/>
          <Route path='myaddress' element={<div>My address page</div>}/>
        </Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>

        {/* <Route path='*' element={<div>Page not found</div>}/> */}
        <Route path='*' element={<PageNotFound/>}/>
        {/* to add the id's value dynamically in the URL */}
        <Route path='/user/:userId/:userType' element={<User/>}/>
        <Route path='/product' element={<Product/>}/>
      </Routes>
      <br/>
      <footer>this is footer</footer>
    </div>
    </AuthContext>
  );
}

export default App;