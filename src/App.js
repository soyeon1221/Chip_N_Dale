import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Doll from './components/Doll';
import Figures from './components/Figures';
import Main from './components/Main';
import Stationery from './components/Stationery';
import Living from './components/Living';
import Bag from './components/Bag';
import Digital from './components/Digital';
import Etc from './components/Etc';

export default function App() {
  // { src: '/images/.jpg', alt: '', description: '' },
  const dollImages = [
    { src: '/images/호랑이 인형.jpg', alt: '호랑이 인형', description: '2022년 호랑이해 기념해서 나온 인형' },
    { src: '/images/하얀망토 인형.jpg', alt: '하얀망토 인형', description: '승호가 올어바웃캐릭터에서 사준 인형' },
    { src: '/images/멍청 인형.jpg', alt: '멍청 인형', description: '승호가 올어바웃캐릭터에서 사준 인형' },
    { src: '/images/버섯 인형.jpg', alt: '버섯 인형', description: '2022년에 생일선물로 받은 인형 \n칩 : 경민언니 \n데일 : 혜영언니' },
    { src: '/images/티슈보관 인형.jpg', alt: '티슈보관 인형', description: '승호가 사준 각티슈 보관함' },
    { src: '/images/에어팟 가방.jpg', alt: '에어팟 가방', description: '에어팟 넣을 수 있는 작은 가방' },
    { src: '/images/키크니 인형.jpg', alt: '키크니 인형', description: '승호가 올어바웃캐릭터에서 사준 인형' },
    { src: '/images/납작 인형.jpg', alt: '납작 인형', description: '다이소 인형' },
    { src: '/images/데일 얼굴 인형.jpg', alt: '데일 얼굴 인형', description: '다이소 인형' },
  ];

  const figuresImages = [
    { src: '/images/수원역 피규어.jpg', alt: '수원역 피규어', description: '수원역 스모어마켓에서 가챠해서 \n한번에 칩데 데려오기 성공!' },
    { src: '/images/훌라후프 피규어.jpg', alt: '훌라후프 피규어', description: '조립하면 훌라후프 들고있는 피규어' },
    { src: '/images/팝마트 피규어4.jpg', alt: '선장님 칩 피규어', description: '금손 승호가 뽑아준 칩데 랜덤피규어' },
    { src: '/images/팝마트 피규어5.jpg', alt: '작은 밭 칩 피규어', description: '2023년에 혜영언니한테 생일선물로 받은 \n칩데 랜덤피규어' },
    { src: '/images/팝마트 피규어6.jpg', alt: '견과류 부엌 피규어', description: '2023년에 혜영언니한테 생일선물로 받은 \n칩데 랜덤피규어' },
    { src: '/images/팝마트 피규어.jpg', alt: '비밀기지 데일 피규어', description: '공주커플이 사준 칩데 랜덤피규어' },
    { src: '/images/팝마트 피규어2.jpg', alt: '열기구 여행 피규어', description: '공주커플이 사준 칩데 랜덤피규어' },
    { src: '/images/팝마트 피규어3.jpg', alt: '식량 비축 데일 피규어', description: '공주커플이 사준 칩데 랜덤피규어' },
    { src: '/images/팝마트 피규어7.jpg', alt: '삼림욕 피규어', description: '공주커플이 사준 칩데 랜덤피규어' },
    { src: '/images/.jpg', alt: '', description: '' },
  ];

  const stationeryImages = [
    { src: '/images/.jpg', alt: '', description: '' },
  ];

  const livingImages = [
    { src: '/images/하겐다즈.jpg', alt: '하겐다즈 우드트레이', description: '2022년에 주연이한테 생일선물로 받은\n우드트레이' },
    { src: '/images/.jpg', alt: '', description: '' },
    { src: '/images/.jpg', alt: '', description: '' },
  ];

  const bagImages = [
    { src: '/images/동전 지갑.jpg', alt: '양면 동전 지갑', description: '혜영언니가 사준 양면 \n칩데 동전지갑' },
    { src: '/images/.jpg', alt: '', description: '' },
    { src: '/images/.jpg', alt: '', description: '' },
  ];

  const digitalImages = [
    { src: '/images/커플 케이스.jpg', alt: '커플 케이스', description: '승호랑 커플 케이스' },
    { src: '/images/.jpg', alt: '', description: '' },
    { src: '/images/.jpg', alt: '', description: '' },
  ];

  const etcImages = [
    { src: '/images/.jpg', alt: '', description: '' },
  ];

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path="/" 
          element={
            <Main 
              dollImages={dollImages} 
              figuresImages={figuresImages} 
              stationeryImages={stationeryImages} 
              livingImages={livingImages} 
              bagImages={bagImages}
              digitalImages={digitalImages}
              etcImages={etcImages}
            />
          } 
        />
        <Route path="/doll" element={<Doll images={dollImages} />} />
        <Route path="/figures" element={<Figures images={figuresImages} />} />
        <Route path="/stationery" element={<Stationery images={stationeryImages} />} />
        <Route path="/living" element={<Living images={livingImages} />} />
        <Route path="/bag" element={<Bag images={bagImages} />} />
        <Route path="/digital" element={<Digital images={digitalImages} />} />
        <Route path="/etc" element={<Etc images={etcImages} />} />
        {/* 필요한 다른 라우트 추가 */}
      </Routes>
    </Router>
  );
}
