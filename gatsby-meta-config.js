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
        info: '→ 로제우스 서비스 프론트 개발 및 유지보수',
        links: {
          web: 'https://www.rozeus.com/',
          appStore : 'https://apps.apple.com/kr/app/%EB%A1%9C%EC%A0%9C%EC%9A%B0%EC%8A%A4-rozeus-%EA%BC%AD-%ED%95%84%EC%9A%94%ED%95%9C-%EB%89%B4%EC%8A%A4/id1570566887',
          googlePlay : 'https://play.google.com/store/apps/details?id=com.bflysoft.rozeus'
        },
      },
      {
        date: '2016.03 ~ 2022.02',
        activity: '한라대학교',
        info: '→ 정보통신소프트웨어 학과',
        links: {
        },
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
      // {
      //   title: '개발 블로그 테마 개발',
      //   description:
      //     '개발 블로그를 운영하는 기간이 조금씩 늘어나고 점점 많은 생각과 경험이 블로그에 쌓아가면서 제 이야기를 담고 있는 블로그를 직접 만들어보고 싶게 되었습니다. 그동안 여러 개발 블로그를 보면서 좋았던 부분과 불편했던 부분들을 바탕으로 레퍼런스를 참고하여 직접 블로그 테마를 만들게 되었습니다.',
      //   techStack: ['gatsby', 'react'],
      //   thumbnailUrl: 'blog.png',
      //   links: {
      //     post: '/gatsby-starter-zoomkoding-introduction',
      //     github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
      //     demo: 'https://www.zoomkoding.com',
      //   },
      // },
    ],
  },
};
