import { defineConfig, postcssIsolateStyles } from 'vitepress';

// Badge HTML helper
function BadgeHTML(text: string, type: 'new' | 'updated' | 'beta' = 'new') {
  const classMap = {
    new: 'vp-badge-new',
    updated: 'vp-badge-updated',
    beta: 'vp-badge-updated',
  };
  
  return `<span class="${classMap[type]}">${text}</span>`;
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'CapsuleUI',
  description: 'CapsuleUI - Modern unstyled web components in your project',
  ignoreDeadLinks: true,
  base: '/CapsuleUI/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: 'https://raw.githubusercontent.com/ZiZiGY/CapsuleUI/master/public/favicon/favicon-32x32.png',
        type: 'image/png',
        sizes: '32x32',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        href: 'https://raw.githubusercontent.com/ZiZiGY/CapsuleUI/master/public/favicon/favicon-16x16.png',
        type: 'image/png',
        sizes: '16x16',
      },
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        href: 'https://raw.githubusercontent.com/ZiZiGY/CapsuleUI/master/public/favicon/apple-touch-icon.png',
        sizes: '180x180',
      },
    ],
    [
      'link',
      {
        rel: 'manifest',
        href: 'https://raw.githubusercontent.com/ZiZiGY/CapsuleUI/master/public/favicon/site.webmanifest',
      },
    ],
  ],

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      link: '/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          {
            text: 'Guide',
            items: [
              { text: 'Philosophy', link: '/philosophy' },
              { text: 'Getting Started', link: '/getting-started' },
              { text: 'Theming', link: '/theming' },
              { text: 'CLI Commands', link: '/cli-commands' },
            ],
          },
          { text: 'Components', link: '/components/' },
          { text: 'Modules', link: '/modules/' },
        ],

        sidebar: [
          {
            text: 'Getting Started',
            items: [
              { text: 'Philosophy', link: '/philosophy' },
              { text: 'Quick Start', link: '/getting-started' },
              { text: 'Theming', link: '/theming' },
              { text: 'CLI Commands', link: '/cli-commands' },
            ],
          },
          {
            text: 'Components',
            items: [
              { text: 'Overview', link: '/components/' },
              { text: 'Accordion', link: '/components/accordion' },
              { text: 'Alert', link: '/components/alert' },
              { text: 'AspectRatio', link: '/components/aspect-ratio' },
              { text: `Avatar ${BadgeHTML('New', 'new')}`, link: '/components/avatar' },
              { text: `Badge ${BadgeHTML('Updated', 'updated')}`, link: '/components/badge' },
              { text: 'Breadcrumb', link: '/components/breadcrumb' },
              { text: 'Button', link: '/components/button' },
              { text: 'Button Group', link: '/components/button-group' },
              { text: 'Calendar', link: '/components/calendar' },
              { text: 'Comparison', link: '/components/comparison' },
              { text: 'Divider', link: '/components/divider' },
              { text: `Icon ${BadgeHTML('New', 'new')}`, link: '/components/icon' },
              { text: 'Input', link: '/components/input' },
              { text: 'Kbd', link: '/components/kbd' },
              { text: 'Pagination', link: '/components/pagination' },
              { text: 'Progress', link: '/components/progress' },
              { text: 'Range', link: '/components/range' },
              { text: `RadioGroup ${BadgeHTML('New', 'new')}`, link: '/components/radio-group' },
              { text: 'Rating', link: '/components/rating' },
              { text: 'Skeleton', link: '/components/skeleton' },
              { text: 'Stepper', link: '/components/stepper' },
              { text: 'Switch', link: '/components/switch' },
              { text: 'Tabs', link: '/components/tabs' },
              { text: 'Textarea', link: '/components/textarea' },
              { text: 'Tooltip', link: '/components/tooltip' },
              { text: 'Tour', link: '/components/tour' },
            ],
          },
          {
            text: 'Modules',
            items: [
              { text: 'Overview', link: '/modules/' },
              { text: 'Form', link: '/modules/form' },
            ],
          },
        ],
      },
    },
    ru: {
      label: 'Русский',
      lang: 'ru',
      link: '/ru/',
      themeConfig: {
        nav: [
          { text: 'Главная', link: '/ru/' },
          {
            text: 'Руководство',
            items: [
              { text: 'Философия', link: '/ru/philosophy' },
              { text: 'Начало работы', link: '/ru/getting-started' },
              { text: 'Темизация', link: '/ru/theming' },
              { text: 'Команды CLI', link: '/ru/cli-commands' },
            ],
          },
          { text: 'Компоненты', link: '/ru/components/' },
          { text: 'Модули', link: '/ru/modules/' },
        ],

        sidebar: [
          {
            text: 'Начало работы',
            items: [
              { text: 'Философия', link: '/ru/philosophy' },
              { text: 'Быстрый старт', link: '/ru/getting-started' },
              { text: 'Темизация', link: '/ru/theming' },
              { text: 'Команды CLI', link: '/ru/cli-commands' },
            ],
          },
          {
            text: 'Компоненты',
            items: [
              { text: 'Обзор', link: '/ru/components/' },
              { text: 'Accordion', link: '/ru/components/accordion' },
              { text: 'Alert', link: '/ru/components/alert' },
              { text: 'AspectRatio', link: '/ru/components/aspect-ratio' },
              { text: `Avatar ${BadgeHTML('Новый', 'new')}`, link: '/ru/components/avatar' },
              { text: `Badge ${BadgeHTML('Обновлен', 'updated')}`, link: '/ru/components/badge' },
              { text: 'Breadcrumb', link: '/ru/components/breadcrumb' },
              { text: 'Button', link: '/ru/components/button' },
              { text: 'Button Group', link: '/ru/components/button-group' },
              { text: 'Calendar', link: '/ru/components/calendar' },
              { text: 'Comparison', link: '/ru/components/comparison' },
              { text: 'Divider', link: '/ru/components/divider' },
              { text: `Icon ${BadgeHTML('Новый', 'new')}`, link: '/ru/components/icon' },
              { text: 'Input', link: '/ru/components/input' },
              { text: 'Kbd', link: '/ru/components/kbd' },
              { text: 'Pagination', link: '/ru/components/pagination' },
              { text: 'Progress', link: '/ru/components/progress' },
              { text: 'Range', link: '/ru/components/range' },
              { text: `RadioGroup ${BadgeHTML('Новый', 'new')}`, link: '/ru/components/radio-group' },
              { text: 'Rating', link: '/ru/components/rating' },
              { text: 'Skeleton', link: '/ru/components/skeleton' },
              { text: 'Stepper', link: '/ru/components/stepper' },
              { text: 'Switch', link: '/ru/components/switch' },
              { text: 'Tabs', link: '/ru/components/tabs' },
              { text: 'Textarea', link: '/ru/components/textarea' },
              { text: 'Tooltip', link: '/ru/components/tooltip' },
              { text: 'Tour', link: '/ru/components/tour' },
            ],
          },
          {
            text: 'Модули',
            items: [
              { text: 'Обзор', link: '/ru/modules/' },
              { text: 'Form', link: '/ru/modules/form' },
            ],
          },
        ],
      },
    },
  },

  themeConfig: {
    logo: 'https://raw.githubusercontent.com/ZiZiGY/CapsuleUI/master/public/logo.png',
    search: {
      provider: 'local',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ZiZIGY/CapsuleUI' },
    ],

    editLink: {
      pattern: 'https://github.com/ZiZIGY/CapsuleUI/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },

    lastUpdated: {
      text: 'Last updated',
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-present Alexander Zhukov',
    },
  },

  vite: {
    css: {
      postcss: {
        plugins: [
          postcssIsolateStyles({ includeFiles: [/vp-doc\.css/] }),
        ],
      },
    },
  },
});
