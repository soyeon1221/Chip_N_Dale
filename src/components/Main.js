
// export default function Main() {
//   return (
//     <>
//       <div className="main">
//         <div className="main_wrap">
//           <ul className="main_box">
//             <li className="main_items">
//               <img src={process.env.PUBLIC_URL + '/images/호랑이 인형.jpg'} />
//               <div>인형</div>
//             </li>
//             <li className="main_items">
//               <img src={process.env.PUBLIC_URL + '/images/하얀망토 인형.jpg'} />
//               <div>인형</div>
//             </li>
//             <li className="main_items">
//               <img src={process.env.PUBLIC_URL + '/images/티슈보관 인형.jpg'} />
//               <div>인형</div>
//             </li>
//           </ul>
//           <ul className="main_box">
//             <li className="main_items">
//               <img src={process.env.PUBLIC_URL + '/images/수원역 피규어.jpg'} />
//               <div>피규어</div>
//             </li>
//             <li className="main_items">
//               <img src={process.env.PUBLIC_URL + '/images/하겐다즈.jpg'} />
//               <div>피규어</div>
//             </li>
//             <li className="main_items">
//               <img src={process.env.PUBLIC_URL + '/images/훌라후프 피규어.jpg'} />
//               <div>피규어</div>
//             </li>
//           </ul>
//           <ul className="main_box">
//             <li className="main_items">
//               <img src={process.env.PUBLIC_URL + '/images/팝마트 피규어.jpg'} />
//               <div>피규어</div>
//             </li>
//             <li className="main_items">
//               <img src={process.env.PUBLIC_URL + '/images/팝마트 피규어2.jpg'} />
//               <div>피규어</div>
//             </li>
//             <li className="main_items">
//               <img src={process.env.PUBLIC_URL + '/images/팝마트 피규어3.jpg'} />
//               <div>피규어</div>
//             </li>
//           </ul>
//           <ul className="main_box">
//             <li className="main_items">
//               <img src={process.env.PUBLIC_URL + '/images/팝마트 피규어4.jpg'} />
//               <div>피규어</div>
//             </li>
//             <li className="main_items">
//               <img src={process.env.PUBLIC_URL + '/images/팝마트 피규어5.jpg'} />
//               <div>피규어</div>
//             </li>
//             <li className="main_items">
//               <img src={process.env.PUBLIC_URL + '/images/팝마트 피규어6.jpg'} />
//               <div>피규어</div>
//             </li>
//           </ul>
//           <ul className="main_box">
//             <li className="main_items">
//               <img src={process.env.PUBLIC_URL + '/images/팝마트 피규어7.jpg'} />
//               <div>피규어</div>
//             </li>
//             <li className="main_items">
//               <img src={process.env.PUBLIC_URL + '/images/동전 지갑.jpg'} />
//               <div>지갑</div>
//             </li>
//             <li className="main_items">
//               {/* <img src={process.env.PUBLIC_URL + '/images/팝마트 피규어6.jpg'} /> */}
//               <div></div>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </>
//   )
// }

import { useState } from 'react';
import ImageModal from './ImageModal';

export default function Main({ dollImages = [], figuresImages = [] }) {
  // dollImages와 figuresImages라는 props를 받아온다
  // 기본값을 빈 배열로 설정되어 있어 props가 제공되지 않을 경우에도 코드가 정상 작동한다

  const [selectedImage, setSelectedImage] = useState(null); 
  // 선택된 이미지를 저장하는 상태 변수 (초기값은 null)
  // setSelectedImage : selectedImage 상태를 업데이트하는 함수

  const openModal = (image) => {
    setSelectedImage(image); // 클릭한 이미지를 설정
  };
  // 클릭한 이미지를 인자로 받아 selectedImage 상태를 해당 이미지로 업데이트한다

  const closeModal = () => {
    setSelectedImage(null); // 모달 닫기
  };
  // selectedImage 상태를 null로 설정하여 모달을 닫는다

  return (
    <>
      <div className="main">
        <div className="main_wrap">
          <div>
            {/* <h2>Doll 상품</h2> */}
            <ul className="main_box">
              {dollImages.map((image, index) => (
                <li className="main_items" key={index} onClick={() => openModal(image)}>
                  <img src={process.env.PUBLIC_URL + image.src} alt={image.alt} />
                  {/* <div>{image.alt}</div> */}
                </li>
              ))}
            </ul>
          </div>

          <div>
            {/* <h2>Figures 상품</h2> */}
            <ul className="main_box">
              {figuresImages.map((image, index) => (
                <li className="main_items" key={index} onClick={() => openModal(image)}>
                  <img src={process.env.PUBLIC_URL + image.src} alt={image.alt} />
                  {/* <div>{image.alt}</div> */}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ImageModal image={selectedImage} onClose={closeModal} /> {/* ImageModal 추가 */}
      </div>
    </>
  );

  // 1. map()
  // {figuresImages.map((image, index) => (...)}
  // map은 배열의 각 요소에 대해 주어진 함수를 호출하여 새로운 배열을 반환하는 javascript의 배열 메서드이다
  // (여기서는 배열의 각 이미지 객체에 대해 반복 작업을 수행한다)
  // dollImages : Main 컴포넌트의 props로 전달된 이미지 객체 배열이다. 각 객체는 이미지의 src와 alt 속성을 포함한다
  // 콜백 함수 (image, index) : map 함수는 두개의 인자를 받는다
  // image : 현재 반복 중인 이미지의 객체이다 (이 객체는 { src, alt } 형식이다)
  // index : 현재 이미지의 배열 인덱스이다. 주로 key 속성으로 사용된다

  // 2. JSX 요소 반환
  // <li className="main_items" key={index} onClick={() => openModal(image)}>
  // key={index} : React에서 각 리스트 아이템에 고유한 키 값을 부여하여 렌더링 최적화를 돕는다
  // onClick={() => openModal(image) : 이미지를 클릭했을때 openModal 함수를 호출한다

  // 3. 이미지 렌더링
  // <img src={process.env.PUBLIC_URL + image.src} alt={image.alt} />
  // process.env.PUBLIC_URL : React 앱의 public 디렉토리 경로를 자동으로 가져온다
  // image.src : 현재 이미지 객체의 src 속성을 참조하여 실제 이미지 파일의 경로를 만든다

  // 4. ImageModal
  // ImageModal 컴포넌트를 추가하여 현재 선택된 이미지를 모달에 전달한다
  // selectedImage가 null이 아닐 경우 모달이 표시되고, 모달을 닫으면 closeModal 함수를 호출하여 상태를 업데이트한다
}