import{d as l,o as r,c,b as i,F as p,e as a,p as m,f as u}from"./app.43305326.js";import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";const g="d3-graph-controller",v="2.2.11",y="A TypeScript library for visualizing and simulating directed, interactive graphs.",f=["d3","graph","controller"],b="MIT",_="github:DerYeger/d3-graph-controller",k="https://graph-controller.yeger.eu",j={url:"https://github.com/DerYeger/d3-graph-controller/issues"},w={name:"Jan M\xFCller",url:"https://github.com/DerYeger"},$=["dist","default.css"],x={".":{import:"./dist/d3-graph-controller.es.js",require:"./dist/d3-graph-controller.umd.js"},"./default.css":{import:"./default.css",require:"./default.css"}},I="./dist/d3-graph-controller.umd.js",S="./dist/d3-graph-controller.es.js",D={prepare:"is-ci || husky install",prebuild:"rimraf ./dist",build:"tsc --noEmit && vite build",dev:"vite build --watch",demo:"yarn demo:typecheck && yarn demo:build","demo:dev":"vite --config demo/vite.config.ts","demo:build":"vite --config demo/vite.config.ts build","demo:preview":"yarn demo:build && vite --config demo/vite.config.ts preview","demo:typecheck":"tsc --noEmit -p demo",docs:"yarn docs:typecheck && yarn docs:build","docs:build":"vuepress build docs","docs:dev":"vuepress dev docs","docs:typecheck":"tsc --noEmit -p docs",lint:'eslint "./**/*.{js,json,md,ts,vue,yaml,yml}"',"lint:prettier":'prettier --check "./**/*.{html,js,json,md,scss,ts,vue,yml}"',fix:"yarn lint --fix ",test:"yarn test:typecheck && yarn test:ci","test:ci":"rimraf ./coverage && vitest --run --coverage","test:run":"vitest --run","test:typecheck":"tsc --noEmit -p test","test:watch":"vitest",pretty:'prettier --write "./**/*.{js,json,html,md,scss,ts,vue,yml}"'},E="dist/types/src/main.d.ts",M=!1,z={"@yeger/debounce":"1.0.3","d3-drag":"3.0.0","d3-force":"3.0.0","d3-selection":"3.0.0","d3-zoom":"3.0.0","ts-deepmerge":"2.0.1",vecti:"2.0.6"},C={"@commitlint/cli":"16.2.1","@commitlint/config-conventional":"16.2.1","@types/d3-drag":"3.0.1","@types/d3-force":"3.0.3","@types/d3-selection":"3.0.2","@types/d3-zoom":"3.0.1","@types/node":"16.11.25","@types/resize-observer-browser":"0.1.7","@vitejs/plugin-vue":"2.2.2","@vitest/ui":"0.4.2","@vuepress/plugin-register-components":"2.0.0-beta.35","@vuepress/plugin-search":"2.0.0-beta.35","@yeger/eslint-config":"1.4.2",c8:"7.11.0","d3-graph-controller":"link:.",eslint:"8.9.0",husky:"7.0.4","is-ci":"3.0.1",jsdom:"19.0.0","lint-staged":"12.3.4",rimraf:"3.0.2",typescript:"4.5.5",unocss:"0.25.0","unplugin-vue-components":"0.17.18",vite:"2.8.4","vite-plugin-dts":"0.9.9",vitest:"0.3.6",vue:"3.2.31",vuepress:"2.0.0-beta.35"};var n={name:g,version:v,description:y,keywords:f,license:b,repository:_,homepage:k,bugs:j,author:w,files:$,exports:x,main:I,module:S,scripts:D,types:E,sideEffects:M,"lint-staged":{"*.{js,json,md,ts,vue,yaml,yml}":"eslint --fix"},dependencies:z,devDependencies:C};const T=s=>(m("data-v-60041ecc"),s=s(),u(),s),B={id:"status"},F=T(()=>i("h2",null,"Status",-1)),N={id:"badges"},P=["href"],Y=["alt","src"],q=l({setup(s){const t=n.name,e=n.repository.replace("github:",""),d=[{href:`https://github.com/${e}/actions/workflows/ci.yml`,alt:"CI",src:`https://img.shields.io/github/workflow/status/${e}/CI?label=ci&logo=github&color=#4DC71F`},{href:`https://www.npmjs.com/package/${t}`,alt:"NPM",src:`https://img.shields.io/npm/v/${t}?logo=npm`},{href:`https://codecov.io/gh/${e}`,alt:"Codecov",src:`https://codecov.io/gh/${e}/branch/master/graph/badge.svg?token=p35W6u2noe`},{href:`https://lgtm.com/projects/g/${e}`,alt:"LGTM Grade",src:`https://img.shields.io/lgtm/grade/javascript/github/${e}?logo=lgtm`},{href:"https://opensource.org/licenses/MIT",alt:"MIT",src:`https://img.shields.io/npm/l/${t}?color=%234DC71F`},{href:`https://bundlephobia.com/package/${t}`,alt:"NPM Bundle Size",src:`https://img.shields.io/bundlephobia/minzip/${t}`}];return(G,L)=>(r(),c("div",B,[F,i("div",N,[(r(),c(p,null,a(d,o=>i("a",{key:o.src,href:o.href},[i("img",{alt:o.alt,src:o.src},null,8,Y)],8,P)),64))])]))}});var V=h(q,[["__scopeId","data-v-60041ecc"]]);export{V as default};
