!function(){"use strict";var e={d:function(t,o){for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}};!function(e,t,o){o.d(t,{l:function(){return i}});var n=window.wp.blocks,r=JSON.parse('{"$schema":"https://json.schemastore.org/block.json","apiVersion":2,"name":"gutenberg-examples/example-01-basic-esnext","title":"Example: Basic (ESNext)","textdomain":"gutenberg-examples","icon":"universal-access-alt","category":"layout","example":{},"editorScript":"file:./build/index.js"}'),s=window.wp.element,l=window.wp.i18n,a=window.wp.blockEditor;const i={backgroundColor:"#900",color:"#fff",padding:"20px"},{name:c}=r;(0,n.registerBlockType)(c,{edit:()=>{const e=(0,a.useBlockProps)({style:i});return(0,s.createElement)("div",e,(0,l.__)("Hello World, step 1 (from the editor).","gutenberg-examples"))},save:()=>{const e=a.useBlockProps.save({style:i});return(0,s.createElement)("div",e,(0,l.__)("Hello World, step 1 (from the frontend).","gutenberg-examples"))}})}(0,{},e)}();