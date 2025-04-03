import {defineConfig} from 'vitepress'
import {withSidebar} from 'vitepress-sidebar';


const vitePressSidebarOptions = [
    {
        documentRootPath: 'docs',
        scanStartPath: 'switch',
        basePath: '/switch/',
        resolvePath: '/switch/',
        useTitleFromFileHeading: true,
        collapsed: true,
        sortMenusOrderNumericallyFromTitle: true,
        useFolderLinkFromSameNameSubFile: true
    }
];

const vitePressOptions = {
    base: '/yiwangai1983/',
    lang: 'zh-CN',
    title: "胖胖爸爸的游戏小站",
    description: "分享一些有趣的东西",
    head: [
        ['link', {rel: 'icon', href: '/logo.png'}],
        [
            'script',
            {},
            `
              var _hmt = _hmt || [];
                (function() {
                  var hm = document.createElement("script");
                  hm.src = "https://hm.baidu.com/hm.js?58e937362dd799a3c7483da7b03df763";
                  var s = document.getElementsByTagName("script")[0]; 
                  s.parentNode.insertBefore(hm, s);
                })();
              `,
        ]
    ],
    // 默认主题颜色
    appearance: 'dark',
    vite: {},
    themeConfig: {
        logo: '/logo.png',
        //隐藏主页标题
        siteTitle: false,
        nav: [
            {text: '首页', link: '/'},
            {
                text: '🎮️Nintendo',
                icon: '/nintendo/Nintendo_1.png',
                items: [
                    {
                        text: 'Switch',
                        items: [
                            {text: '游戏', link: '/switch/说明'},
                            {text: '工具箱', link: '/switch/说明'}
                        ]
                    },
                    {
                        text: 'Switch 2',
                        items: [
                            {text: '你在期待什么？', link: '/switch2/敬请期待'}
                        ]
                    }
                ]
            },

            {
                text: '关于',
                items: [
                    {text: '关于本站', link: '/about/关于本站'},
                ],
            },
        ],
        outline: {
            // 侧边栏标题
            label: '页面导航',
            // 显示markdown h1到h4的所有标题
            level: [2, 4]
        },
        footer: {
            // 主页页脚
            message: '本站发布内容如有侵权请联系站长删除'
        },
        //Algolia搜索
        search: {
            provider: 'local'
        },
        // search: {
        //     provider: 'algolia',
        //     options: {
        //         appId: '2Z834SUMQV',
        //         apiKey: '52572cf5945ec8ed05ae4e9f6b2581c5',
        //         indexName: 'marchhare',
        //         locales: {
        //             root: {
        //                 placeholder: '搜索文档',
        //                 translations: {
        //                     button: {
        //                         buttonText: '搜索文档',
        //                         buttonAriaLabel: '搜索文档'
        //                     },
        //                     modal: {
        //                         searchBox: {
        //                             resetButtonTitle: '清除查询条件',
        //                             resetButtonAriaLabel: '清除查询条件',
        //                             cancelButtonText: '取消',
        //                             cancelButtonAriaLabel: '取消'
        //                         },
        //                         startScreen: {
        //                             recentSearchesTitle: '搜索历史',
        //                             noRecentSearchesText: '没有搜索历史',
        //                             saveRecentSearchButtonTitle: '保存至搜索历史',
        //                             removeRecentSearchButtonTitle: '从搜索历史中移除',
        //                             favoriteSearchesTitle: '收藏',
        //                             removeFavoriteSearchButtonTitle: '从收藏中移除'
        //                         },
        //                         errorScreen: {
        //                             titleText: '无法获取结果',
        //                             helpText: '你可能需要检查你的网络连接'
        //                         },
        //                         footer: {
        //                             selectText: '选择',
        //                             navigateText: '切换',
        //                             closeText: '关闭',
        //                             searchByText: ''
        //                         },
        //                         noResultsScreen: {
        //                             noResultsText: '无法找到相关结果',
        //                             suggestedQueryText: '你可以尝试查询',
        //                             reportMissingResultsText: '你认为该查询应该有结果？',
        //                             reportMissingResultsLinkText: '点击反馈'
        //                         },
        //                     },
        //                 },
        //             },
        //         },
        //     },
        // },
        // 页眉超链接
        socialLinks: [
            // {
            //     icon: 'gitlab',
            //     link: 'https://git.sinoeyes.com/root/paas-knowledge-base-vitepress',
            //     ariaLabel: ''
            // }
        ],
        returnToTopLabel: '返回顶部',
        lastUpdated: {
            text: '最后更新于',
            formatOptions: {
                dateStyle: 'short', // 可选值full、long、medium、short
                timeStyle: 'medium' // 可选值full、long、medium、short
            },
        },
        docFooter: {
            prev: '上一页',
            next: '下一页',
        }
    },
    mermaidPlugin: {
        class: "mermaid my-mermaid-class", // set additional css classes for parent container
    },
    markdown: {
        image: {
            // 开启图片懒加载
            lazyLoading: true
        },
        // 自定义 Markdown 渲染器的配置
        config: (md) => {
            // md.options.html = false;
            // md.options.breaks = false;
            // md.options.xhtmlOut = false;
            // md.options.typographer = false;
        },
        container: {
            tipLabel: '提示',
            warningLabel: '警告',
            dangerLabel: '危险',
            infoLabel: '信息',
            detailsLabel: '详细信息'
        }
    },
    lastUpdated: true
};

// https://vitepress.dev/reference/site-config
export default defineConfig(withSidebar(vitePressOptions, vitePressSidebarOptions))
