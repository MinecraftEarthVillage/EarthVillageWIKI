import type { NavLink } from '../.vitepress/theme/types'

type NavData = {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  {
    title: '入门',
    items: [
      {
        icon: 'https://caniuse.com/img/favicon-128.png',
        title: '最基础',
        desc: '笨蛋式教学',
        link: '/article/基础',
      },
      {
        icon: 'https://tinypng.com/images/apple-touch-icon.png',
        title: '菜单',
        desc: '几乎所有的功能都在里面了，笨蛋式教学，让你学会主菜单的正确食用方式',
        link: '/article/菜单',
      },
      {
        icon: 'https://caniuse.com/img/favicon-128.png',
        title: '地图集',
        desc: '可以让你随时查看不同视角地图，还能作为聊天室',
        link: '/article/地图',
      },

      {
        icon: 'https://devtool.tech/logo.svg',
        title: 'MOD全家桶',
        desc: '地球村MOD客户端全家桶，解锁所有玩法最好的选择！',
        link: 'https://www.123pan.com/s/WiuUVv-KNG0H.html',
      },
/*       {
        icon: 'https://tool.lu/favicon.ico',
        title: '在线工具',
        desc: '开发人员的工具箱',
        link: 'https://tool.lu',
      }, */
/*       {
        icon: '/icons/json-cn.ico',
        title: 'Json 中文网',
        desc: 'JSON 在线解析及格式化验证',
        link: 'https://www.json.cn',
      }, */
    ],
  },
  {
    title: '插件部分',
    items: [
      {
        icon: 'https://qwerty.fe-mm.com/apple-touch-icon.png',
        title: '王国系统',
        desc: '为团体服务的领地保护与国战系统',
        link: '/article/王国',
      },
      {
        icon: '/logo.png',
        title: '个人领地',
        desc: '面向个人的领地保护系统',
        link: '/article/个人领地',
      },
      {
        icon: '/logo.png',
        title: '公路与自由载具',
        desc: '不受限于轨道和时刻表的车子',
        link: '/article/载具',
      },
      {
        icon: '/logo.png',
        title: '创造模式与多模式',
        desc: '独家创造模式体验系统，随时切换游戏模式',
        link: '/article/创造模式体验系统',
      },
    ],
  },
  {
    title: 'MOD部分',
    items: [
      {
        icon: '/logo.png',
        title: 'MTR铁路',
        desc: '不只是轨道~',
        link: '/article/mtr',
      },
     {
        icon: '/logo.png',
        title: 'MTR帮助',
        desc: '关于MTR（铁路部分）的常见问题文档',
        link: '/article/mtrquesten',
      },
      {
        icon: '/logo.png',
        title: 'MTR-航海',
        desc: '不只是轨道~',
        link: '/article/mtr航海',
      },
      {
        icon: '/logo.png',
        title: 'MTR-航空',
        desc: '不只是轨道~',
        link: '/article/mtr飞机',
      },
      {
        icon: '/logo.png',
        title: 'YSM模型',
        desc: '与众不同的4D皮肤',
        link: '/article/YSM',
      },
    ],
  },
]
