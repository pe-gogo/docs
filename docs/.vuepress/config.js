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
          {text: '学习',items: [
            { text: "离散数学", link:"/study/math/"},
            { text: "操作系统", link:"/study/os/"},
            ]},
          {text: '关于我' ,link: '/about/myRode'},
          {text: '思想交流', link: '/thinkContact/'},
        ],


        sidebarDepth: 2,
        sidebar: 'auto',

        sidebar: {
          '/about/': [
              'myRode',
              'growPath'
          ],

          '/study/math/': [
            'coursera'
          ],
          '/study/os/':[
            'os'
          ],
          '/think/': [
              's',
              'life'
          ]
      },


    }
  }