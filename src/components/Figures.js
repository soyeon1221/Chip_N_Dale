// export default function Shop() {
//   return (
//     <>
//       <div className="shop">
//         <div>소품샵 페이지</div>
//       </div>
//     </>
//   )
// }

import { useState } from 'react';
import ImageModal from './ImageModal';

export default function Figures({ images }) {
  const [selectedImage, setSelectedImage] = useState(null); // 선택된 이미지를 저장할 상태

  const openModal = (image) => {
    setSelectedImage(image); // 클릭한 이미지를 설정
  };

  const closeModal = () => {
    setSelectedImage(null); // 모달 닫기
  };

  // 이미지를 그룹화하는 함수 (한 그룹에 3개의 이미지가 포함된다)
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
      <div className="figures">
        <h3>피규어 페이지</h3>
        {/* Figures 관련 이미지를 렌더링 */}
        {groupedImages.map((group, index) => (
          <ul className="main_box" key={index}>
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