import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.yoloho.dayima',
  name: '大姨妈',
  groups: [
    {
      key: 0,
      name: '弹窗广告',
      rules: [
        {
          key: 0,
          name: '插屏关闭按钮-1', // 对应图 3
          matches: "[vid='noah_interstitial_close_button']",
        },
        {
          key: 1,
          name: '插屏关闭按钮-2', // 对应图 5
          matches: "[vid='ms_activity_sdk_interstitial_cacel']",
        },
        {
          key: 2,
          name: '右上角小叉号', // 对应图 4
          // 严禁使用 bounds，拆解为 left 和 top
          matches: 'ImageView[clickable=true][left=913][top=720]',
        },
      ],
    },
  ],
});
