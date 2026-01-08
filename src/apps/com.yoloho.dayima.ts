import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.yoloho.dayima',
  name: '大姨妈',
  groups: [
    {
      key: 1,
      name: '弹窗广告',
      rules: [
        {
          // 直接使用 vid (即 resource-id 的简写)
          // 只要 ID 包含 close_button 且可点击即可
          matches: "[vid='noah_interstitial_close_button'][clickable=true]",
        },
      ],
    },
  ],
});
