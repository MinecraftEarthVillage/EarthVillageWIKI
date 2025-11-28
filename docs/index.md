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
      link: /Map
    - text: 逆天名人榜
      link: //minecraftearthvillage.github.io/fool
    - text: 测试页
      link: /test
      theme: alt
features:
  - icon: 📘
    title: 入门
    details: 整理最基础的教程<small>（笨蛋教学）</small><br />如有异议按你的理解为主，不接受反驳
    link: /nav/#%E5%85%A5%E9%97%A8
    linkText: 第一次玩MC戳我yeeeeeeeeeeeeeeeee
  - icon: 📖
    title: 进阶
    details: 了解服务器的插件部分，基于原版逻辑的附加功能
    link: /nav/#插件部分
    linkText: 开始阅读
  - icon: 💡
    title: 高级
    details: 了解各种原版之外的附加功能的正确打开方式<br />学习其中的小技巧和冷知识
    link: /nav/#mod%E9%83%A8%E5%88%86
    linkText: MOD部分
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
