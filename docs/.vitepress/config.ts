import { basename } from 'node:path'
import { defineConfig } from 'vitepress'
import MarkdownPreview from 'vite-plugin-markdown-preview'

import { head, nav, sidebar } from './configs'

const APP_BASE_PATH = basename(process.env.GITHUB_REPOSITORY || '')

export default defineConfig({
      ignoreDeadLinks: true, // 禁用死链检查
  outDir: '../dist',
  base: '/',
  lang: 'zh-CN',
  title: '地球村文档',
  description: '如果有新人问你服务器咋玩，把这个丢过去',
  head,

  lastUpdated: true,
  cleanUrls: true,

  /* markdown 配置 */
  markdown: {
    lineNumbers: true,
  },

  /* 主题配置 */
  themeConfig: {
    i18nRouting: false,

    logo: '/logo.png',

    nav,
    sidebar,

    /* 右侧大纲配置 */
    outline: {
      level: 'deep',
      label: '目录',
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/MinecraftEarthVillage/EarthVillageWIKI' }],

    footer: {
      message: '如有转载或 CV 的请标注本站原文地址',
      copyright: 'Copyright © 2019-present maomao',
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    /*** 自定义配置 ***/
    visitor: {
      badgeId: 'MinecraftEarthVillage.EarthVillageWIKI',
    },

    comment: {
      repo: 'MinecraftEarthVillage/EarthVillageWIKI',
      repoId: 'R_kgDONaLLJg',
      category: 'Announcements',
      categoryId: 'DIC_kwDONaLLJs4Cs9m3',
    },
  },

  vite: {
    plugins: [MarkdownPreview()],
  },
})
