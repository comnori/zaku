(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{VkVD:function(e,t,o){"use strict";o.r(t);var i=o("mXGw"),n=o.n(i),s=o("xARA"),a=o.n(s),r=o("yiHB"),d=o.n(r),l={stroke:"#CED4D9",fill:"#FFFFFF",shadowOffsetX:0,shadowOffsetY:4,shadowBlur:10,shadowColor:"rgba(13, 26, 38, 0.08)",lineWidth:1,radius:4,strokeOpacity:.7},c={panningCanvas:"-webkit-grabbing",beforePanCanvas:"-webkit-grab",hoverNode:"move",hoverEffectiveAnchor:"crosshair",hoverEdge:"default",hoverGroup:"move",hoverUnEffectiveAnchor:"default",hoverEdgeControllPoint:"crosshair",multiSelect:"crosshair"},h=o("hHgk"),u=o.n(h),g=o("wuQJ"),p=o.n(g),f=o("UthY"),y=o.n(f),v=o("tvLF"),k=o.n(v),w=o("s4hn"),m=o.n(w),E=o("1qCV"),b=o.n(E),S=o("azxR");function F(e,t){var o=b()(e);if(m.a){var i=m()(e);t&&(i=i.filter((function(t){return k()(e,t).enumerable}))),o.push.apply(o,i)}return o}function C(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?F(Object(o),!0).forEach((function(t){Object(S.a)(e,t,o[t])})):y.a?p()(e,y()(o)):F(Object(o)).forEach((function(t){u()(e,t,k()(o,t))}))}return e}var N={icon:null,iconStyle:{width:12,height:12,left:2,top:2},style:C({},l,{fill:"#E7F7FE",stroke:"#1890FF",cursor:"default"}),stateStyles:{selected:{fill:"#95D6FB"},hover:{cursor:c.hoverNode}}},x={icon:null,iconStyle:{width:20,height:20,left:2,top:2},style:C({},l,{fill:"#E8FEFA",stroke:"#13C2C2",cursor:"default"}),stateStyles:{selected:{fill:"#8CE8DE"},hover:{cursor:c.hoverNode}}},L={icon:null,iconStyle:{width:18,height:18,left:6,top:6},style:C({},l,{fill:"#FEF7E8",stroke:"#FA8C16",cursor:"default"}),stateStyles:{selected:{fill:"#FCD49A"},hover:{cursor:c.hoverNode}}},D={icon:null,iconStyle:{width:18,height:18,left:6,top:6},style:C({},l,{fill:"#EFF7E8",stroke:"#F5222D",cursor:"default"}),stateStyles:{selected:{fill:"#CFD49A"},hover:{cursor:c.hoverNode}}},z={icon:null,iconStyle:{width:20,height:20,left:-10,top:-8},style:C({},l,{fill:"#FEF7E8",stroke:"#FA8C16",cursor:"default"}),stateStyles:{selected:{fill:"#FCD49A"},hover:{cursor:c.hoverNode}}},M=n.a.createElement,A={nodes:[{id:"parallel-gateway-node",shape:"parallel-gateway-node",x:100,y:200},{id:"node2",x:300,y:200},{id:"node3",x:300,y:300},{id:"node-modelRect",x:300,y:100,shape:"modelRect",label:"modelRect",anchorPoints:[[0,1],[.5,1]]},{id:"node-modelRect2",x:300,y:300,shape:"modelRect",label:"modelRect",anchorPoints:[[0,1],[.5,1]]}],edges:[{id:"edge1",target:"node2",source:"node1"}]};t.default=function(){var e=n.a.useRef(null),t=null;return Object(i.useLayoutEffect)((function(){if(!t){var o=0;d.a.registerBehavior("click-add-edge",{getEvents:function(){return{"node:click":"onClick",mousemove:"onMousemove","edge:click":"onEdgeClick"}},onClick:function(e){var t=e.item,o=this.graph,i={x:e.x,y:e.y},n=t.getModel();this.addingEdge&&this.edge?(o.updateItem(this.edge,{target:n.id}),this.edge=null,this.addingEdge=!1):(this.edge=o.addItem("edge",{source:n.id,target:i}),this.addingEdge=!0)},onMousemove:function(e){var t={x:e.x,y:e.y};this.addingEdge&&this.edge&&this.graph.updateItem(this.edge,{target:t})},onEdgeClick:function(e){var o=e.item;this.addingEdge&&this.edge==o&&(t.removeItem(this.edge),this.edge=null,this.addingEdge=!1)}}),d.a.registerBehavior("click-add-node",{getEvents:function(){return{"canvas:click":"onClick"}},onClick:function(e){this.graph,this.graph.addItem("node",{x:e.canvasX,y:e.canvasY,id:"node-".concat(o)});o++}}),t=new d.a.Graph({container:a.a.findDOMNode(e.current),width:500,height:500,modes:{default:["drag-node","click-select"],addNode:["click-add-node","click-select"],addEdge:["click-add-edge","click-select"]},nodeStateStyles:{selected:{fill:"#95D6FB"},hover:{cursor:c.hoverNode}},plugins:[new d.a.Minimap({size:[100,100],className:"minimap",type:"delegate"})]}),(i=d.a).registerNode("task-node",{shapeType:"rect",options:C({},N),getShapeStyle:function(e){e.size=[80,44];var t=e.size[0],o=e.size[1];return C({x:0-t/2,y:0-o/2,width:t,height:o},this.options.style)}},"base-node"),i.registerNode("gateway-node",{shapeType:"path",labelPosition:"bottom",options:C({},x),getShapeStyle:function(e){e.size=[40,40];var t=e.size[0],o=e.size[1];return C({path:[["M",-4,0-o/2+4],["Q",0,0-o/2,4,0-o/2+4],["L",t/2-4,-4],["Q",t/2,0,t/2-4,4],["L",4,o/2-4],["Q",0,o/2,-4,o/2-4],["L",-t/2+4,4],["Q",-t/2,0,-t/2+4,-4],["Z"]]},this.options.style)}},"base-node"),i.registerNode("exclusive-gateway-node",{afterDraw:function(e,t){t.icon=t.addShape("path",{attrs:{path:[["M",-8,-8],["L",8,8],["Z"],["M",8,-8],["L",-8,8],["Z"]],lineWidth:2,stroke:this.options.style.stroke}})}},"gateway-node"),i.registerNode("parallel-gateway-node",{afterDraw:function(e,t){t.icon=t.addShape("path",{attrs:{path:[["M",0,-10],["L",0,10],["Z"],["M",-10,0],["L",10,0],["Z"]],lineWidth:2,stroke:this.options.style.stroke}})}},"gateway-node"),i.registerNode("inclusive-gateway-node",{afterDraw:function(e,t){t.icon=t.addShape("circle",{attrs:{x:0,y:0,r:10,lineWidth:2,stroke:this.options.style.stroke}})}},"gateway-node"),i.registerNode("start-node",{shapeType:"circle",labelPosition:"bottom",options:C({},L),getShapeStyle:function(e){return e.size=[30,30],C({x:0,y:0,r:e.size[0]/2},this.options.style)},afterDraw:function(e,t){t.icon=t.addShape("path",{attrs:{path:[["M",-4,-6],["L",6,0],["L",-4,6],["Z"]],fill:this.options.style.stroke,stroke:this.options.style.stroke}})},getAnchorPoints:function(){return[[.5,0],[1,.5],[.5,1]]}},"base-node"),i.registerNode("end-node",{shapeType:"circle",labelPosition:"bottom",options:C({},D),getShapeStyle:function(e){return e.size=[30,30],C({x:0,y:0,r:e.size[0]/2},this.options.style)},afterDraw:function(e,t){t.icon=t.addShape("path",{attrs:{path:[["M",-4,-4],["L",4,-4],["L",4,4],["L",-4,4],["Z"]],fill:this.options.style.stroke,stroke:this.options.style.stroke}})},getAnchorPoints:function(){return[[.5,0],[.5,1],[0,.5]]}},"base-node"),i.registerNode("catch-node",{shapeType:"path",labelPosition:"bottom",options:C({},z),getShapeStyle:function(e){e.size=[50,30];var t=e.size[0],o=e.size[1];return C({path:[["M",0,-o/3],["L",t/2,-o/3],["L",0,o/3*2],["L",-t/2,-o/3],["Z"]]},this.options.style)},getAnchorPoints:function(){return[[.5,0],[.8,.38],[.5,1],[.2,.38]]}},"base-node"),t.setMode("edit"),t.data(A)}var i;t.render()}),[]),M("div",{ref:e})}}}]);