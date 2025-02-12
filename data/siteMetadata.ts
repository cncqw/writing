export const siteMetadata = {
  title: "Max's blog - Writing, Reading",
  author: '海拉鲁旅行家',
  fullName: '海拉鲁旅行家',
  headerTitle: '你球',
  footerTitle: '你球 - 版权所有',
  description:
    "Max's journey - work and life stories through the keyboard of an open-minded Software Engineer",
  language: 'zh-cn',
  siteUrl: 'https://w.alldu.cn',
  siteRepo: 'https://github.com/cncqw/writing',
  siteLogo: '/static/images/profile-square.jpg',
  image: '/static/images/profile-square.jpg',
  socialBanner: '/static/images/profile-square.jpg',
  email: 'banzhuanjia@gmail.com',
  github: 'https://github.com/',
  twitter: 'https://twitter.com/',
  medium: 'https://medium.com/',
  youtube: '',
  linkedin: '',
  facebook: '',
  locale: 'zh-cn',
  analyticsURL: 'https://analytics.google.com/analytics/web/',
  analytics: {
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: 'G-F954ZQPP1J', // e.g. UA-000000-2 or G-XXXXXXX
  },
  socialAccounts: {
    github: 'x',
    twitter: 'x',
    linkedin: '',
  },
}

/**
 * Select a provider and use the environment variables associated to it
 * https://vercel.com/docs/environment-variables
 * --
 *
 * Visit each provider's documentation link and follow the instructions, then add the environment variable to your project.
 */
export const commentConfig = {
  provider: 'giscus', // 'giscus' | 'utterances' | 'disqus',
  // https://giscus.app/
  giscusConfig: {
    repo: 'chaosflutter/zhengchao.dev', // process.env.GISCUS_REPO
    repositoryId: 'R_kgDOJMQZHQ', // process.env.GISCUS_REPOSITORY_ID
    category: 'Announcements', // process.env.GISCUS_CATEGORY
    categoryId: 'DIC_kwDOJMQZHc4CXB9l', // process.env.GISCUS_CATEGORY_ID
    mapping: 'title',
    reactions: '1',
    metadata: '0',
    lightTheme: 'light',
    darkTheme: 'transparent_dark',
    themeURL: '',
  },
  // https://utteranc.es/
  utterancesConfig: {
    repo: '', // process.env.UTTERANCES_REPO
    issueTerm: '',
    label: '',
    lightTheme: '',
    darkTheme: '',
  },
  // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
  disqus: {
    shortname: '', // process.env.DISQUS_SHORTNAME
  },
}
