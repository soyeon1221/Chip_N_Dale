// export default function Daiso() {
//   return (
//     <>
//       <div className="daiso">
//         <div>다이소 페이지</div>
//       </div>
//     </>
//   )
// }

import { useState } from 'react';
import ImageModal from './ImageModal';

export default function Doll({ images }) {
  const [selectedImage, setSelectedImage] = useState(null); // 선택된 이미지를 저장할 상태

  const openModal = (image) => {
    setSelectedImage(image); // 클릭한 이미지를 설정
  };

  const closeModal = () => {
    setSelectedImage(null); // 모달 닫기
  };

  return (
    <>
      <div className="doll">
        <div>인형 페이지</div>
        {/* Doll 관련 이미지를 렌더링 */}
        <ul className="main_box">
          {images.map((image, index) => (
            <li className="main_items" key={index} onClick={() => openModal(image)}>
              <img src={process.env.PUBLIC_URL + image.src} alt={image.alt} />
              {/* <div>{image.alt}</div> */}
            </li>
          ))}
        </ul>
        <ImageModal image={selectedImage} onClose={closeModal} /> {/* ImageModal 추가 */}
      </div>
    </>
  );
}