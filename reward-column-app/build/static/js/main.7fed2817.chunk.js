(this["webpackJsonpreward-column-app"]=this["webpackJsonpreward-column-app"]||[]).push([[0],{147:function(e,t,n){e.exports=n(272)},272:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(27),l=n.n(o),c=n(284),i=n(281),s=n(35),u=n(24),d=n(61),p=n(280),h={Reward1:"Reward1",Reward2:"Reward2",Reward3:"Reward3",Reward4:"Reward4",Reward5:"Reward5"},m=n(282),f=function(e){var t=e.x,n=e.y,a=e.deleteReward,o=Object(m.a)({item:{type:h["Reward"+(n+1)],pos:[t,n]},collect:function(e){return{isDragging:!!e.isDragging()}}}),l=Object(u.a)(o,2),c=l[0].isDragging,i=l[1];return r.a.createElement("div",{ref:i,style:{opacity:c?.5:1,fontSize:12,fontWeight:"bold",cursor:"move"}},r.a.createElement(p.a,{style:{padding:"0 10px"}},r.a.createElement("div",{onClick:function(){return a(t,n)},hidden:0===t,style:{color:"red",textAlign:"right"}},"X"),r.a.createElement(p.a.Image,{size:"small",style:{width:"133px"},src:"/images/"+d[n].pic}),r.a.createElement(p.a.Content,null,r.a.createElement(p.a.Header,null,d[n].name+" - "+d[n].cost),r.a.createElement(p.a.Description,null))))},g=n(278),E=n(135),v=function(e){var t=e.x,n=(e.y,e.children);return(r.a.createElement("div",{style:{paddingTop:0===t?"21px":0,backgroundColor:"white",width:"100%",height:"100%"}},n))},w=[0,0],y=[],C=[[0,0],[0,1],[0,2],[0,3],[0,4]],b=[],x=[],R=[],j=[],A=function(){y.forEach((function(e){return e&&e(C)}))},O=function(e,t){for(var n=0;n<C.length;n++)if(C[n][0]===e&&C[n][1]===t){var a=C.splice(n,1),r=Object(u.a)(a,1)[0];b.push(r),w=[e,0],x.push("deleted"),A()}},k=n(283),D=function(e){return r.a.createElement("div",{style:{position:"absolute",top:0,left:0,height:"100%",width:"100%",zIndex:1,opacity:.5,backgroundColor:e.color}})},T=function(e){var t=e.x,n=e.y,a=e.children,o=0===t,l=Object(k.a)({accept:h["Reward"+(n+1)],canDrop:function(){return function(e,t,n){var a;C.forEach((function(n){n[0]===e&&n[1]===t&&(a=!0)}));var r=Object(u.a)(C[n],2),o=r[0],l=r[1],c=Math.abs(t-l),i=Math.abs(e);return 0===c&&i!==o&&!a}(t,n,n)},drop:function(e){!function(e,t,n){var a;if(j=[],n[0]!==e&&n[1]!==t||0!==n[0])for(var r=0;r<C.length;r++)if(C[r][0]===n[0]&&C[r][1]===n[1]){var o=C.splice(r,1),l=Object(u.a)(o,1)[0];b.push(l),a=!0}w=[e,t],C.push(w),a?x.push("transferred"):x.push("added"),A()}(t,n,e.pos)},collect:function(e){return{isOver:!!e.isOver(),canDrop:!!e.canDrop()}}}),c=Object(u.a)(l,2),i=c[0],s=i.isOver,d=i.canDrop,p=c[1];return r.a.createElement("div",{ref:p,style:{position:"relative",width:"100%",height:"100%"}},r.a.createElement(v,{x:t,y:n},a),s&&!d&&!o&&r.a.createElement(D,{color:"red"}),s&&d&&!o&&r.a.createElement(D,{color:"green"}),!s&&d&&!o&&r.a.createElement(D,{color:"yellow"}))},P=function(e,t,n){if(n[0]===e&&n[1]===t)return r.a.createElement(f,{x:e,y:t,deleteReward:O})},z=function(e){for(var t=e.storedPosition,n=[],a=function(e){var a=e%6,o=Math.floor(e/6),l=[0,0];t.forEach((function(e){e[0]===a&&e[1]===o&&(l=e)})),n.push(function(e,t,n,a){return r.a.createElement("div",{key:e,style:{width:"16.6%",height:"20%",borderLeft:"lightgrey 2px dashed",borderBottom:"lightgrey 2px solid"}},r.a.createElement(T,{x:n,y:a},P(n,a,t)))}(e,l,a,o))},o=0;o<30;o++)a(o);return(r.a.createElement(g.a,{backend:E.a},r.a.createElement("div",{style:{width:"100%",height:"99%",display:"flex",flexWrap:"wrap"}},n)))},S={color:"#11AF42"},$=function(e){return r.a.createElement(c.a,null,r.a.createElement(c.a.Row,{style:{margin:"5px 0",borderBottom:"1px solid lightgrey"}},r.a.createElement(c.a.Column,{width:3,textAlign:"right"},r.a.createElement(i.a,{animated:"vertical",onClick:function(){return function(){var e={id:1,positions:C};fetch("/positions/"+e.id,{method:"GET",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}}).then((function(t){t.json().then((function(t){fetch("/positions/1",{method:t.length?"PATCH":"POST",headers:{"Content-Type":"application/json",Accept:"application/json","Access-Control-Allow-Origin":"*"},body:JSON.stringify(e)}).then((function(e){return console.log(e)})).then((function(e){alert("Progress saved.")})).catch((function(e){console.log(e),alert("Error. Unable to save.")}))})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))}()}},r.a.createElement(i.a.Content,{hidden:!0},"Save"),r.a.createElement(i.a.Content,{visible:!0},r.a.createElement(s.a,{size:"large",name:"save outline"})))),r.a.createElement(c.a.Column,{width:10,textAlign:"center"},r.a.createElement("h1",{style:S},"Rewards Dashboard")),r.a.createElement(c.a.Column,{width:3},r.a.createElement(i.a,{animated:"vertical",onClick:function(){return function(){if(x.length>0){var e=x.pop();if("deleted"===e){var t=b.pop();C.push(t)}else if("added"===e){var n=C.pop();R.push(n)}else if("transferred"===e){var a=C.pop(),r=b.pop();C.push(r),R.push(a)}j.push(e),A()}}()}},r.a.createElement(i.a.Content,{hidden:!0},"Undo"),r.a.createElement(i.a.Content,{visible:!0},r.a.createElement(s.a,{size:"large",name:"arrow alternate circle left outline"}))),r.a.createElement(i.a,{animated:"vertical",onClick:function(){return function(){if(j.length>0){var e=j.pop();if("added"===e){var t=R.pop();C.push(t)}else if("deleted"===e){var n=C.pop();b.push(n)}else if("transferred"===e){var a=R.pop(),r=C.pop();C.push(a),b.push(r)}x.push(e),A()}}()}},r.a.createElement(i.a.Content,{hidden:!0},"Redo"),r.a.createElement(i.a.Content,{visible:!0},r.a.createElement(s.a,{size:"large",name:"arrow alternate circle right outline"}))))),r.a.createElement(c.a.Row,{columns:6,textAlign:"center",style:{padding:0}},r.a.createElement(c.a.Column,null,r.a.createElement("h3",null,"Rewards")),r.a.createElement(c.a.Column,null,r.a.createElement("h4",null,"Category 1")),r.a.createElement(c.a.Column,null,r.a.createElement("h4",null,"Category 2")),r.a.createElement(c.a.Column,null,r.a.createElement("h4",null,"Category 3")),r.a.createElement(c.a.Column,null,r.a.createElement("h4",null,"Category 4")),r.a.createElement(c.a.Column,null,r.a.createElement("h4",null,"Category 5"))),r.a.createElement(c.a.Row,{style:{height:"86vh",paddingTop:0},textAlign:"center"},r.a.createElement(c.a.Column,{width:16},r.a.createElement(z,{storedPosition:e.storedPosition}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J,B=document.getElementById("root");J=function(e){return l.a.render(r.a.createElement($,{storedPosition:e}),B)},5===C.length&&fetch("/positions/1",{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json","Access-Control-Allow-Origin":"*"}}).then((function(e){e.json().then((function(e){C=e[0].positions,A()})).catch((function(e){return console.log(e)}))})).catch((function(e){return e})),y.push(J),A(),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},61:function(e){e.exports=JSON.parse('[{"pic":"auto.jpg","name":"Mercedes","cost":"$120,000"},{"pic":"cruise.jpg","name":"Cruise","cost":"$1,400"},{"pic":"food.jpg","name":"Restaurant","cost":"$500"},{"pic":"mac.jpg","name":"Apple Products","cost":"$3,000"},{"pic":"shoes.jpg","name":"Jordan Shoes","cost":"$200"}]')}},[[147,1,2]]]);