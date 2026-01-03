// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import Layout from './components/Layout.vue';
import './style.css';
import '../../@capsule/global.css';

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app, router, siteData }) {
    // ...

    if (typeof window !== 'undefined') {
      import('../../@capsule');
    }
  },
} satisfies Theme;
