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
        icon: 'https://www.emojiall.com/en/header-svg/%F0%9F%A4%AA.svg',
        title: '最基础',
        desc: '笨蛋式教学',
        link: '/article/基础',
      },
      {
        icon: '/others/菜单/Type052D.webp',
        title: '菜单',
        desc: '几乎所有的功能都在里面了，笨蛋式教学，让你学会主菜单的正确食用方式',
        link: '/article/菜单',
      },
      {
        icon: 'http://map.earthvillage.top/%E5%9B%BE%E7%89%87/world.png',
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
        icon: 'https://www.emojiall.com/en/header-svg/%F0%9F%91%91.svg',
        title: '部落&国家',
        desc: '为团体服务的领地保护与国战系统',
        link: '/article/王国',
      },
      {
        icon: 'https://crafthead.net/avatar/8667ba71b85a4004af54457a9734eed7',
        title: '皮肤/昵称',
        desc: '自定义你的外观',
        link: '/article/皮肤',
      },
      {
        icon: 'https://www.spigotmc.org/data/resource_icons/11/11480.jpg',
        title: '个人领地',
        desc: '面向个人的领地保护系统',
        link: '/article/个人领地',
      },
      {
        icon: 'https://www.spigotmc.org/data/resource_icons/80/80910.jpg',
        title: '公路与自由载具',
        desc: '不受限于轨道和时刻表的车子',
        link: '/article/载具',
      },
      {
        icon: 'https://zh.minecraft.wiki/images/Repeating_Command_Block.gif',
        title: '创造模式与多模式',
        desc: '独家创造模式体验系统，随时切换游戏模式',
        link: '/article/创造模式体验系统',
      },
      {
        icon: 'https://www.emojiall.com/en/header-svg/%F0%9F%8E%AE%EF%B8%8F.svg',
        title: '小游戏服务器（已停运）',
        desc: '随便玩玩',
        link: '/article/小游戏服务器',
      },
    ],
  },
  {
    title: 'MOD部分',
    items: [
      {
        icon: '/others/MTR/图标/铁路.jpg',
        title: 'MTR铁路',
        desc: '不只是轨道~',
        link: '/article/mtr',
      },
    //  {
    //     icon: '/others/MTR/图标/铁路.jpg',
    //     title: 'MTR帮助',
    //     desc: '关于MTR（铁路部分）的常见问题文档',
    //     link: '/article/mtrquesten',
    //   },
      {
        icon: '/others/MTR/图标/船.png',
        title: 'MTR-航海',
        desc: '不只是轨道~',
        link: '/article/mtr航海',
      },
      {
        icon: '/others/MTR/图标/飞机.png',
        title: 'MTR-航空',
        desc: '不只是轨道~',
        link: '/article/mtr飞机',
      },
      {
        icon: 'https://cdn.modrinth.com/data/86xjpqqS/9f58c3977a8949f75300f065c9a63f34022c415a.jpeg',
        title: 'YSM模型',
        desc: '与众不同的4D皮肤',
        link: '/article/YSM',
      },
    ],
  },
  {
    title: '？？？',
    items:[
      {
        icon:'https://www.emojiall.com/en/header-svg/%F0%9F%9B%B0.svg',
        title:'地球往事',
        desc:'原创世界观，以另一个角度解读MC的背景故事',
        link:'/article/原创世界观',
      },
      {
        icon:'https://www.emojiall.com/images/120/samsung/262d.png',
        title:'六四事件正确解读',
        desc:'八九年的事件是瞒不住的！牺牲在维和前线的烈士英雄是不可遗忘的！作为对外网反华乐子的回应而编写本文',
        link:'/article/8964',
      },
    ]
  },
]
