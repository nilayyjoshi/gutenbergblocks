!function(){"use strict";var e=window.wp.element,t=window.wp.components,n=window.wp.data,l=window.wp.coreData;function a(){const[a,s]=(0,e.useState)(""),{pages:o,hasResolved:c}=(0,n.useSelect)((e=>{const t={};a&&(t.search=a);const n=["postType","page",t];return{pages:e(l.store).getEntityRecords(...n),hasResolved:e(l.store).hasFinishedResolution("getEntityRecords",n)}}),[a]);return(0,e.createElement)("div",null,(0,e.createElement)(t.SearchControl,{onChange:s,value:a}),(0,e.createElement)(r,{hasResolved:c,pages:o}))}function r({hasResolved:n,pages:l}){return n?null!=l&&l.length?(0,e.createElement)("table",{className:"wp-list-table widefat fixed striped table-view-list"},(0,e.createElement)("thead",null,(0,e.createElement)("tr",null,(0,e.createElement)("td",null,"Title"))),(0,e.createElement)("tbody",null,null==l?void 0:l.map((t=>(0,e.createElement)("tr",{key:t.id},(0,e.createElement)("td",null,t.title.rendered)))))):(0,e.createElement)("div",null,"No results"):(0,e.createElement)(t.Spinner,null)}window.addEventListener("load",(function(){(0,e.render)((0,e.createElement)(a,null),document.querySelector("#my-first-gutenberg-app"))}),!1)}();