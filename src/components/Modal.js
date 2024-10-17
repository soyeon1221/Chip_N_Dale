// 모달창 여닫기
// https://seoyun-is-connecting-the-dots.tistory.com/321

import { Link } from 'react-router-dom';

export default function Modal() {
  return (
    <div className='modal'>
      {/* <Link> 컴포넌트를 사용하여 페이지 내에서 라우팅 */}
      <div>
        <Link to="/" className='modal_menu'>전체보기</Link>
      </div>
      <div>
        <Link to="/doll" className='modal_menu'>인형</Link>
      </div>
      <div>
        <Link to="/figures" className='modal_menu'>피규어</Link>
      </div>
      <div>
        <Link to="/stationery" className='modal_menu'>문구류</Link>
      </div>
      <div>
        <Link to="/living" className='modal_menu'>생활 / 주방용품</Link>
      </div>
      <div>
        <Link to="/bag" className='modal_menu'>가방 / 잡화</Link>
      </div>
      <div>
        <Link to="/digital" className='modal_menu'>디지털</Link>
      </div>
      <div>
        <Link to="/etc" className='modal_menu'>기타</Link>
      </div>
    </div>
  )
}