// https://vitepress.dev/guide/custom-theme
import {h, watch, onMounted, nextTick} from 'vue'
import type {Theme} from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import mediumZoom from 'medium-zoom';
import { useRoute,useData } from 'vitepress'
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import './index.css'


// 彩虹背景动画样式
let homePageStyle: HTMLStyleElement | undefined

// 彩虹背景动画样式
function updateHomePageStyle(value: boolean) {
    if (value) {
        if (homePageStyle) return

        homePageStyle = document.createElement('style')
        homePageStyle.innerHTML = `
        :root {
          animation: rainbow 12s linear infinite;
        }`
        document.body.appendChild(homePageStyle)
    } else {
        if (!homePageStyle) return

        homePageStyle.remove()
        homePageStyle = undefined
    }
}

export default {
    extends: DefaultTheme,
    Layout: () => {
        return h(DefaultTheme.Layout, null, {
            // https://vitepress.dev/guide/extending-default-theme#layout-slots
        })
    },
    enhanceApp({app, router, siteData}) {
        // 彩虹背景动画样式
        if (typeof window !== 'undefined') {
            watch(
                () => router.route.data.relativePath,
                () => updateHomePageStyle(location.pathname === '/'),
                {immediate: true},
            )
        }
        // 单页面应用路由更新时触发百度统计事件
        router.onBeforeRouteChange = (to) => {
            if (typeof _hmt !== 'undefined') {
                _hmt.push(['_trackPageview', to]);
            }
        }
    },
    setup() {
        const { frontmatter } = useData();
        const route = useRoute();
        // giscus配置
        giscusTalk({
                repo: 'yiwangai1983/giscus',
                repoId: 'R_kgDOOTM8Dg',
                category: 'General', // default: `General`
                categoryId: 'DIC_kwDOOTM8Ds4CovBw',
                mapping: 'title',
                inputPosition: 'bottom',
                lang: 'zh-CN',
            },
            {
                frontmatter, route
            },
            //默认值为true，表示已启用，此参数可以忽略；
            //如果为false，则表示未启用
            //您可以使用“comment:true”序言在页面上单独启用它
            true
        );
        const initZoom = () => {
            // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
            mediumZoom('.main img', {background: 'var(--vp-c-bg)'}); // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
        };
        onMounted(() => {
            initZoom();
        });
        watch(
            () => route.path,
            () => nextTick(() => initZoom())
        );
    }
} satisfies Theme
