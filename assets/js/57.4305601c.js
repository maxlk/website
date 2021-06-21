(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{260:function(s,t,a){"use strict";a.r(t);var e=a(6),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"process"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#process"}},[s._v("#")]),s._v(" process")]),s._v(" "),a("p",[s._v("An implementation of a Node.js-like "),a("code",[s._v("process")]),s._v(" global on top of WASI. Requires a WASI-enabled host and opting into WASI in the entry file with")]),s._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"wasi"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h2",{attrs:{id:"static-members"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#static-members"}},[s._v("#")]),s._v(" Static members")]),s._v(" "),a("ul",[a("li",[a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" arch"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v("\n")])])]),a("p",[s._v("String representing the CPU architecture for which the binary was compiled. Either "),a("code",[s._v("wasm32")]),s._v(" or "),a("code",[s._v("wasm64")]),s._v(".")])]),s._v(" "),a("li",[a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" platform"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v("\n")])])]),a("p",[s._v("String representing the operating system platform for which the binary was compiled. Always "),a("code",[s._v("wasm")]),s._v(".")])]),s._v(" "),a("li",[a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" argv"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("p",[s._v("Array of command line arguments passed to the binary upon instantiation.")])]),s._v(" "),a("li",[a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" env"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Map")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),a("p",[s._v("Map of variables in the binary's user environment.")])]),s._v(" "),a("li",[a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" exitCode"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("i32")]),s._v("\n")])])]),a("p",[s._v("Process exit code to use when the process exits gracefully. Defaults to "),a("code",[s._v("0")]),s._v(".")])]),s._v(" "),a("li",[a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("exit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("code"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("i32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v("\n")])])]),a("p",[s._v("Terminates the process with either the given exit code, or "),a("code",[s._v("process.exitCode")]),s._v(" if omitted.")])]),s._v(" "),a("li",[a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" stdin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" ReadableStream\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" stdout"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" WritableStream\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" stderr"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" WritableStream\n")])])]),a("p",[s._v("Streams connected to "),a("code",[s._v("stdin")]),s._v(" (fd "),a("code",[s._v("0")]),s._v("), "),a("code",[s._v("stdout")]),s._v(" (fd "),a("code",[s._v("1")]),s._v(") and "),a("code",[s._v("stderr")]),s._v(" (fd "),a("code",[s._v("2")]),s._v(") respectively.")])]),s._v(" "),a("li",[a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("i64")]),s._v("\n")])])]),a("p",[s._v("Obtains the system's current time of day, in milliseconds since Unix epoch.")])]),s._v(" "),a("li",[a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("hrtime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("u64")]),s._v("\n")])])]),a("p",[s._v("Obtains the system's monotonic high resolution time, in nanoseconds since an arbitrary time in the past.")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);