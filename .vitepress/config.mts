import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '山雨竹韵',
  description: '',
  appearance: 'dark',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '🏠 首页', link: '/' },
      { text: '👩🏻‍💻 关于我', link: '/docs/about.md' },
    ],
    sidebar: [
      {
        text: '竹韵书香·阅微堂',
        items: [
          {
            text: '《复利》阅读笔记',
            link: '/docs/readingRoom/index.md',
          },
        ],
      },
    ],
    footer: {
      copyright: '版权所有 © 2023-present 山雨竹韵',
    },
  },
  head: [
    [
      'script',
      {
        async: '',
        src: 'https://hm.baidu.com/hm.js?ab1409dcf9087d7086bb89d6cc5657af',
      },
    ],
    [
      'script',
      {},
      `var _hmt = _hmt || [];
  `,
    ],
  ],
});
