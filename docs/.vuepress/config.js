const sidebar = require('./nav')

module.exports = {
    title: 'pe-gogo',
    description: null,

    head: [
      ['link', {rel: 'icon', href: `/favicon.ico`}],
      ['link',{rel: 'manifest', href: '/js/manifest.json'}],
    ],

    themeConfig: {

        nav:[
          {text: '首页' ,link: '/'},
          {text: '思考' ,link: '/think/'},
          {text: '学习', link: '/study/'},
          {text: '关于我' ,link: '/about/'},
        ],


        sidebarDepth: 2,
        sidebar: 'auto',

        sidebar: {
          '/about/': [
              'myRode'
          ],

          '/study/': [
              'SpringBoot',
              'Dev'
          ],
          '/think/': [
              's'
          ]
      },


    }
  }