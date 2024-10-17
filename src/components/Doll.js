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

  // 이미지를 3개씩 나누는 함수
  const groupImages = (images, groupSize) => {
    const groups = [];
    for (let i = 0; i < images.length; i += groupSize) {
      groups.push(images.slice(i, i + groupSize));
    }
    return groups;
  };

  const groupedImages = groupImages(images, 3);

  return (
    <>
      <div className="doll">
        <h3>인형 페이지</h3>
        {/* Doll 관련 이미지를 렌더링 */}
        {groupedImages.map((group, index) => (
          <ul className="main_grouped" key={index}>
            {group.map((image, idx) => (
              <li className="main_items" key={idx} onClick={() => openModal(image)}>
                <img src={process.env.PUBLIC_URL + image.src} alt={image.alt} />
                {/* <div>{image.alt}</div> */}
              </li>
            ))}
          </ul>
        ))}
        <ImageModal image={selectedImage} onClose={closeModal} /> {/* ImageModal 추가 */}
      </div>
    </>
  );
}