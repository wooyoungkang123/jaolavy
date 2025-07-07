# 학원 웹사이트 프로젝트

## 📁 파일 구조

```
jaolavy/
├── index.html                 # 메인 홈페이지
├── assets/                    # 정적 파일들
│   ├── css/                   # 스타일시트
│   │   ├── style.css          # 메인 스타일시트
│   │   └── reset.css          # CSS 초기화
│   ├── js/                    # 자바스크립트
│   │   ├── main.js            # 메인 스크립트
│   │   └── common.js          # 공통 기능
│   └── images/                # 이미지 파일들
│       ├── logo.png           # 로고
│       ├── banner/            # 배너 이미지들
│       └── icons/             # 아이콘들
├── components/                # 재사용 가능한 컴포넌트
│   ├── header.html            # 공통 헤더
│   ├── footer.html            # 공통 푸터
│   └── nav.html               # 네비게이션 메뉴
├── pages/                     # 각 페이지 HTML 파일들
│   ├── about.html             # 학원 소개
│   ├── courses.html           # 강의 안내
│   ├── teachers.html          # 강사 소개
│   ├── gallery.html           # 갤러리
│   ├── notice.html            # 공지사항
│   └── contact.html           # 연락처/오시는 길
└── README.md                  # 이 파일
```

## 📝 디렉토리 설명

### 🎨 assets/ 
- **css/**: 모든 스타일시트 파일들
- **js/**: 자바스크립트 파일들 (메뉴, 슬라이더, 폼 등)
- **images/**: 로고, 배너, 아이콘 등 모든 이미지 파일들

### 🧩 components/
- **header.html**: 로고, 메뉴가 포함된 공통 헤더
- **footer.html**: 연락처, 저작권 정보가 포함된 공통 푸터
- **nav.html**: 네비게이션 메뉴

### 📄 pages/
- **about.html**: 학원 소개, 교육 철학
- **courses.html**: 강의 소개, 수강료
- **teachers.html**: 강사진 소개
- **gallery.html**: 수업 사진, 학생 작품
- **notice.html**: 공지사항, 새소식
- **contact.html**: 연락처, 위치, 오시는 길

## 🚀 시작하기

1. `index.html`을 브라우저에서 열어 확인
2. 각 페이지들은 `components/` 폴더의 공통 요소들을 포함
3. 스타일 수정은 `assets/css/style.css`에서 진행

## 💡 주요 특징

- **컴포넌트 기반**: header, footer 등 공통 요소 재사용
- **반응형 디자인**: 모바일/태블릿 대응
- **깔끔한 구조**: 유지보수가 쉬운 파일 구조 