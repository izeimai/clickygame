(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:0,name:"a",image:"./img/a.PNG",counter:0},{id:1,name:"b",image:"./img/b.PNG",counter:0},{id:2,name:"c",image:"./img/c.PNG",counter:0},{id:3,name:"d",image:"./img/d.PNG",counter:0},{id:4,name:"e",image:"./img/e.PNG",counter:0},{id:5,name:"f",image:"./img/f.PNG",counter:0},{id:6,name:"g",image:"./img/g.PNG",counter:0},{id:7,name:"h",image:"./img/h.PNG",counter:0},{id:8,name:"i",image:"./img/i.PNG",counter:0},{id:9,name:"j",image:"./img/j.PNG",counter:0},{id:10,name:"k",image:"./img/k.PNG",counter:0},{id:11,name:"l",image:"./img/l.PNG",counter:0}]},,,function(e,t,a){e.exports=a(21)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(2),o=a.n(c),i=(a(15),a(3)),m=a(4),s=a(7),l=a(5),u=a(8);a(16);var g=function(e){return r.a.createElement("span",{className:"image",onClick:function(){return e.countImage(e.id)}},r.a.createElement("div",{className:"img-container text-center"},r.a.createElement("img",{src:e.image,alt:e.name})))};a(17);var d=function(e){return r.a.createElement("div",{className:"wrapper"},e.children)};a(18);var f=function(e){return r.a.createElement("div",{className:"jumbotron text-center"},r.a.createElement("h1",null,"Clicky Game"),r.a.createElement("h3",null,"Click on an image to earn points, but don't click on any more than once!"))};a(19);var h=function(e){return r.a.createElement("div",{className:"navbar"},r.a.createElement("h3",null,r.a.createElement("a",{href:"/clickygame"},"ClickyGame")),r.a.createElement("div",{className:"scores"},r.a.createElement("h3",null,"Score : ",e.score," | Top Score : ",e.topscore)))},v=a(6),p=(a(20),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={images:v,score:0,topscore:0},a.restartGame=function(){return a.state.score>a.state.topscore&&a.setState({topscore:a.state.score}),a.setState({score:0}),a.state.images.forEach(function(e){e.counter=0}),!0},a.shuffleImages=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*t),n=e[t];e[t]=e[a],e[a]=n}return e},a.countImage=function(e){for(var t,n=0;n<a.state.images.length;n++)a.state.images[n].id===e&&(t=a.state.images[n]);if(1!==t.counter){var r=a.state.score+1;a.setState({score:r}),a.state.topscore<=r&&a.setState({topscore:r}),t.counter=1,a.shuffleImages(a.state.images)}else a.restartGame()},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement(h,{score:this.state.score,topscore:this.state.topscore}),r.a.createElement(f,null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 text-center"},r.a.createElement("h1",{className:"title"},"Alphabet Images"))),r.a.createElement(d,null,this.state.images.map(function(t){return r.a.createElement(g,{image:t.image,countImage:e.countImage,id:t.id,key:t.id})})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.ec360a3b.chunk.js.map