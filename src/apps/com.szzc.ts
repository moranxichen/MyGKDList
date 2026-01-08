import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.szzc',
  name: '神州租车',
  groups: [
    {
          key: 1, // 规则组的唯一ID，该APP内不重复即可
          name: "抽奖点X", // 规则名称
          desc: "抽奖自动点X", // 描述
          matchTime: 10000, // (可选) 只有在应用打开的前10秒匹配，省电
          actionMaximum: 1, // (可选) 限制最大执行次数，防止死循环
          rules: [
            {
              matches: "View[NAF=true][clickable=true][index=1]",
            },
            {
              matches: "View[clickable=true] > Image[index=0][package='com.szzc']",
              // 解释：找到一个可点击的 View，它的直接子元素是一个 index 为 0 的 Image
              // GKD 会默认点击 matches 规则中最后匹配到的那个节点。
              // 如果想点 View 而不是 Image，需要配合 << 符号：
              // matches: "Image[index=0] << View[clickable=true]"
            }
          ]
        }
  ],
});
