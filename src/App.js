import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Doll from './components/Doll';
import Figures from './components/Figures';
import Main from './components/Main';

export default function App() {
  const dollImages = [
    { src: '/images/호랑이 인형.jpg', alt: '호랑이 인형', description: '2022년 호랑이해 기념해서 나온 인형' },
    { src: '/images/하얀망토 인형.jpg', alt: '하얀망토 인형', description: '승호가 올어바웃캐릭터에서 사준 인형' },
    { src: '/images/티슈보관 인형.jpg', alt: '티슈보관 인형', description: '승호가 사준 각티슈 보관함' },
  ];

  const figuresImages = [
    { src: '/images/수원역 피규어.jpg', alt: '수원역 피규어', description: '수원역 스모어마켓에서 가챠해서\n한번에 칩데 데려오기 성공!' },
    { src: '/images/하겐다즈.jpg', alt: '하겐다즈', description: '2022년에 주연이한테 생일선물로 받은\n우드트레이' },
    { src: '/images/훌라후프 피규어.jpg', alt: '훌라후프 피규어', description: '조립하면 훌라후프 들고있는 피규어' },
  ];

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path="/" element={<Main dollImages={dollImages} figuresImages={figuresImages} />} />
        <Route path="/doll" element={<Doll images={dollImages} />} />
        <Route path="/figures" element={<Figures images={figuresImages} />} />
        {/* 필요한 다른 라우트 추가 */}
      </Routes>
    </Router>
  );
}
