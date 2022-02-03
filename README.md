<div id="top"></div>

<!-- PROJECT SHIELDS -->
<div align='center'>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=blue"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />
</div>

<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h3 align="center">원티드 집꾸미기 과제</h3>

  <p align="center">
    집꾸미기 집소개 기능에 포함되어 있는 사진과 가구 정보를 조합하는 컴포넌트를 구현하는 프로젝트입니다.
    <br />
    <br />
    <a href="https://seoysace-wanted-ggumim-furniture.netlify.app"><strong>배포 링크</strong></a>
  </p>
</div>


<!-- 프로젝트 소개 -->

## 📚 프로젝트 소개

- 가구 정보 tool tip 구현

![툴팁](https://user-images.githubusercontent.com/65898861/152437551-e27f4fd7-870c-4c6c-abeb-25f67eb69471.gif)


- 상품 목록

![상품 목록](https://user-images.githubusercontent.com/65898861/152437404-a051dc7c-284d-4c34-9729-c473dac87fb2.gif)


<p align="right">(<a href="#top">back to top</a>)</p>

<hr>
<br>

<!-- 구현한 기능 -->

## 🎯 구현한 기능

- [x] 가구 정보 tool tip 구현
  - [x] 돋보기를 클릭하면 상품정보 tool tip 출력되면서 돋보기 버튼이 닫기 버튼으로 변경
  - [x] 닫기 버튼을 클릭하면 tool tip을 없애고 돋보기 버튼으로 변경
  - [x] tool tip은 하나만 노출 (새로운 가구 선택하면 새로 클릭한 tool tip만 노출)
  - [x] 입점 여부에 따른 가구 정보 표시
- [x] 하단 상품목록 구현
  - [x] 선택된 가구 표시 기능
  - [x] 할인율 표시

<p align="right">(<a href="#top">back to top</a>)</p>

<hr>
<br>

<!-- 설치 및 실행 -->

## 📦 설치 및 실행

배포 링크가 동작하지 않을 때 local에서 프로젝트를 실행하는 방법입니다.

### Prerequisites

1. npm을 설치합니다.
   ```sh
   npm install npm@latest -g
   ```

### Installation

1. 레포지토리를 clone합니다.
   ```sh
   git clone https://github.com/seoysauce/wanted_ggumim_furniture
   ```
2. npm package들을 설치합니다.
   ```sh
   npm install
   ```
3. localhost에서 프로젝트를 실행합니다.
   ```sh
   npm start
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<hr>
<br>

<!-- 프로젝트 구조 -->

## 🗂 디렉토리 구조

```bash
.
├── public
│   └── index.html
└── src
    ├── App.tsx
    ├── api           # api 관련 함수
    ├── assets        # icon, image, font 등
    ├── components    # atomic design에 따른 컴포넌트
    │   ├── atoms
    │   ├── molecules
    │   └── organisms
    ├── constants
    ├── data          # mock-data
    ├── pages         # 전체 페이지 컴포넌트
    ├── styles        # global-style
    └── utils
```

<p align="right">(<a href="#top">back to top</a>)</p>
