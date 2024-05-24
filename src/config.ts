/** Website 分类配置 */
const WEBSITE_SORTS: WebsiteSort[] = [
  {
    title: "CTF",
    sites: [
      {
        title: "CTFHub",
        description: "CTFHub",
        url: "https://www.ctfhub.com",
        icon: "https://www.ctfhub.com/favico.png",
        color: "#0171CD",
      },
      {
        title: "CTF Wiki",
        description: "CTF Wiki",
        url: "https://ctf-wiki.org",
        icon: "https://ctf-wiki.org/assets/images/favicon.png",
      },
      {
        title: "CTFShow",
        description: "CTFShow",
        url: "https://ctf.show",
        icon: "https://ctf.show/files/3927d3294176f912a38d835fab6196a7/logo32.png",
      },
      {
        title: "BUUCTF",
        description: "BUUCTF",
        url: "https://buuoj.cn",
        icon: "https://buuoj.cn/themes/buu_core/static/img/favicon.ico",
      },
      {
        title: "XCTF",
        description: "XCTF",
        url: "https://adworld.xctf.org.cn",
        icon: "",
      },
      {
        title: "NSSCTF",
        description: "NSSCTF",
        url: "https://www.nssctf.cn",
        icon: "https://www.nssctf.cn/favicon.ico",
      },
      {
        title: "CTF 竞赛入门指南",
        description: "CTF 竞赛入门指南",
        url: "https://www.bookstack.cn/read/CTF-All-In-One/SUMMARY.md",
        icon: "https://www.bookstack.cn/favicon.ico",
      },
    ],
  },
  {
    title: "示例分类2",
  },
  {
    title: "示例分类3",
  },
  {
    title: "示例分类4",
  },
  {
    title: "示例分类5",
  },
  {
    title: "友情链接",
    sites: [
      {
        title: "EsunR Blog",
        description: "EsunR 的博客",
        url: "https://www.esunr.xyz",
        icon: "https://esunr-image-bed.oss-cn-beijing.aliyuncs.com/logo.jpg",
      },
    ],
  },
];

/** Website 配置（2023.3.29 已废弃） */
const WEBSITE_ITEMS: WebsiteItem[] = [];

const GLOBAL_CONFIG = {
  /**
   * 博客名称
   */
  BLOG_NAME: "",
  /**
   * 个人博客链接
   */
  BLOG_URL: "",
  /**
   * 指定中心 LOGO 图片地址
   */
  LOGO_URL: "https://liert.github.io/head_portrait.png",
  /**
   * 个人 Github 链接
   */
  GITHUB_URL: "https://github.com/liert",
  /**
   * 背景图片地址
   */
  BACKGROUND_IMG_URL: "https://liert.github.io/background.png",
  /**
   * ICP 备案号，留空不显示
   */
  ICP: "",
  ICP_URL: "https://beian.miit.gov.cn/",
  FOOTER_INFO: true,
  /**
   * 网站欢迎标语
   */
  SLOGANS: [
    "欢迎拜访",
    "Welcome, my friend!",
    "訪問へようこそ",
    "嗨，别来无恙",
    "不忘初心，一生浪漫",
    "最近还好吗？",
    "流星，落花，萤火",
    "马车越空，晃荡越响",
  ],
  /**
   * Website 分类配置
   */
  WEBSITE_SORTS,
  /**
   * Website 配置（2023.3.29 已废弃）
   */
  WEBSITE_ITEMS,
  /**
   * 网站 Title Keywords Description 的配置，用于 SEO
   */
  TKD: {
    title: "liert",
    keywords: "Blog, Index, Index Page",
    description: "This is my personal blog index page.",
  },
};

export default GLOBAL_CONFIG;
