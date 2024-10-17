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
  // 인형
  const dollImages = [
    // { src: '/images/doll/.jpg', alt: '', description: '' },
    { src: '/images/doll/호랑이 인형.jpg', alt: '호랑이 인형', description: '2022년 호랑이해 기념해서 나온 인형' },
    { src: '/images/doll/하얀망토 인형.jpg', alt: '하얀망토 인형', description: '승호가 올어바웃캐릭터에서 사준 인형' },
    { src: '/images/doll/멍청 인형.jpg', alt: '멍청 인형', description: '승호가 올어바웃캐릭터에서 사준 인형' },
    { src: '/images/doll/버섯 인형.jpg', alt: '버섯 인형', description: '2022년에 생일선물로 받은 인형 \n칩 : 경민언니 \n데일 : 혜영언니' },
    { src: '/images/doll/키크니 인형.jpg', alt: '키크니 인형', description: '승호가 올어바웃캐릭터에서 사준 인형' },
    { src: '/images/doll/납작 인형.jpg', alt: '납작 인형', description: '다이소 인형' },
    { src: '/images/doll/데일 얼굴 인형.jpg', alt: '데일 얼굴 인형', description: '다이소 인형' },
    { src: '/images/doll/가방고리 인형.jpg', alt: '가방고리 인형', description: '2016년도에 주연이가 스퀘어원에서 뽑아준 인형' },
    { src: '/images/doll/디즈니랜드 인형.jpg', alt: '디즈니랜드 인형', description: '2017년도에 주연이가 친구한테 부탁해서 \n일본 디즈니랜드에서 사다 준 인형 \n가방에 달고 다니다가 잃어버림..ㅜ_ㅜ' },
    { src: '/images/doll/.jpg', alt: '', description: '' },
    { src: '/images/doll/.jpg', alt: '', description: '' },
    { src: '/images/doll/.jpg', alt: '', description: '' },
  ];

  // 피규어
  const figuresImages = [
    // { src: '/images/figures/.jpg', alt: '', description: '' },
    { src: '/images/figures/수원역 피규어.jpg', alt: '수원역 피규어', description: '수원역 스모어마켓에서 가챠해서 \n한번에 칩데 데려오기 성공!' },
    { src: '/images/figures/훌라후프 피규어.jpg', alt: '훌라후프 피규어', description: '조립하면 훌라후프 들고있는 피규어' },
    { src: '/images/figures/팝마트 피규어4.jpg', alt: '선장님 칩 피규어', description: '금손 승호가 뽑아준 칩데 랜덤피규어' },
    { src: '/images/figures/팝마트 피규어5.jpg', alt: '작은 밭 칩 피규어', description: '2023년에 혜영언니한테 생일선물로 받은 \n칩데 랜덤피규어' },
    { src: '/images/figures/팝마트 피규어6.jpg', alt: '견과류 부엌 피규어', description: '2023년에 혜영언니한테 생일선물로 받은 \n칩데 랜덤피규어' },
    { src: '/images/figures/팝마트 피규어.jpg', alt: '비밀기지 데일 피규어', description: '공주커플이 사준 칩데 랜덤피규어' },
    { src: '/images/figures/팝마트 피규어2.jpg', alt: '열기구 여행 피규어', description: '공주커플이 사준 칩데 랜덤피규어' },
    { src: '/images/figures/팝마트 피규어3.jpg', alt: '식량 비축 데일 피규어', description: '공주커플이 사준 칩데 랜덤피규어' },
    { src: '/images/figures/팝마트 피규어7.jpg', alt: '삼림욕 피규어', description: '공주커플이 사준 칩데 랜덤피규어' },
    { src: '/images/figures/.jpg', alt: '', description: '' },
  ];

  // 가방 / 잡화
  const bagImages = [
    // { src: '/images/bag/.jpg', alt: '', description: '' },
    { src: '/images/bag/지갑.jpg', alt: '잃어버린 지갑', description: '2020년에 아빠가 사준 지갑 \n술먹고 자전거타다가 잃어버림...ㅜ-ㅜ' },
    { src: '/images/bag/동전 지갑.jpg', alt: '양면 동전 지갑', description: '혜영언니가 사준 양면 \n칩데 동전지갑' },
    { src: '/images/doll/에어팟 가방.jpg', alt: '에어팟 가방', description: '에어팟 넣을 수 있는 작은 가방' },
    { src: '/images/bag/.jpg', alt: '', description: '' },
  ];

  // 생활 / 주방용품
  const livingImages = [
    // { src: '/images/living/.jpg', alt: '', description: '' },
    { src: '/images/living/하겐다즈.jpg', alt: '하겐다즈 우드트레이', description: '2022년에 주연이한테 생일선물로 받은\n우드트레이' },
    { src: '/images/doll/티슈보관 인형.jpg', alt: '티슈보관 인형', description: '승호가 사준 각티슈 보관함' },
    { src: '/images/living/.jpg', alt: '', description: '' },
  ];

  // 문구류
  const stationeryImages = [
    // { src: '/images/stationery/.jpg', alt: '', description: '' },
    { src: '/images/stationery/.jpg', alt: '', description: '' },
  ];

  // 디지털
  const digitalImages = [
    // { src: '/images/digital/.jpg', alt: '', description: '' },
    { src: '/images/digital/커플 케이스.jpg', alt: '커플 케이스', description: '승호랑 커플 케이스' },
    { src: '/images/digital/.jpg', alt: '', description: '' },
    { src: '/images/digital/.jpg', alt: '', description: '' },
  ];

  // 기타
  const etcImages = [
    // { src: '/images/etc/.jpg', alt: '', description: '' },
    { src: '/images/etc/.jpg', alt: '', description: '' },
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
              bagImages={bagImages}
              livingImages={livingImages} 
              stationeryImages={stationeryImages} 
              digitalImages={digitalImages}
              etcImages={etcImages}
            />
          } 
        />
        <Route path="/doll" element={<Doll images={dollImages} />} />
        <Route path="/figures" element={<Figures images={figuresImages} />} />
        <Route path="/bag" element={<Bag images={bagImages} />} />
        <Route path="/living" element={<Living images={livingImages} />} />
        <Route path="/stationery" element={<Stationery images={stationeryImages} />} />
        <Route path="/digital" element={<Digital images={digitalImages} />} />
        <Route path="/etc" element={<Etc images={etcImages} />} />
        {/* 필요한 다른 라우트 추가 */}
      </Routes>
    </Router>
  );
}
