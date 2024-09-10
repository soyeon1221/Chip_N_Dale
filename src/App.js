import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Daiso from './components/Daiso';
import Shop from './components/Shop';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/daiso" element={<Daiso />} />
        <Route path="/shop" element={<Shop />} />
        {/* 필요한 다른 라우트 추가 */}
      </Routes>
    </Router>
  );
}
