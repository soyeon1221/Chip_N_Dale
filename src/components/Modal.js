// 모달창 여닫기
// https://seoyun-is-connecting-the-dots.tistory.com/321

import { Link } from 'react-router-dom';

export default function Modal() {
  return (
    <div className='modal'>
      <div>
        {/* <Link> 컴포넌트를 사용하여 페이지 내에서 라우팅 */}
        <Link to="/doll" className='modal_menu'>인형</Link>
      </div>
      <div>
        <Link to="/figures" className='modal_menu'>피규어</Link>
      </div>
    </div>
  )
}