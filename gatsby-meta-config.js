module.exports = {
  title: `choi-hyunho.com`,
  description: `현호의 기술 블로그`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://choi-hyunho.com/`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: `Choi-HyunHo/hyunho-gatsby-blog`, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `최현호`,
    bio: {
      role: `개발자`,
      description: ['Front-End', '내일을 바라보는'],
      thumbnail: `thumbnail.png`, // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/Choi-HyunHo`, // `https://github.com/zoomKoding`,
      linkedIn: `https://www.linkedin.com/in/%ED%98%84%ED%98%B8-%EC%B5%9C-50553b265/`, // `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
      email: `x7788@naver.com`, // `zoomkoding@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        info: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          web: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2022.06 ~',
        activity: '비플라이소프트',
        info: '→ 로제우스 서비스 프론트 개발 및 운영',
        links: {
          web: 'https://www.rozeus.com/',
          appStore:
            'https://apps.apple.com/kr/app/%EB%A1%9C%EC%A0%9C%EC%9A%B0%EC%8A%A4-rozeus-%EA%BC%AD-%ED%95%84%EC%9A%94%ED%95%9C-%EB%89%B4%EC%8A%A4/id1570566887',
          googlePlay: 'https://play.google.com/store/apps/details?id=com.bflysoft.rozeus',
        },
      },
      {
        date: '2016.03 ~ 2022.02',
        activity: '한라대학교',
        info: '→ 정보통신소프트웨어 학과',
        links: {},
      },
    ],

    timestamp: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        info: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          web: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2023.04 ~ 2023.04',
        activity: '원티드 프리온보딩 프론트엔드 챌린지 4월',
        info: '→ 프론트엔드 여행자를 위한 리액트 해부학',
        links: {
          web: 'https://www.wanted.co.kr/events/pre_challenge_fe_8',
          post: 'https://choi-hyunho.com/react/react-wanted-1/',
        },
      },
      {
        date: '2023.03 ~ ',
        activity: '러닝 타입스크립트 스터디',
        info: '→ 러닝 타입스크립트 책을 활용한 공부',
        links: {
          github: 'https://github.com/FE-Friends/typescript_study/tree/main',
        },
      },
      {
        date: '2023.02 ~ 2023.03',
        activity: '한입 크기로 잘라먹는 리액트(React.js) 스터디',
        info: '→ 리액트 개념 공부',
        links: {
          github: 'https://github.com/FE-Friends/react_study',
        },
      },
    ],

    certificate: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        info: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          web: '',
        },
      },
      {
        date: '2022.04',
        activity: '컴퓨터활용능력 1급',
      },
      {
        date: '2021.08',
        activity: '정보처리기사',
      },
      {
        date: '2019.08',
        activity: '워드프로세스 단일 등급',
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          web: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: 'Shopping Mall',
        // description:
        //   // '개발 블로그를 운영하는 기간이 조금씩 늘어나고 점점 많은 생각과 경험이 블로그에 쌓아가면서 제 이야기를 담고 있는 블로그를 직접 만들어보고 싶게 되었습니다. 그동안 여러 개발 블로그를 보면서 좋았던 부분과 불편했던 부분들을 바탕으로 레퍼런스를 참고하여 직접 블로그 테마를 만들게 되었습니다.',
        techStack: ['React', 'Vite', 'Firebase', 'Cloudinary', 'DB'],
        thumbnailUrl: 'thumbnailUrl.jpg',
        links: {
          github: 'https://github.com/Choi-HyunHo/shopping_mall',
          // demo: 'https://www.zoomkoding.com',
        },
      },
    ],
  },
};
