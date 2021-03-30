module.exports = {
  base:'/',
  dest:'dist',
  title: 'Seiu\'s blog',
  description: '我的博客',
  themeConfig: {
    editLinks: false,
    docsDir: 'docs',
    lastUpdated: 'Last Updated',
    smoothScroll: true,
    nav:[ // 导航栏配置
        { 
            text: '前端',
            ariaLabel: 'Frontend',
            items: [
                {text : 'JS', link: '/JS/'},
                {text : 'CSS', link: '/CSS/'},
                {text : 'HTTP', link: '/HTTP/'},
                {text : '浏览器', link: '/Browser/'},
                {text : 'Vue', link: '/Vue/'},
                {text : 'React', link: '/React/'},  
            ]
        },
        {
            text: 'LeetCode', 
            ariaLabel: 'LeetCode',
            link: 'https://leetcode-cn.com/problemset/all/'
        },
        {
            text: '面试',
            ariaLabel: 'interview',
            items: [
                {text: '面试题', link:'/ivList/'},
                // {text: '模拟面试', link:'/ivMock/'}
            ]
        },
        {text: 'GitHub', link: 'https://github.com/Hoshiu'}      
    ],
    sidebar: {
        '/JS/': getFrontend(),
        '/CSS/': getCSS(),
        // '/HTTP/': getHTTP(),
        // '/Browser/': getBrowser(),
        // '/Vue/': getVue(),
        // '/React/': getReact(),
        '/ivList/': getIvList(),
        // '/ivMock/': getIvMock(), 
        // '/LeetCode/List/': getList()
    }
}
}


function getFrontend() { 
    return [
        {
            title: 'JS基础',
            children: [
                '数据类型',
                '附录'
            ]
        },
        {
            title: '进阶篇',
            children: [
                'JS_Upgrade'
            ]
        }
    ]
}

function getCSS() { 
    return [
        {
            title: '盒模型',
            children: [
                '盒模型'
            ]
        },
        // {
        //     title: 'JavaScript进阶',
        //     children: [
        //         'upgrade1'
        //     ]
        // }
    ]
}

function getIvList() {
    return [
        {
            title: 'HTML+CSS相关',
            children: [
                'HTML相关面试题整理'
            ]
        },
        {
            title: '浏览器相关',
            children: [
                '浏览器相关'
            ]
        }
    ]
}