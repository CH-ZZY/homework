"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      news: []
    };
  },
  onLoad: function() {
    common_vendor.index.request({
      url: "https://unidemo.dcloud.net.cn/api/news",
      method: "GET",
      data: {},
      success: (res) => {
        common_vendor.index.__f__("log", "at pages/index/index.vue:30", res);
        this.news = res.data;
      },
      fail: () => {
      },
      complete: () => {
      }
    });
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.news, (item, index, i0) => {
      return {
        a: item.author_avatar,
        b: common_vendor.t(item.title),
        c: common_vendor.t(item.created_at),
        d: index
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
