import {defineConfig} from 'vitepress'
import {withSidebar} from 'vitepress-sidebar';


const vitePressSidebarOptions = [
    {
        documentRootPath: 'docs',
        scanStartPath: 'switch',
        basePath: '/switch/',
        resolvePath: '/switch/',
        useTitleFromFileHeading: false,
        collapsed: false,
        useFolderLinkFromSameNameSubFile: true,
        sortMenusByFrontmatterDate: true
    }
];

const vitePressOptions = {
    base: '/yiwangai1983/',
    lang: 'zh-CN',
    title: "胖胖爸爸的游戏小站",
    description: "分享一些有趣的东西",
    head: [
        ['link', {rel: 'icon', href: '/yiwangai1983/logo.png'}],
        [
            'script',
            {},
            `
              var _hmt = _hmt || [];
                (function() {
                  var hm = document.createElement("script");
                  hm.src = "https://hm.baidu.com/hm.js?16d0939c5681e2c37cc708d479b586e3";
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
        siteTitle: '游戏小站',
        nav: [
            {text: '首页', link: '/'},
            {
                text: '🎮️Nintendo',
                icon: '/nintendo/Nintendo_1.png',
                items: [
                    {
                        text: 'Switch',
                        items: [
                            {text: '游戏', link: '/switch/游戏/index'},
                            {text: '工具箱', link: '/switch/工具箱/整合包_19.0.0.html'}
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
            message: '本站发布内容如有侵权请到<a href="https://github.com/yiwangai1983/yiwangai1983" target="_blank">Github</a>提交issue联系删除'
        },
        //Algolia搜索
        // search: {
        //     provider: 'local'
        // },
        search: {
            provider: 'algolia',
            options: {
                appId: 'TTYBASMNZI',
                apiKey: '210535eceb7ef925e02ffd8141d23e8e',
                indexName: 'yiwangai1983',
                locales: {
                    root: {
                        placeholder: '搜索文档',
                        translations: {
                            button: {
                                buttonText: '搜索文档',
                                buttonAriaLabel: '搜索文档'
                            },
                            modal: {
                                searchBox: {
                                    resetButtonTitle: '清除查询条件',
                                    resetButtonAriaLabel: '清除查询条件',
                                    cancelButtonText: '取消',
                                    cancelButtonAriaLabel: '取消'
                                },
                                startScreen: {
                                    recentSearchesTitle: '搜索历史',
                                    noRecentSearchesText: '没有搜索历史',
                                    saveRecentSearchButtonTitle: '保存至搜索历史',
                                    removeRecentSearchButtonTitle: '从搜索历史中移除',
                                    favoriteSearchesTitle: '收藏',
                                    removeFavoriteSearchButtonTitle: '从收藏中移除'
                                },
                                errorScreen: {
                                    titleText: '无法获取结果',
                                    helpText: '你可能需要检查你的网络连接'
                                },
                                footer: {
                                    selectText: '选择',
                                    navigateText: '切换',
                                    closeText: '关闭',
                                    searchByText: ''
                                },
                                noResultsScreen: {
                                    noResultsText: '无法找到相关结果',
                                    suggestedQueryText: '你可以尝试查询',
                                    reportMissingResultsText: '你认为该查询应该有结果？',
                                    reportMissingResultsLinkText: '点击反馈'
                                },
                            },
                        },
                    },
                },
            },
        },
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
