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
    { src: '/images/doll/대형 인형.jpg', alt: '대형 인형', description: '승호가 [메이언니잡화점]에서 사준 대형 인형' },
    { src: '/images/doll/하얀망토 인형.jpg', alt: '하얀망토 인형', description: '승호가 [올어바웃캐릭터]에서 사준 인형' },
    { src: '/images/doll/멍청 인형.jpg', alt: '멍청 인형', description: '승호가 [올어바웃캐릭터]에서 사준 인형' },
    { src: '/images/doll/호랑이 인형.jpg', alt: '호랑이 인형', description: '승호가 [올어바웃캐릭터]에서 사준 \n2022년 호랑이해 기념해서 나온 인형' },
    { src: '/images/doll/버섯 인형.jpg', alt: '버섯 인형', description: '2022년에 생일선물로 받은 인형 \n칩 : 경민언니 \n데일 : 혜영언니' },
    { src: '/images/doll/키크니 인형.jpg', alt: '키크니 인형', description: '승호가 [올어바웃캐릭터]에서 사준 인형' },
    { src: '/images/doll/납작 인형.jpg', alt: '납작 인형', description: '[다이소] 인형' },
    { src: '/images/doll/데일 얼굴 인형.jpg', alt: '데일 얼굴 인형', description: '[다이소] 인형' },
    { src: '/images/doll/가방고리 인형.jpg', alt: '가방고리 인형', description: '2016년도에 주연이가 [스퀘어원]에서 뽑아준 인형' },
    { src: '/images/doll/디즈니랜드 인형.jpg', alt: '디즈니랜드 인형', description: '2017년도에 주연이가 친구한테 부탁해서 \n[일본 디즈니랜드]에서 사다 준 인형 \n가방에 달고 다니다가 잃어버림..ㅜ_ㅜ' },
    { src: '/images/doll/.jpg', alt: '', description: '' },
    { src: '/images/doll/.jpg', alt: '', description: '' },
    { src: '/images/doll/.jpg', alt: '', description: '' },
  ];

  // 피규어
  const figuresImages = [
    // { src: '/images/figures/.jpg', alt: '', description: '' },
    { src: '/images/figures/수원역 피규어.jpg', alt: '수원역 피규어', description: '[수원역 스모어마켓]에서 가챠해서 \n한번에 칩데 데려오기 성공!' },
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
    { src: '/images/bag/에어팟 가방.jpg', alt: '에어팟 가방', description: '에어팟 넣을 수 있는 작은 가방' },
    { src: '/images/bag/얼굴파우치.jpg', alt: '얼굴파우치', description: '우연히 들어간 [이와야방배] 소품샵에서 \n승호가 사준 칩 얼굴 파우치' },
    { src: '/images/bag/머플러.jpg', alt: '머플러', description: '[텐바이텐] 칩앤데일 머플러' },
    { src: '/images/bag/터치백.jpg', alt: '터치백', description: '자수 칩앤데일 터치백' },
  ];

  // 생활 / 주방용품
  const livingImages = [
    // { src: '/images/living/.jpg', alt: '', description: '' },
    { src: '/images/living/하겐다즈.jpg', alt: '하겐다즈 우드트레이', description: '2022년에 주연이한테 생일선물로 받은\n우드트레이' },
    { src: '/images/living/티슈보관 인형.jpg', alt: '티슈보관 인형', description: '승호가 사준 각티슈 보관함' },
    { src: '/images/living/소주잔.jpg', alt: '소주잔', description: '망원역 [버섯이네잡화점]에서 \n승호가 사준 칩앤데일 소주잔' },
    { src: '/images/living/실내화.jpg', alt: '실내화', description: '엄마가 사준 실내화 \n지금까지 신었던 실내화중에 최고!' },
    { src: '/images/living/젓가락.jpg', alt: '젓가락', description: '주연이 / 혜엉언니가 사준 \n칩앤데일 정품 젓가락' },
    { src: '/images/living/발매트.jpg', alt: '발매트', description: '[다이소] 발매트' },
    { src: '/images/living/주방장갑.jpg', alt: '주방장갑', description: '[다이소] 주방장갑' },
    { src: '/images/living/핸드타월.jpg', alt: '핸드타월', description: '[다이소] 핸드타월' },
    { src: '/images/living/핸드타월2.jpg', alt: '핸드타월2', description: '[다이소] 핸드타월2' },
    { src: '/images/living/수세미홀더.jpg', alt: '수세미홀더', description: '[다이소] 수세미홀더' },
    { src: '/images/living/페이스타월.jpg', alt: '페이스타월', description: '[다이소] 페이스타월' },
    { src: '/images/living/.jpg', alt: '', description: '' },
  ];

  // 문구류
  const stationeryImages = [
    // { src: '/images/stationery/.jpg', alt: '', description: '' },
    { src: '/images/stationery/메모패드.jpg', alt: '메모패드', description: '[다이소] 메모패드' },
    { src: '/images/stationery/마스킹 테이프.jpg', alt: '마스킹 테이프', description: '[다이소] 마스킹 테이프' },
    { src: '/images/stationery/편지지.jpg', alt: '편지지', description: '[다이소] 편지지' },
    { src: '/images/stationery/편지지2.jpg', alt: '편지지2', description: '소품샵에서 구매한 편지지' },
    { src: '/images/stationery/.jpg', alt: '', description: '' },
    { src: '/images/stationery/.jpg', alt: '', description: '' },
  ];

  // 디지털
  const digitalImages = [
    // { src: '/images/digital/.jpg', alt: '', description: '' },
    { src: '/images/digital/노트북 파우치.jpg', alt: '노트북 파우치', description: '2023년에 아정이가 생일선물로 사준 \n노트북 파우치' },
    { src: '/images/digital/보조배터리.jpg', alt: '보조배터리', description: '[로이체] 손난로 보조배터리' },
    { src: '/images/digital/무선 마우스.jpg', alt: '무선 마우스', description: '[로이체] 무선 마우스' },
    { src: '/images/digital/커플 케이스.jpg', alt: '커플 케이스', description: '승호랑 커플 케이스' },
    { src: '/images/digital/그립톡.jpg', alt: '그립톡', description: '[다이소] 그립톡' },
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
