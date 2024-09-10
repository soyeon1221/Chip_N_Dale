// 모달창 여닫기
// https://seoyun-is-connecting-the-dots.tistory.com/321

import { Link } from 'react-router-dom';

export default function Modal() {
  return (
    <div className='modal'>
      <div>
        {/* <Link> 컴포넌트를 사용하여 페이지 내에서 라우팅 */}
        <Link to="/daiso" className='modal_menu'>다이소</Link>
      </div>
      <div>
      <Link to="/shop" className='modal_menu'>소품샵</Link>
      </div>
    </div>
  )
}