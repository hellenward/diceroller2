(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),i=a.n(o),c=(a(15),a(1)),l=a(2),s=a(5),u=a(3),m=a(6),d=a(4),h=(a(16),a(17),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"getValue",value:function(){return this.diceNumberInput.value}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("label",{className:"formText"},"Number of D",this.props.size," rolled"),r.a.createElement("input",{className:"formText",name:"diceNumber",type:"text",placeholder:"0",ref:function(t){return e.diceNumberInput=t}}))}}]),t}(r.a.Component)),b=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).onSubmit=a.onSubmit.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"onSubmit",value:function(e){e.preventDefault(),this.props.handleRoll({4:this.d4.getValue(),6:this.d6.getValue(),8:this.d8.getValue(),10:this.d10.getValue(),12:this.d12.getValue(),20:this.d20.getValue(),100:this.d100.getValue()})}},{key:"render",value:function(){var e=this;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("fieldset",{className:"formStyle"},r.a.createElement("legend",{className:"legendText"},"Roll your dice"),r.a.createElement(h,{size:4,ref:function(t){return e.d4=t}}),r.a.createElement(h,{size:6,ref:function(t){return e.d6=t}}),r.a.createElement(h,{size:8,ref:function(t){return e.d8=t}}),r.a.createElement(h,{size:10,ref:function(t){return e.d10=t}}),r.a.createElement(h,{size:12,ref:function(t){return e.d12=t}}),r.a.createElement(h,{size:20,ref:function(t){return e.d20=t}}),r.a.createElement(h,{size:100,ref:function(t){return e.d100=t}}),r.a.createElement("button",{className:"submitButton",type:"submit"},"Submit"),r.a.createElement("button",{className:"resetButton",type:"reset"},"Reset")))}}]),t}(r.a.Component),f=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.throwArray.reduce(function(e,t){return e+t.value},0);return r.a.createElement("p",{className:"totalScore"},"Total score: ",e)}}]),t}(r.a.Component),p=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"bitsToClear",className:"scoreTable"},r.a.createElement("div",null,this.props.throwArray.map(function(e,t){var a=e.sidesNumber,n=e.value;return n===a?r.a.createElement("p",{key:t,className:"newThrowGreen"},"You threw a ",n," on a ",a,"-sided die"):1===n?r.a.createElement("p",{key:t,className:"newThrowRed"},"You threw a 1 on a ",a,"-sided die"):r.a.createElement("p",{key:t,className:"newThrow"},"You threw a ",n," on a ",a,"-sided die")})),r.a.createElement("div",{className:"totalScore"},r.a.createElement(f,{throwArray:this.props.throwArray})))}}]),t}(r.a.Component),v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleRoll=a.handleRoll.bind(Object(m.a)(a)),a.state={throwArray:[],sidesNumber:0},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"handleRoll",value:function(e){var t=[];Object.keys(e).forEach(function(a){var n=parseInt(e[a],10);if(a=parseInt(a,10),!isNaN(n)&&!isNaN(a))for(var r=0;r<n;r++){var o=Math.floor(Math.random()*a+1);t.push({sidesNumber:a,value:o})}}),console.log(t),this.setState({throwArray:t,sidesNumber:0})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Dice Throw Calculator"),r.a.createElement("div",{className:"parentContainer"},r.a.createElement(b,{handleRoll:this.handleRoll}),r.a.createElement(p,{throwArray:this.state.throwArray,sidesNumber:this.state.sidesNumber})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.8ac38e4e.chunk.js.map