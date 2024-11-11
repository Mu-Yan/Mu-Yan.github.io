(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{795:function(s,e,a){"use strict";a.r(e);var n=a(4),t=Object(n.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("简单介绍下 LF 和 CRLF 的区别")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("LF")]),s._v("：'\\n'，Linux 的换行符；")]),s._v(" "),a("li",[a("code",[s._v("CRLF")]),s._v("：'\\r\\n'，Windows 的换行符；")])]),s._v(" "),a("p",[s._v("从以上的区别就可以看到，此类问题主要出现在多人开发时的跨系统问题。")]),s._v(" "),a("p",[s._v("如果不对该问题进行处理，每次 "),a("code",[s._v("git commit")]),s._v(" 提交的时候都会存在换行符变更问题，导致一个文件在只修改几行代码的情况下，变更当前变更文件的全部换行符，导致其他系统开发人员拉取代码时，误以为修改文件全部变更的假象，也增加的解决冲突的烦恼。")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("为了解决这个问题可以把 "),a("code",[s._v("Windows 开发人员")]),s._v(" 的换行符统一成 "),a("code",[s._v("LF")]),s._v("，以下以 "),a("code",[s._v("vscode")]),s._v(" 为例")])]),s._v(" "),a("li",[a("p",[s._v("在拉取项目仓库前，先进行以下统一配置")])])]),s._v(" "),a("ol",[a("li",[a("p",[s._v("打开文件 -> 首选项 -> 设置 -> 文件 -> Eol -> 选择 "),a("code",[s._v("\\n")]),s._v("，统一新建文件时换行符定义")])]),s._v(" "),a("li",[a("p",[s._v("配置 "),a("code",[s._v(".vscode/settings.json")]),s._v(" 文件跟 "),a("code",[s._v(".gitignore")]),s._v(" 文件")])])]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// .vscode/settings.json")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"files.eol"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\\n"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ul",[a("li",[s._v("取消忽略 "),a("code",[s._v(".vscode/settings.json")]),s._v(" 文件")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# .gitignore")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Editor directories and files")]),s._v("\n.vscode/*\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(".vscode/settings.json\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("关闭 git 的 "),a("code",[s._v("core.autocrlf")]),s._v(" 这个配置，该配置默认是 "),a("code",[s._v("true")]),s._v("，即 "),a("code",[s._v("git pull")]),s._v(" 时自动将远程代码里的换行符（比如 LF）转换成当前系统的换行符（比如 CRLF）")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭 git 的CRLF自动转换，保留文件原来的换行样式")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global core.autocrlf "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("查看变更是否生效，为 "),a("code",[s._v("false")]),s._v(" 就是生效了")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global -l\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输出结果：core.autocrlf=false")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[a("p",[s._v("通过以上方法处理后就可以进行愉快的跨系统开发了")])]),s._v(" "),a("li",[a("p",[s._v("已有项目解决方法，一般情况下建议通过以上方法实现")])])]),s._v(" "),a("ul",[a("li",[s._v("在安装好 "),a("code",[s._v("prettier")]),s._v(" 插件后使用以下命令一键自动修改格式，以下命令会导致问题文件变更问题，一般情况下不建议使用")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("npx prettier --write --end-of-line lf "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);e.default=t.exports}}]);