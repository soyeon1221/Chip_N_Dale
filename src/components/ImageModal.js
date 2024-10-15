export default function ImageModal({ image , onClose }) {
  // ImageModal 컴포넌트는 두개의 props를 받는다
  // image : 선택된 이미지 정보 (소스, 대체 텍스트, 설명 등)
  // onClose : 모달을 닫는 함수

  if (!image) return null; // 조건부 렌더링
  // 선택된 이미지가 없으면 모달을 렌더링하지 않고 null을 반환한다
  // 모달이 열려있지 않은 상태에서 빈 화면을 방지한다

  // const handleOverlayClick = (e) => {
  //   e.stopPropagation(); // 부모 요소로의 클릭 전파를 막음
  // };

  return (
    <div className='modal-overlay' onClick={onClose}>
      {/* 모달의 배경을 클릭하면 onClose가 호출되어 모달이 닫힌다 */}
      <div className='modal-content' onClick={(e) => e.stopPropagation()}>
        <img src={process.env.PUBLIC_URL + image.src} alt={image.alt} />
        {/* <div>{image.alt}</div> */}
        <div className="modal-text">
          {image.description.split('\n').map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
        <button className='close-button' onClick={onClose}>Close</button>
      </div>
    </div>
  );
  
  // 1. e.stopPropagation()
  // 이벤트 객체(e)의 메소드로, 특정 이벤트가 발생했을 때 그 이벤트가 더 이상 상위 요소로 전파되지 않도록 하는 기능을 한다
  // 이벤트 전파를 방지하여 특정 요소에서만 이벤트가 처리되도록 하여, 의도치 않은 행동을 방지한다
  // e.stopPropagation()을 호출하면 이 클릭 이벤트가 그 부모 요소(modal-overlay)로 전파되지 않게 한다
  // 예를들어, 모달의 배경을 클릭하면 모달을 닫고, 콘텐츠를 클릭하면 모달이 닫히지 않도록 한다

  // 2. process.env.PUBLIC_URL
  // React 앱에서 정적 파일을 참조할 때 사용하는 특별한 환경 변수이다
  // public 디렉토리에 있는 이미지 파일이나 다른 정적 리소스에 접근할 때 사용한다

  // 3. 줄바꿈된 텍스트 렌더링
  // image.description을 줄바꿈(\n) 기준으로 나누어 내부에 각각 <p>태그로 나눠 렌더링한다
  // image.description.split('\n')
    // image.description은 문자열 이다. 이 텍스트가 줄바꿈 문자인 \n을 포함하고 있다면, 문자열을 나누어 배열로 만든다
    // 예를 들어 image.description이 '안녕하세요\n반갑습니다'이라면, split메서드는 ['안녕하세요','반갑습니다.'] 배열을 반환한다 
  // .map((line, index)...)
    // 배열의 각 항목을 <p>태그로 감싸서 화면에 렌더링한다
    // line : 배열의 각 항목(줄)
    // index : 각 항목의 고유 인덱스
  // <p key={index}>{line}</p>
    // 각 줄을 <p>태그로 감싸서 화면에 표시한다
    // key={index}는 React에서 리스트를 렌더링할 때 필수적인 고유 식별자이다
}