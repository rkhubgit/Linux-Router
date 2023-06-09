import React from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { AuthContext } from './Component/Context/AuthContext'
import { Header } from './Component/Header';
import { Navigator } from './Component/Navigator/Navigator';
import { Home } from './Component/Page/Home';
import { Login } from './Component/Page/Login';
import { MyOrders } from './Component/Page/MyOrder';
import { PageNotFound } from './Component/Page/PageNotFound';
import { Product } from './Component/Page/Product';
import { Profile } from './Component/Page/Profile';
import { Signup } from './Component/Page/Signup';
import { User } from './Component/Page/User'

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