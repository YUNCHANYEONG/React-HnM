import {Routes, Route} from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar';
import Login from './pages/Login';
import ProductAll from './pages/ProductAll';
import ProductDetail from './pages/ProductDetail';
import PrivateRoute from './route/PrivateRoute';

// 1. 전체 상품 페이지, 로그인, 상품 상세 페이지
// 1-1. 네비게이션 바
// 2. 전체 상품 페이지에서는 전체 상품을 볼 수 있다.
// 3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
// 4. 로그인이 되어있을 경우에는 상품 디테일 페이지르 볼 수 있다.
// 5. 로그아웃 버튼을 클릭하면 로그아웃이 된다.
// 6. 로그아웃이 되면 상품 디테일 페이지를 볼 수 없다. 다시 로그인 페이지가 보인다.
// 7. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다.
// 8. 상품을 검색할 수 있다.


function App() {
const [authenticate, setAuthenticate] = useState(false);

  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate}/>
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login setAuthenticate = {setAuthenticate}/>} />
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate}/>} />
      </Routes>
    </div>
  );
}

export default App;
