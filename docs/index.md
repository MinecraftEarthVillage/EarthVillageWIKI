---
layout: home
layoutClass: 'm-home-layout'

hero:
  name: 地球村
  text: 入坑指南
  tagline: 使用了基于 VitePress 的个人前端导航页面模板
  image:
    src: /logo.png
    alt: 地球村文档
  actions:
    - text: 地球村主页
      link: https://emc.mysxl.cn
    - text: 文档目录
      link: /nav/
      theme: alt
    - text: 地球村地图集
      link: https://map.earthvillage.top
    - text: 逆天名人榜
      link: https://lezi.earthvillage.top
    - text: 测试页
      link: /test
      theme: alt
features:
  - icon: 📖
    title: 入门
    details: 整理最基础的教程<small>（笨蛋教学）</small><br />如有异议按你的理解为主，不接受反驳
    link: https://notes.fe-mm.com/fe/javascript/types
    linkText: 前端常用知识
  - icon: 📘
    title: 进阶
    details: 了解各种库的实现原理<br />学习其中的小技巧和冷知识
    link: https://notes.fe-mm.com/analysis/utils/only-allow
    linkText: 源码阅读
  - icon: 💡
    title: 高级
    details: 在工作中学到的一切<small>（常用库/工具/奇淫技巧等）</small><br />配合 CV 大法来更好的摸鱼
    link: https://notes.fe-mm.com/workflow/utils/library
    linkText: 常用工具库
---

<style>
/*爱的魔力转圈圈*/
.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .bottom-small {
  display: block;
  margin-top: 2em;
  text-align: right;
}
</style>
