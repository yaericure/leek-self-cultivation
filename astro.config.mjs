// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://yaericure.github.io',
  base: '/leek-self-cultivation',
  integrations: [
    starlight({
      title: '韭菜的自我修養',
      description: '李笑來首次公開的投資原則:認清週期、控制風險,從此不再是被收割的韭菜。',
      defaultLocale: 'root',
      locales: { root: { label: '正體中文', lang: 'zh-TW' } },
      customCss: ['./src/styles/theme.css'],
      lastUpdated: false,
      pagination: true,
      sidebar: [
        { label: '前言:韭菜的自我修養:寫在前面'.replace(':',':'), slug: 'unit00' },
        {
          label: '認識韭菜',
          items: [
            { label: '第1課 誰是「韭菜」:定義與宿命的起點', slug: 'unit01' },
            { label: '第2課 亡羊補牢與交易者的學習能力', slug: 'unit02' },
          ],
        },
        {
          label: '心態迷思',
          items: [
            { label: '第3課 打破零和遊戲的迷思', slug: 'unit03' },
            { label: '第4課 價值投資的真相與實力的真義', slug: 'unit04' },
          ],
        },
        {
          label: '風險控制',
          items: [
            { label: '第5課 冒險的智慧與風險計算', slug: 'unit05' },
            { label: '第6課 止損線與交易頻次的祕密', slug: 'unit06' },
          ],
        },
        {
          label: '反思與自我修養',
          items: [
            { label: '第7課 誰在割誰:自我欺騙的幻覺', slug: 'unit07' },
            { label: '第8課 人是怎樣變壞又變傻的', slug: 'unit08' },
          ],
        },
        {
          label: '策略與布局',
          items: [
            { label: '第9課 收益風險比與早期投資的門檻', slug: 'unit09' },
            { label: '第10課 借力市場智慧與擺脫 FOMO', slug: 'unit10' },
          ],
        },
        {
          label: '心性修煉',
          items: [
            { label: '第11課 孤獨的品質與場外的成長', slug: 'unit11' },
            { label: '第12課 認識、識別與把握週期', slug: 'unit12' },
          ],
        },
        { label: '結語:你,從來都不是韭菜'.replace(':',':'), slug: 'unit13' },
      ],
    }),
    react(),
  ],
  vite: { plugins: [tailwindcss()] },
});
