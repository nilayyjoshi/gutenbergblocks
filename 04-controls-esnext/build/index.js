!function(){"use strict";var e,t={793:function(){var e=window.wp.blocks,t=JSON.parse('{"apiVersion":2,"name":"gutenberg-examples/example-04-controls-esnext","title":"Example: Controls (ESNext)","textdomain":"gutenberg-examples","icon":"universal-access-alt","category":"layout","attributes":{"content":{"type":"array","source":"children","selector":"p"},"alignment":{"type":"string","default":"none"}},"example":{"attributes":{"content":"Hello world","alignment":"right"}},"editorScript":"file:./build/index.js","editorStyle":"file:./build/index.css","style":"file:./build/style-index.css"}'),n=window.wp.element,r=window.wp.blockEditor;function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}const{name:a}=t;(0,e.registerBlockType)(a,{edit:e=>{const t=(0,r.useBlockProps)(),{attributes:{content:o,alignment:a},className:l}=e;return(0,n.createElement)("div",t,(0,n.createElement)(r.BlockControls,null,(0,n.createElement)(r.AlignmentToolbar,{value:a,onChange:t=>{e.setAttributes({alignment:void 0===t?"none":t})}})),(0,n.createElement)(r.RichText,{className:l,style:{textAlign:a},tagName:"p",onChange:t=>{e.setAttributes({content:t})},value:o}))},save:e=>{const t=r.useBlockProps.save({className:`gutenberg-examples-align-${e.attributes.alignment}`});return(0,n.createElement)(r.RichText.Content,o({},t,{tagName:"p",value:e.attributes.content}))}})}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,r),a.exports}r.m=t,e=[],r.O=function(t,n,o,a){if(!n){var l=1/0;for(u=0;u<e.length;u++){n=e[u][0],o=e[u][1],a=e[u][2];for(var i=!0,s=0;s<n.length;s++)(!1&a||l>=a)&&Object.keys(r.O).every((function(e){return r.O[e](n[s])}))?n.splice(s--,1):(i=!1,a<l&&(l=a));if(i){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,o,a]},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,46:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,a,l=n[0],i=n[1],s=n[2],c=0;if(l.some((function(t){return 0!==e[t]}))){for(o in i)r.o(i,o)&&(r.m[o]=i[o]);if(s)var u=s(r)}for(t&&t(n);c<l.length;c++)a=l[c],r.o(e,a)&&e[a]&&e[a][0](),e[l[c]]=0;return r.O(u)},n=self.webpackChunk_04_controls_esnext=self.webpackChunk_04_controls_esnext||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var o=r.O(void 0,[46],(function(){return r(793)}));o=r.O(o)}();