(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{785:function(t,a,s){"use strict";s.r(a);var e=s(4),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"scroll-view-组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scroll-view-组件"}},[t._v("#")]),t._v(" scroll-view 组件")]),t._v(" "),s("p",[t._v("虽然 min-height 可达到竖向滚动效果，但无法使用 scroll-into-view，必须用 height 定好固定高度才可使用")]),t._v(" "),s("h2",{attrs:{id:"跳转至-tabbar-页面需要传参"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#跳转至-tabbar-页面需要传参"}},[t._v("#")]),t._v(" 跳转至 tabBar 页面需要传参")]),t._v(" "),s("p",[t._v("使用 reLaunch API，进行传参跳转")]),t._v(" "),s("h2",{attrs:{id:"tabbar-页面使用-showloading"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tabbar-页面使用-showloading"}},[t._v("#")]),t._v(" tabBar 页面使用 showLoading")]),t._v(" "),s("p",[t._v("就算使用了属性 mask，还是可以点击跳转其他 tabBar 页面。\n解决方法：于 onHide 生命周期内 hideLoading Api")]),t._v(" "),s("h2",{attrs:{id:"小程序返回上一页提示"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小程序返回上一页提示"}},[t._v("#")]),t._v(" 小程序返回上一页提示")]),t._v(" "),s("p",[t._v("于 onLoad 内使用 API: "),s("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.enableAlertBeforeUnload.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("wx.enableAlertBeforeUnload"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"微信小程序客服消息发送卡片功能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#微信小程序客服消息发送卡片功能"}},[t._v("#")]),t._v(" 微信小程序客服消息发送卡片功能")]),t._v(" "),s("ul",[s("li",[t._v("微信小程序客服消息发送卡片功能，基于 "),s("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/component/button.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("button 组件"),s("OutboundLink")],1)])]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("open-type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("contact"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":send-message-title")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("卡片标题"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":send-message-img")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("封面图"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("show-message-card")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("send-message-path")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("跳转小程序的页面路径"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("ul",[s("li",[t._v("注意事项：\n"),s("ul",[s("li",[t._v("send-message-path 需以绝对路径（/pages/index/index），后面可传参（/pages/index/index?id=1）")]),t._v(" "),s("li",[t._v("发送给客服的小程序卡片，无法在当前小程序使用中，点击跳转到对应页面，需关闭小程序于小程序客服消息内点击卡片跳转")])])])]),t._v(" "),s("h2",{attrs:{id:"session-key-刷新问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#session-key-刷新问题"}},[t._v("#")]),t._v(" session_key 刷新问题")]),t._v(" "),s("ol",[s("li",[t._v("调用 wx.login 会有概率刷新 session_key （服务端解密等操作时需要用到，建议每次 wx.login 的时候存在服务端）。")]),t._v(" "),s("li",[t._v("建议不要同步进行授权操作跟 wx.login 调用（重点）。如服务端需要 session_key 进行解密操作时调用 wx.login 会存在 session_key 刷新解密失败的情况。")])]),t._v(" "),s("p",[t._v("注：更多注意事项不定时更新")])])}),[],!1,null,null,null);a.default=n.exports}}]);