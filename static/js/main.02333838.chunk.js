(this.webpackJsonpmathgame=this.webpackJsonpmathgame||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(0),a=n.n(c),i=n(8),s=n.n(i),o=(n(20),n(3)),u=n(4),d=n(6),l=n(5),O=(n(21),n(22),n(23),n(2)),j=function(){var e=Object(O.d)((function(e){return e.score}));return Object(r.jsxs)("div",{className:"flex justify-between",children:[Object(r.jsx)("div",{className:" w-15 "}),Object(r.jsx)("div",{className:"w-15"}),Object(r.jsxs)("div",{className:" score w-15",children:["Score: ",e]})]})},h=(n(30),function(){return Object(r.jsx)("div",{className:"correct",children:"Correct"})}),E=(n(31),function(){return Object(r.jsx)("div",{className:"wrong",children:"Try again"})}),b=(n(32),function(){var e=Object(O.d)((function(e){return e.x})),t=Object(O.d)((function(e){return e.y}));return Object(r.jsxs)("div",{className:"question",children:[e,"x",t]})}),p=(n(33),function(){return Object(r.jsx)("div",{className:"info",children:"Click on the correct answer"})}),f=(n(34),function(){return Object(r.jsxs)("div",{className:"flex choices",children:[Object(r.jsx)("div",{className:"box grow box1 ",children:Object(r.jsx)("code",{children:"1"})}),Object(r.jsx)("div",{className:"box grow box2",children:Object(r.jsx)("code",{children:"2"})}),Object(r.jsx)("div",{className:"box grow box3",children:Object(r.jsx)("code",{children:"3"})}),Object(r.jsx)("div",{className:" box box4 grow",children:Object(r.jsx)("code",{children:"4"})})]})}),v=(n(35),function(){return{type:"HIDE_TIME_REMAINING"}}),y=function(){return{type:"DISPLAY_GAME_OVER"}},N=function(){var e=Object(O.d)((function(e){return e.x})),t=Object(O.d)((function(e){return e.y})),n=Object(O.d)((function(e){return e.correctAnswer})),c=Object(O.c)();return Object(r.jsx)("div",{onClick:function(){c({type:"RESET_SCORE"}),c({type:"DISPLAY_TIME_REMAINING"}),c({type:"PLAYING_ON"}),c({type:"GENERATE_X"}),c({type:"GENERATE_Y"}),c({type:"HIDE_START_BUTTON"}),c({type:"DISPLAY_RESET_BUTTON"}),c(function(e,t){return{type:"GENERATE_ANSWER",payload:{x:e,y:t}}}(e,t)),c(function(e,t){return{type:"GENERATE_WRONG_ANSWER",payload:{x:e,y:t}}}(1+Math.round(9*Math.random()),1+Math.round(9*Math.random()))),c({type:"GENERATE_CORRECT_POSITION"}),c({type:"APPEND_CORRECT_ANSWER",payload:n})},className:"start grow",children:"Start Game"})},_=n(9),g=(n(36),function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).tick=r.tick.bind(Object(_.a)(r)),r.state={seconds:60},r}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.timer=setInterval(this.tick,1e3)}},{key:"tick",value:function(){this.state.seconds>0?this.setState({seconds:this.state.seconds-1}):(clearInterval(this.timer),this.props.displayGO(),this.props.hideTimeRemaining())}},{key:"render",value:function(){return Object(r.jsxs)("div",{className:"time",children:["Time remaining: ",this.state.seconds," sec"]})}}]),n}(a.a.Component)),R=Object(O.b)((function(e){return{displayGameOver:e.displayGameOver}}),{displayGO:y,hideTimeRemaining:v})(g),m=(n(37),function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).refreshPage=function(){window.location.reload(!0)},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(r.jsx)("div",{onClick:this.refreshPage,className:"reset grow",children:"Reset Game"})}}]),n}(a.a.Component)),T=(n(38),function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:"endgame",children:[Object(r.jsx)("p",{children:"Game Over"}),Object(r.jsxs)("p",{children:["Your score is ",this.props.score]})]})}}]),n}(a.a.Component)),A=Object(O.b)((function(e){return{score:e.score}}),{})(T),x=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.displayTimeRemaining,n=e.displayStartButton,c=e.displayResetButton,a=e.displayGameOver;return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(j,{}),Object(r.jsx)(h,{}),Object(r.jsx)(E,{}),Object(r.jsx)(b,{}),Object(r.jsx)(p,{}),Object(r.jsx)(f,{}),n?Object(r.jsx)(N,{}):"",c?Object(r.jsx)(m,{}):"",t?Object(r.jsx)(R,{}):"",a?Object(r.jsx)(A,{}):""]})}}]),n}(c.Component),w=Object(O.b)((function(e){return{displayTimeRemaining:e.displayTimeRemaining,displayGameOver:e.displayGameOver,displayStartButton:e.displayStartButton,displayResetButton:e.displayResetButton}}),{})(x),S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))},I=n(7),G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT":return e+t.payload;case"RESET_SCORE":return 0;default:return e}},P=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PLAYING_ON":return!0;default:return e}},D=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DISPLAY_TIME_REMAINING":return!0;case"HIDE_TIME_REMAINING":return!1;default:return e}},M=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DISPLAY_START_BUTTON":return!0;case"HIDE_START_BUTTON":return!1;default:return e}},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GENERATE_X":return 1+Math.round(9*Math.random());default:return e}},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GENERATE_Y":return 1+Math.round(9*Math.random());default:return e}},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"1",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GENERATE_ANSWER":return t.payload.x*t.payload.y;default:return e}},W=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DISPLAY_GAME_OVER":return!0;case"HIDE_GAME_OVER":return!1;default:return e}},L=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DISPLAY_RESET_BUTTON":return!0;case"HIDE_RESET_BUTTON":return!1;default:return e}},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GENERATE_CORRECT_POSITION":return 1+Math.round(3*Math.random());default:return e}},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GENERATE_WRONG_ANSWER":return t.payload.x*t.payload.y;default:return e}},H={correctAnswer:"",wrongAnswer1:"",wrongAnswer2:"",wrongAnswer3:""},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APPEND_CORRECT_ANSWER":return Object.assign({},e,{correctAnswer:t.payload});case"APPEND_WRONG_ANSWER1":return Object.assign({},e,{wrongAnswer1:t.payload});case"APPEND_WRONG_ANSWER2":return Object.assign({},e,{wrongAnswer2:t.payload});case"APPEND_WRONG_ANSWER3":return Object.assign({},e,{wrongAnswer3:t.payload});default:return e}},V=Object(I.b)({score:G,playing:P,displayTimeRemaining:D,displayStartButton:M,y:B,x:C,correctAnswer:k,displayGameOver:W,displayResetButton:L,correctPosition:Y,wrongAnswer:U,answers:X}),F=Object(I.c)(V,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());s.a.render(Object(r.jsx)(O.a,{store:F,children:Object(r.jsx)(w,{})}),document.getElementById("root")),S()}},[[39,1,2]]]);
//# sourceMappingURL=main.02333838.chunk.js.map