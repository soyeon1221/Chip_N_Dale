
// export default function Main() {
//   return (
//     <>
//       <div className="main">
//         <div className="main_wrap">
//           <ul className="main_grouped">
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
//           <ul className="main_grouped">
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
//           <ul className="main_grouped">
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
//           <ul className="main_grouped">
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
//           <ul className="main_grouped">
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
import { Link } from 'react-router-dom';
import ImageModal from './ImageModal';

export default function Main({ dollImages = [], figuresImages = [] }) {
  // dollImages와 figuresImages라는 props를 받아온다
  // 기본값을 빈 배열로 설정되어 있어 props가 제공되지 않을 경우에도 코드가 정상 작동한다

  const [selectedImage, setSelectedImage] = useState(null); 
  // 선택된 이미지를 저장하는 상태 변수 (초기값은 null)
  // setSelectedImage : selectedImage 상태를 업데이트하는 함수

  const [visibleGroups, setVisibleGroups] = useState(2); 
  // 기본적으로 2개 그룹(6개 이미지) 표시
  // useState 훅을 사용하여 visibleGroups라는 상태 변수를 생성 (현재 보이는 이미지 그룹의 수를 나타낸다)

  const openModal = (image) => {
    setSelectedImage(image); // 클릭한 이미지를 설정
  };
  // 클릭한 이미지를 인자로 받아 selectedImage 상태를 해당 이미지로 업데이트한다

  const closeModal = () => {
    setSelectedImage(null); // 모달 닫기
  };
  // selectedImage 상태를 null로 설정하여 모달을 닫는다

  // 이미지를 그룹화하는 함수 (한 그룹에 3개의 이미지가 포함된다)
  const groupImages = (images, groupSize) => {
    const groups = []; // 그룹들을 저장할 배열을 초기화
    for (let i = 0; i < images.length; i += groupSize) {
      // images 배열을 groupSize 단위로 잘라서 group에 추가한다
      groups.push(images.slice(i, i + groupSize));
    }
    return groups; // 그룹화된 배열을 반환
  };

  const groupedDollImages = groupImages(dollImages, 3);
  // dollImages를 3개씩 그룹화한 결과

  const groupedFiguresImages = groupImages(figuresImages, 3);
  // figuresImages를 3개씩 그룹화한 결과

  return (
    <>
      <div className="main">
        <div className="main_wrap">
          <div className='main_box'>
            <div className='main-title'>
              <h2>인형</h2>
              <Link to="/doll" className='more'>더보기</Link>
            </div>
            {groupedDollImages.slice(0, visibleGroups).map((group, index) => (
              <ul className="main_grouped" key={index}>
                {group.map((image, idx) => (
                  <li className="main_items" key={idx} onClick={() => openModal(image)}>
                    <img src={process.env.PUBLIC_URL + image.src} alt={image.alt} />
                    {/* <div>{image.alt}</div> */}
                  </li>
                ))}
              </ul>
            ))}
          </div>

          <div className='main_box'>
            <div className='main-title'>
              <h2>피규어</h2>
              <Link to="/figures" className='more'>더보기</Link>
            </div>
            {groupedFiguresImages.slice(0, visibleGroups).map((group, index) => (
              <ul className="main_grouped" key={index}>
                {group.map((image, idx) => (
                  <li className="main_items" key={idx} onClick={() => openModal(image)}>
                    <img src={process.env.PUBLIC_URL + image.src} alt={image.alt} />
                    {/* <div>{image.alt}</div> */}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <ImageModal image={selectedImage} onClose={closeModal} /> {/* ImageModal 추가 */}
      </div>
    </>
  );

  // 1. 
  // {groupedDollImages.slice(0, visibleGroups).map((group, index) => (...)}
  // groupedDollImages.slice(0, visibleGroups)는 groupedDollImages배열에서 인덱스 0부터 visibleGroups(여기서는 2)까지의 그룹을 잘라서 가져온다
  // map 함수를 사용하여 가져온 그룹들 각각 <ul>요소를 생성한다. 이때 key로 인덱스를 사용한다
  // slice 메서드
    // 배열의 일부를 선택하여 새로운 배열을 반환한다
    // array.slice(start, end)
      // start : 선택할 배열의 시작 인덱스 (기본값은 0)
      // end  : 선택할 배열의 끝 인덱스 (기본값은 배열의 길이)

  // 2.
  // {group.map((image, idx) => (...)}
  // map은 배열의 각 요소에 대해 주어진 함수를 호출하여 새로운 배열을 반환하는 javascript의 배열 메서드이다
  // (여기서는 배열의 각 이미지 객체에 대해 반복 작업을 수행한다)
  // dollImages : Main 컴포넌트의 props로 전달된 이미지 객체 배열이다. 각 객체는 이미지의 src와 alt 속성을 포함한다
  // 콜백 함수 (image, idx) : map 함수는 두개의 인자를 받는다
  // image : 현재 반복 중인 이미지의 객체이다 (이 객체는 { src, alt } 형식이다)
  // idx : 현재 이미지의 배열 인덱스이다. 주로 key 속성으로 사용된다
  // map 메서드
    // 배열의 각 요소에 대해 주어진 함수를 호출하고, 그 결과로 이루어진 배열을 반환한다
    // array.map(callback(currentValue, index, array), thisArg)
      // callback : 각 요소에 대해 실행할 함수
        // 매개변수 - currentValue: 현재 처리 중인 요소 (map 메서드가 반복하는 동안 각 요소가 이 변수에 할당된다)
        //          - index: 현재 처리 중인 요소의 인덱스
        //          - array: map을 호출한 배열
      // thisArg: callback을 실행할 때 사용할 this 값

  // 3.
  // <li className="main_items" key={idx} onClick={() => openModal(image)}>
  // key={idx} : React에서 각 리스트 아이템에 고유한 키 값을 부여하여 렌더링 최적화를 돕는다
  // onClick={() => openModal(image) : 이미지를 클릭했을때 openModal 함수를 호출한다

  // 4. 이미지 렌더링
  // <img src={process.env.PUBLIC_URL + image.src} alt={image.alt} />
  // process.env.PUBLIC_URL : React 앱의 public 디렉토리 경로를 자동으로 가져온다
  // image.src : 현재 이미지 객체의 src 속성을 참조하여 실제 이미지 파일의 경로를 만든다

  // 4. ImageModal
  // ImageModal 컴포넌트를 추가하여 현재 선택된 이미지를 모달에 전달한다
  // selectedImage가 null이 아닐 경우 모달이 표시되고, 모달을 닫으면 closeModal 함수를 호출하여 상태를 업데이트한다
}