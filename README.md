# &#129294; Chip 'N Dale




#### [목차]
###### 1. [Chip 'N Dale 바로가기](#-chip-n-dale)
###### 2. [프로젝트 소개](#-프로젝트-소개)
###### 3. [기술 스택 및 라이브러리](#-기술-스택-및-라이브러리)
###### 4. [개발 기간](#-개발-기간)
###### 5. [주요 기능](#-주요-기능)
###### 6. [느낀점](#-느낀점)

<br>


## &#129294; Chip 'N Dale 바로가기

[<img src="./public/chip_n_dale_logo.png" width="40" height="40">](https://soyeon1221.github.io/Chip_N_Dale) 아이콘 클릭!

<br>


## &#129294; 프로젝트 소개

좋아하는 캐릭터 **Chip 'N Dale (칩앤데일)** 을 담은 개인 홈페이지입니다.

보유한 Chip 'N Dale 관련 굿즈들의 사진과 정보를 쉽게 확인할 수 있습니다.

인형, 피규어, 문구류 등 카테고리별로 보기 쉽게 구성했습니다.


<br>


## &#129294; 기술 스택 및 라이브러리

- <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/>
- <img src="https://img.shields.io/badge/JavaScript-ECD53F?style=flat-square&logo=JavaScript&logoColor=white"/>
- <img src="https://img.shields.io/badge/HTML5-F46D01?style=flat-square&logo=HTML5&logoColor=white"/>
- <img src="https://img.shields.io/badge/CSS3-2490D7?style=flat-square&logo=CSS3&logoColor=white"/>

<br>


## &#129294; 개발 기간

- 24.09.19 - 24.10.15 (총 26일)

<br>


## &#129294; 주요 기능

### 1. 메인

<img src="https://github.com/user-attachments/assets/cc0200bc-0f9f-46fa-bdf4-e78b2f13e49a" width="580px" height="400px">


- &#9776; 아이콘을 클릭하면 메뉴가 열립니다. 
- 상단에 로고를 클릭하면 메인페이지로 이동합니다.


### 2. 카테고리별 페이지

<img src="https://github.com/user-attachments/assets/e225ba90-4c01-4e51-9740-d83a5dc22ce8" width="580px" height="400px">


- 메뉴에서 카테고리를 선택하거나 '더보기'버튼을 누르면 해당 페이지로 이동합니다.
- 페이지 상단에 현재 카테고리명이 표시되어 있어 어떤 페이지인지 쉽게 알 수 있습니다.


### 3. 상세 정보 보기

<img src="https://github.com/user-attachments/assets/81999620-0bce-43e5-b84b-7d1eaddf3522" width="580px" height="400px">


- 굿즈 이미지를 클릭하면 상세 정보를 확인할 수 있습니다.
- Close 버튼을 누르면 모달창이 닫힙니다.

<br>

## &#129294; 느낀점

#### [배운점]
###### 1. e.stopPropagation()
###### - 이벤트 객체(e)의 메소드로, 특정 이벤트가 발생했을 때, 해당 이벤트가 상위 요소로 전파되지 않도록 막아준다.
###### - 이벤트 전파를 방지하여 특정 요소에서만 이벤트가 처리되도록 하여, 예기치 않은 동작을 방지할 수 있다.
###### - e.stopPropagation()을 호출하면 이 클릭 이벤트가 그 부모 요소(modal-overlay)로 전파되지 않게 한다.
###### - 예를들어, 모달 배경을 클릭하면 모달이 닫히고, 콘텐츠를 클릭하면 모달이 닫히지 않도록 한다.
######
###### 2. image.description.split('\n') : 줄바꿈된 텍스트 렌더링
###### - image.description을 줄바꿈(\n) 기준으로 나누어 내부에 각각 <p>태그로 나눠 렌더링한다.
###### - image.description은 문자열이다. 이 텍스트가 줄바꿈 문자인 \n을 포함하고 있다면, 문자열을 나누어 배열로 만든다.
###### - 예를 들어 image.description이 '안녕하세요\n반갑습니다'이라면, split() 메서드는 ['안녕하세요','반갑습니다.'] 배열을 반환한다.
<br>

#### [아쉬운점]
###### - 굿즈 정보를 수동으로 입력하다 보니, 항목이 많아질수록 관리 효율이 떨어졌다. 
###### &nbsp;&nbsp;추후에는 JSON 파일이나 간단한 데이터베이스를 활용해 좀 더 체계적으로 관리할 수 있도록 개선하고 싶다.
###### - 모바일 환경까지 고려하지 못해, 작은 화면에서는 레이아웃이 깨지거나 불안정한 부분이 아쉬웠다. 
###### - 기능이 늘어나면서 코드가 길어지고 반복되는 부분이 많아졌는데, 이를 컴포넌트화하거나 모듈로 분리하지 못해 유지보수가 어려웠다.

