import { useEffect, useState } from 'react';
import main from './main.png';
import Modal from './Modal';
import { useLocation, Link } from 'react-router-dom';

// useState와 useEffect는 React의 훅으로 상태 관리와 사이드 이펙트 처리에 사용한다
// useLocation은 react-router-dom에서 제공하는 훅으로 현재 URL 경로를 추적한다

export default function Header() {
  // Header 함수형 컴포넌트는 React의 기본 컴포넌트 형태이다

  const [modal, setModal] = useState(false);
  // modal은 모달의 열림 상태를 나타내는 불리언 값이다
  // 초기값은 false로 설정되어 있어 모달이 기본적으로 닫혀있다
  // setModal은 modal의 값을 업데이트하는 함수이다

  const location = useLocation();
  // useLocation 훅을 사용하여 현재 URL 경로를 추적한다
  // URL이 변경되면 location 객체가 업데이트된다

  // 경로가 변경될 때 모달을 닫도록 설정
  useEffect(() => {
    setModal(false);
  }, [location]);
  // useEffect 훅은 location이 변경될 때마다 실행된다
  // URL경로가 변경될때마다 setModal(false)가 호출되어 모달을 닫는다
  // 의존성 배열 [location]은 location이 변경될 때만 이 useEffect 훅이 실행된다

  // JSX
  return (
    <>
      <div className='header'>
        <div>
          <div 
            className='menu' 
            onClick={ ()=>{ setModal(!modal) }}
          >
            &#9776;
          </div>
          {modal && <Modal />}
        </div>
        <Link to='/' className='main-name'>Chip 'N Dale</Link>
        <img className='main-img' src={main} width='200px' alt='Main' />
      </div>
    </>
  )
  // <div className='menu' onClick={() => setModal(!modal)}>&#9776;</div>
  // 메뉴 버튼을 클릭하면 setModal(!modal)이 호출되어 modal 상태가 반전된다

  // {modal && <Modal />}
  // 논리 연산자(&&) 사용
  // modal이 true일 때만 <Modal /> 컴포넌트가 렌더링된다
  // modal이 flase이면 <Modal />은 렌더링되지 않는다

}